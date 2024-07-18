function isUserInLocalStorage(name, email) {
    let usersContent = localStorage.getItem("users");
    let usersArray = JSON.parse(usersContent);
    if (usersArray.length === 0) {
        return false;
    }

    const allNames = [];
    const allEmail = [];

    for (const user of usersArray) {
        allNames.push(user.name);
        allEmail.push(user.email);
    }

    for (let i = 0; i < allNames.length; i++) {
        if (allNames[i] === name && allEmail[i] === email) {
            return true;
        }
    }
    return false;
}

function storageDataInLocal(name, email, password) {
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", "[]");
    }

    const user = {
        "name": name,
        "email": email,
        "password": password,
        "scores": [],
        "favoriteMemory": "",
        "favoriteSize": ""
    };

    let usersContent = localStorage.getItem("users");
    let usersArray = JSON.parse(usersContent);

    usersArray.push(user);
    usersContent = JSON.stringify(usersArray);
    localStorage.setItem("users", usersContent);
}