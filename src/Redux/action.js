const setUser = (userObj) => {
    console.log(userObj)
    return {
        type: "SET_USER",
        payload: userObj
    }
}


export {
    setUser
}