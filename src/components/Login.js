import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [clicked, setClicked] = useState(false)
    const [error, setError] = useState(false)
    const [loginForm, setLoginForm] = useState({})
    const history = useHistory()

    const login = async (e) => {
        e.preventDefault()
        const urlencoded = new URLSearchParams();
        const {email, password} = loginForm
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        const requestOptions = {
            method: 'POST',
            body: urlencoded,
            credentials: 'include'
        };
        setClicked(true)
        setError(false)
        const res = await fetch(`/login`, requestOptions);
        if (res.status === 201) {
            await history.push('/checkout')
        }
        setError(true)
        setClicked(false)
    }
    const changePath = () => {
        history.push('/signup')
    }
    const formHandler = (event) => {
        setLoginForm({...loginForm, [event.target.type]: event.target.value})
    }
    const {email = '', password = ''} = loginForm
    return (
        <div id="Login" className="ds-w-100">
            <main className="pa5 ds-login-pa5 bg-white">
                <form className="measure center" onSubmit={login}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 center">Sign in to you account</legend>
                        {error && <p className="lh-title ma4 cursive fw5 f4 light-red">
                            Please try again.
                        </p>}
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba  w-100"
                                   type="email" name="email-address" value={email}
                                   id="email-address" onChange={(e) => formHandler(e)}
                                   disabled={clicked}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba w-100"
                                   type="password" name="password" value={password}
                                   id="password" onChange={(e) => formHandler(e)}
                                   disabled={clicked}/>
                        </div>
                    </fieldset>
                    {!clicked && <div>
                        <input className="b br2 ph3 pv3 input-reset ba b--none bg-gray grow pointer f6 dib w-100"
                               type="submit"
                               value={clicked ? '' : 'Sign in'}
                               disabled={clicked}/>
                        <font-awesome-icon icon="spinner" spin size="2x" className="icon-s"/>
                    </div>}

                    {!clicked && <div className="lh-copy mt3" onClick={changePath}>
                        <p>Don't have an account?</p>
                        <span className="f6 link dim black db center">Create an account</span>
                    </div>}
                </form>
            </main>

        </div>
    )
}

export default Login