import { useState } from "react";
import { addUser } from '../../service/usuario';
import { alertSimple } from '../../service/alert';
import { useHistory } from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState({nombre: '', apellido: '', telefono: '', email: '', password: ''})
    // const [userLogin, setUserLogin] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({})
    const history = useHistory()
    // const userLog = useContext(UserProvider)

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await addUser(user)
        if(resp.type) {
            alertSimple(resp.message)
        } else {
            return setErrors(resp.message)
        }
        setUser({nombre: '', apellido: '', telefono: '', email: '', password: ''});
        setErrors({})
        history.push('/')
    };

    // const handleChangeLogin = event => {
    //     const { name, value } = event.target;
    //     setUserLogin({
    //       ...userLogin,
    //       [name]: value
    //     });
    // };

    // const handleSubmitLogin = async (event) => {
    //     event.preventDefault()
    //     const res = await loginUser(userLogin)
    //     if(res.type) {
    //         alertSimple(res.message)
    //     } else {
    //         return setErrors(res.message)
    //     }
    //     // userLog.userLog({
    //     //     token: res.data.token,
    //     //     user: res.data.user
    //     // })
    //     // setUsuario({
    //     //     token: localStorage.setItem('token', res.data.token),
    //     //     user: res.data.user
    //     // })
    //     setUserLogin({email: '', password: ''})
    //     setErrors({})
    //     history.push('/')
    // }

    return {
        handleChange,
        handleSubmit,
        // handleChangeLogin,
        // handleSubmitLogin,
        user,
        // userLogin,
        errors
    }
}

export default useAuth;