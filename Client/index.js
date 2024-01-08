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