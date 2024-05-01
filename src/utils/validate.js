export const checkValidate = (email, password) => {

    const IsEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const IsPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if (!IsEmailValid){
        return "Email is not valid";
    }

    if (!IsPasswordValid){
        return "Password is not valid";
    }

    return null;

}