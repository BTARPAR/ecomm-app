import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import {API_URL} from "../utils/constant";

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',

    })
    const createUser = async (e) => {
        e.preventDefault()
        const urlencoded = new URLSearchParams();
        urlencoded.append("email", form.email);
        urlencoded.append("password", form.password);
        urlencoded.append("firstName", form.firstname);
        urlencoded.append("lastName", form.lastname);

        const requestOptions = {
            method: 'POST',
            body: urlencoded,
            credentials: 'include'
        };
        const res = await fetch(API_URL(`${process.env.URL}/signup`), requestOptions);
        if (res.status === 201) {
            useHistory.push('/')
        }
    }
    const formChangeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div id="SignUp">
            <main className="pa5  bg-white">
                <form className="measure center" onSubmit={createUser}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 flex flex-column items-center">
                        <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3 w-60 flex flex-column">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba "
                                   type="email" name="email"
                                   id="email-address" value={form.email} onChange={formChangeHandler}/>
                        </div>
                        <div className="mv3 w-60 flex flex-column">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba"
                                   type="password" name="password"
                                   id="password" value={form.password} onChange={formChangeHandler}/>
                        </div>
                        <div className="mv3 w-60 flex flex-column">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="firstname">Firstname</label>
                            <input className="b pa2 input-reset ba"
                                   type="text" name="firstname"
                                   id="firstname" value={form.firstname} onChange={formChangeHandler}/>
                        </div>
                        <div className="mv3 w-60 flex flex-column">
                            <label className="db fw6 lh-copy f6 tl" htmlFor="lastname">Lastname</label>
                            <input className="b pa2 input-reset ba"
                                   type="text" name="lastname"
                                   id="lastname" value={form.lastname} onChange={formChangeHandler}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="submit"
                               value="Sign up"/>
                    </div>
                </form>
            </main>

        </div>
    )
}

export default SignUp