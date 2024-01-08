const users = require("./users.json");

users.forEach(user => {
    setTimeout(() => {
        fetch('http://localhost:3000/v1/api/auth/signup', {
            body: JSON.stringify({
                email: user.email,
                username: user.username,
                password: user.password,
                contact_no: user.contact_no,
                gender: user.gender
            }),
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(d => console.log(d))
        .catch(e => console.log(e.message))
    }, 500)
});