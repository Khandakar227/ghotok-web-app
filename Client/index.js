const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')

function handleLogin() {
    if (!loginForm) return;
    /**
     * @param {SubmitEvent} e 
     */
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data);
        console.dir(e.target)
        const submitButton = document.getElementById('submit')
        const initialText = submitButton.innerText
        submitButton.innerText = "Loading..."
        submitButton.disabled = true

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'credentials': 'include'},
            body: JSON.stringify(data)
          };
          
          fetch('http://localhost:3000/v1/api/auth/login', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                submitButton.innerText = initialText
                submitButton.disabled = false
            })
            .catch(err => {
                console.error(err);
                submitButton.innerText = initialText
                submitButton.disabled = false
            });
    }
}

function handleSignup() {
    if (!signupForm) return;
    /**
     * @param {SubmitEvent} e 
     */
    signupForm.onsubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
        console.log(data);
    }
}

handleLogin()
handleSignup()