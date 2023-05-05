export const SET_USER = "SET_USER"
export const REGISTER_USER="REGISTER_USER"
const setUser = (userObj) => {
    console.log(userObj)
    return {
        type: SET_USER,
        payload: userObj
    }
}

const registerUser = (userObj) => {
    console.log(userObj)
    return {
        type: REGISTER_USER,
        payload: userObj
    }
}


export {
    setUser
}