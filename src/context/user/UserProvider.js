import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { loginUser, checkLoggedIn } from '../../service/usuario';
import { alertSimple } from '../../service/alert';
import { withRouter } from 'react-router-dom';

const UserProvider = props => {
    const initialState = {
        email: '',
        password: '',
        user: null,
        token: localStorage.getItem('token'),
        isLoading: false,
        error: '',
        isLoggedIn: false,
    }

    const [state, dispatch] = useReducer(userReducer, initialState)
    const { email, password, error, isLoading, isLoggedIn } = state

    const loadUser = async () => {
        dispatch({type: 'login'})
        if (localStorage.getItem('token')) {
            const res = await checkLoggedIn(localStorage.getItem('token'))
            if(res.user) {
                dispatch({
                    type: 'loggedin',
                    payload: res
                })
            } else {
                dispatch({
                    type: 'auth_error',
                })
            }
        } else {
            dispatch({type: 'auth_error'})
        }
    }

    const handleChangeLogin = event => {
        const { name, value } = event.target;
        dispatch({
            type: 'field',
            fieldName: name,
            payload: value,
        })
    };

    const handleSubmitLogin = async (event) => {
        event.preventDefault()
        dispatch({ type: 'login' });
        const res = await loginUser({email, password})
        if(res.type) {
            alertSimple(res.message)
            dispatch({
                type: 'success',
                payload: res.data
            })
            props.history.push('/')
        } else {
            dispatch({
                type: 'error',
                payload: res.message,
            })
        }
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
        alertSimple('Hasta Luego!')
        props.history.push('/')
    }

    return (
        <UserContext.Provider value={{
            handleChangeLogin,
            handleSubmitLogin,
            loadUser,
            logOut,
            email,
            password,
            error,
            isLoading,
            isLoggedIn
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default withRouter(UserProvider)
