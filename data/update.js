const users = require("./users.json");

users.forEach(user => {
    setTimeout(() => {
        fetch('http://localhost:3000/v1/api/user/'+encodeURIComponent(user.email), {
            body: JSON.stringify({
                description: user.description,
                blood_group: user.blood_group,
                height: user.height,
                marital_status: user.marital_status,
                weight: user.weight,
                complexion: user.complexion,
                nationality: user.nationality,
                date_of_birth: user.date_of_birth,
                present_address: user.present_address,
                permanent_address: user.permanent_address
            }),
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(d => console.log(d))
        .catch(e => console.log(e.message))
    }, 500)
});