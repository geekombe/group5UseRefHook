import React, { useState, useRef } from "react";

function InputForm(){
    const [ signUpDetails, setSignUpDetails ] = useState({
        name: "",
        password: ""
    })

    const passwordRef = useRef();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value 

        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        })
        console.log(signUpDetails)
        const passwordInputRef = passwordRef.current;

        if(passwordRegex.test(signUpDetails)){
            passwordInputRef.style.border = "5 px solid green"
        } else {
            passwordInputRef.style.border = "5 px solid red"
        }
        
    }

    return (
        <div>
            <h1>Input Form</h1>
            <form>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" value={signUpDetails.name}/>
                <br/>
                <label for="password">Password: </label>
                <input ref={passwordRef} type="text" id="password" name="password" onChange={handleChange} value={signUpDetails.password}/>
                <br/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default InputForm;