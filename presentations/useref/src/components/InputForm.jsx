import React, { useState, useRef, useEffect } from "react";

function InputForm(){
    const [ signUpDetails, setSignUpDetails ] = useState({
        name: "",
        password: ""
    });

    const passwordRef = useRef();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    useEffect(() => {
        const passwordInputRef = passwordRef.current;

        if(passwordRegex.test(signUpDetails.password)){
            passwordInputRef.style.border = "5px solid green";
        } else {
            passwordInputRef.style.border = "5px solid red";
        }
    }, [signUpDetails.password]);

    function handleChange(event){
        const { name, value } = event.target;

        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        });
    }

    return (
        <div>
            <h1>Input Form</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={signUpDetails.name} onChange={handleChange} />
                <br/>
                <label htmlFor="password">Password: </label>
                <input ref={passwordRef} type="password" id="password" name="password" onChange={handleChange} value={signUpDetails.password} />
                <br/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default InputForm;
