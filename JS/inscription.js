const form = document.getElementById('inscription')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){6,}$/;
    const password2 = document.getElementById('password2').value;

    if (emailRegex.test(email)===false) {
        alert('Veuillez saisir une adresse e-mail valide.');
        return;
    }
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key === nom) {
            alert("Le nom d'utilisateur est déjà utilisé")
            return;
        }
    }
    if (passwordRegex.test(password)===false) {
        alert('Le mot de passe doit contenir au moins un chiffre, une lettre majuscule, une lettre minuscule et au moins 6 caractères ');
        return;
    }
    for (let i=0; i<localStorage.length;i++)
    {
        const key = localStorage.key(i);
        const values = localStorage.getItem(key);
        if (values === email)
        {
            alert("L'adresse mail est déjà utilisé")
            return;
        }
    }

    if(password2!==password)
    {
        alert(`Les mots de passes doivent être identiques`)
        return;
    }

    alert('Formulaire soumis avec succès !');
    localStorage.setItem(nom, email);
    window.location.href ='seconnecter.html'
})