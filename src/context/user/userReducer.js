export default (state, action) => {
    switch (action.type) {
        case 'loggedin': {
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                isLoading: false
            };
        }   
        case 'field': {
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        }
        case 'login': {
            return {
                ...state,
                error: '',
                isLoading: true,
            };
        }
        case 'success': {
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                email: '',
                password: '',
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
                isLoading: false,
            };
        }
        case 'error': {
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false,
                isLoading: false,
            };
        }
        case 'auth_error': {
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
            };
        }
        case 'logOut': {
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false,
                user: null, 
                isLoading: false,
                token: localStorage.getItem('token')
            };
        }
        default:
            return state;
    }
}