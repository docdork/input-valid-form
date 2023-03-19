import { useState } from "react";

function Form() {

    

    const [boxColor, setBoxColor] = useState("text-primary-emphasis bg-primary-subtle border border-primary-subtle");
    const [isValid, setIsValid] = useState(true);
    const [invalidMessage, setInvalidMessage] = useState('');

    function emailInputHandler(event) {
        const email = event.target.value;
        setBoxColor("text-primary-emphasis bg-primary-subtle border border-primary-subtle")

        console.log(email);

        if (email.includes('@')) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

    }

    function passwordInputHandler(event) {
        const password = event.target.value;
        setBoxColor("text-primary-emphasis bg-primary-subtle border border-primary-subtle")
        console.log(password);

        if (password.length > 6) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

    }

    function submitHandler(event) {
        event.preventDefault();

        if (!isValid) {
            setBoxColor("text-danger-emphasis bg-danger-subtle border border-danger-subtle");
            setInvalidMessage(<h3 className="text-danger">Invalid email or password</h3>);
        } else {
            setBoxColor("text-primary-emphasis bg-primary-subtle border border-primary-subtle");
            setInvalidMessage('');
        }

    }



    return (
        <div className="position-relative">
            <form className="input-group mb-3">
                <div className="input-group-text">
                    <label htmlFor="email" className="me-3">Email</label>
                    <input id="email" onChange={emailInputHandler} className={boxColor} />
                </div>
                <div className="input-group-text">
                    <label htmlFor="password" className="me-3">Password</label>

                    <input type='password' id="password" onChange={passwordInputHandler} className={boxColor} />
                </div>
                <button className="btn btn-success" onClick={submitHandler}>Submit</button>
            </form>
            {invalidMessage}
        </div>)
};
export default Form;