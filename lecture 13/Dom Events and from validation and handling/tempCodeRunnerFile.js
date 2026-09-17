function validUsername(username) {
    //check 1
    if (username.value.trim().length === 0) {
        showError(username, "Please Enter you name")
        return false
    }