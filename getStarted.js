console.log(client)

const form = document.getElementById('get-started-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault() // prevent page reload
    const inputEmail = form.querySelector('input[type="email"]').value.trim()
    const inputPassword = form.querySelector('input[type="password"]').value.trim()
    const messageEl = document.getElementById('message')

    const { data, error } = await client.auth.signUp({
        email: inputEmail,
        password: inputPassword,
    })

    // Case 1: Supabase returned error
    if (error) {
        if (error.message.toLowerCase().includes('registered')) {
            messageEl.style.color = 'red'
            messageEl.textContent = 'This email is already registered. Please log in instead.'
        } else {
            messageEl.style.color = 'red'
            messageEl.textContent = error.message;
        }
        setTimeout(() => {
            messageEl.textContent = ''
        }, 5000)

        return
    }

    // Case 2: No error, but user already exists (no new user object created)
    if (data?.user?.identities?.length === 0) {
        messageEl.style.color = 'red'
        messageEl.textContent = 'This email is already registered. Please log in instead.'
        setTimeout(() => {
            messageEl.textContent = ''
        }, 5000)

        return
    }

    // Case 3: New user created → confirmation email sent
    messageEl.style.color = 'green'
    messageEl.textContent = 'Check your inbox to confirm your email. After that, log in.'
    setTimeout(() => window.location.href = 'https://emrankhan-dev.github.io/Linksy/login.html', 2000)
})
