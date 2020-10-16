import React, {useContext} from 'react'
import userContext from '../../context/user/userContext'

const Signin = () => {
    const { handleChangeLogin, handleSubmitLogin, email, password, error, isLoading } = useContext(userContext)

    return (
        <div className="container mt-4">
            <div className="row justify-content-md-center">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>Registro</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmitLogin}>
                                {error && <span className="text-danger">{error}</span>}
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Email" className="form-control" value={email} onChange={handleChangeLogin} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Password" className="form-control" value={password} onChange={handleChangeLogin} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-block" disabled={isLoading}>
                                        {
                                            isLoading ? 'Ingresando...' : 'Ingresar'
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
