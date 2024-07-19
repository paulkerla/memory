const form = document.getElementById('connexion');
console.log(form)
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("entree");
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)
    let boolean = false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key === email) {
            boolean = true;
            if (localStorage.getItem(key) === password) {
                alert('Félicitation, vous vous êtes connectés. Vous pouvez commencer à jouer')
            }
            else (alert('Mot de passe incorrect'))
            return;
        }
    }
    if (boolean === false) {
        alert('Email incorrect !')
    }
})