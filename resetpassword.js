

const form = document.getElementById('reset-form')
const messageEl = document.getElementById('message')

form.addEventListener('submit', async (e) => {
    const inputEmail = form.querySelector('input[type="email"]').value.trim()
    e.preventDefault() // prevent page reload
    const { data, error } = await client.auth.resetPasswordForEmail(inputEmail, {
        redirectTo: 'http://localhost:5501/reset.html' // page where user will set new password
    });

    if (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = 'red';
    } else {
        messageEl.textContent = 'Password reset email sent! Check your inbox.';
        messageEl.style.color = 'green';
    }

    setTimeout(() => {
        messageEl.textContent = ''
    }, 5000)
})
