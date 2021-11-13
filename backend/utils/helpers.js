const isEmpty = (data) => {
    if (data.trim() != ''){

        return true;
    } else {

        return false;
    }
}

const isEmail = (email) => {
    const regEx =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) {
        return true;
    } else {
        return false;
    }
}


const validateSignUpData = (data) => {
    let errors = {};
    var valid = true;

    if (!isEmpty(data.email)) {
        errors.email = "Email Field is required!"
        valid = false
    } else if (!isEmail(data.email)) {
        errors.email = "Must be a valid email address";
        valid = false
    }

    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Error, password didn't match!"
        valid = false
    }
    
    return { valid , errors }
     
}

const validateLogInData = (data) =>{
    let errors = {};

    if (!isEmpty(data.email)) {
        errors.email = "Email Field is required!"
    } else if (!isEmail(data.email)) {
        errors.email = "Must be a valid email address";
    }

    return {
        errors,
        valid:Object.keys(errors).length === 0 ? true: false
    }
}

export default {validateSignUpData, validateLogInData}