console.log(client)

const form = document.getElementById('login-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault() // prevent page reload
    const inputEmail = form.querySelector('input[type="email"]').value.trim()
    const inputPassword = form.querySelector('input[type="password"]').value.trim()
    const messageEl = document.getElementById('message')

    const { data, error } = await client.auth.signInWithPassword({
        email: inputEmail,
        password: inputPassword,
    })

    if (error) {
        console.error(error)

        // Show friendly message based on error
        if (error.message.toLowerCase().includes('invalid login credentials') ||
            error.message.toLowerCase().includes('invalid email or password')) {
            messageEl.textContent = 'Invalid email or password.'
            messageEl.style.color = 'red'
        } else {
            messageEl.textContent = 'Error: ' + error.message;
        }

    } else {
        // Successful login
        window.location.href = './linksy.html'
    }

    setTimeout(() => {
        messageEl.textContent = ''
    }, 5000)
})
