import React, {useState} from 'react'
import '../styles/resetPassword.scss'

const ResetPassword = () => {

    const [error, setError] = useState({})
    const [form, setForm] = useState({
        confirm: '',
        password: ''
    })

    const checkResetPasswordError = (e) => {
        e.preventDefault()
        const errorCheck = {}
        const lowerCaseLetters = /[a-z]/g;
        if (form.confirm.match(lowerCaseLetters)) {
            errorCheck.lowercase = false
        } else {
            errorCheck.lowercase = true
        }

        // Validate capital letters
        const upperCaseLetters = /[A-Z]/g;
        if (form.confirm.match(upperCaseLetters)) {
            errorCheck.uppercase = false
        } else {
            errorCheck.uppercase = true
        }

        // Validate numbers
        const numbers = /[0-9]/g;
        if (form.confirm.match(numbers)) {
            errorCheck.number = false
        } else {
            errorCheck.number = true
        }

        // Validate length
        if (form.confirm.length >= 8) {
            errorCheck.length = false
        } else {
            errorCheck.length = true
        }

        setError(errorCheck)

        if (!Object.keys(errorCheck).filter((error) => errorCheck[error]).length) {
            fetch('/reset', {method: 'POST'})
                .then((res) => setForm({
                    confirm: '',
                    password: ''
                }))
        }
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.id]: event.target.value});
    }


    return (
        <div className='resetPassword'>
            <div className="container">
                <form onSubmit={checkResetPasswordError}>
                    <label htmlFor="password">Current Password</label>
                    <input type="text" id="password" name="password" required onChange={handleChange}
                           value={form.password}/>

                    <label htmlFor="confirm">Enter new password</label>
                    <input type="password" id="confirm" name="confirm" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                           title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                           required onChange={handleChange} value={form.confirm}/>

                    <input type="submit" className='grow pointer' value="Submit"/>
                </form>
            </div>
            <div id="message">
                {!!error.lowercase && <p id="letter" className="invalid">
                    A <b>lowercase</b> letter
                </p>}
                {!!error.uppercase && <p id="capital" className="invalid">
                    A <b>capital (uppercase)</b> letter
                </p>}
                {!!error.number && <p id="number" className="invalid">
                    A <b>number</b>
                </p>}
                {!!error.length && <p id="length" className="invalid">
                    Minimum <b>8 characters</b>
                </p>}
            </div>
        </div>
    )
}

export default ResetPassword