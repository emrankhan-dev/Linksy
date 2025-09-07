const form = document.getElementById('new-password-form');
const messageEl = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  if (password !== confirmPassword) {
    messageEl.textContent = 'Passwords do not match';
    messageEl.style.color = 'red';
    return;
  }

  // Update password with Supabase
  const { data, error } = await client.auth.updateUser({ password });

  if (error) {
    messageEl.textContent = error.message;
    messageEl.style.color = 'red';
  } else {
    messageEl.textContent = 'Password updated successfully!';
    messageEl.style.color = 'green';
    // Redirect to login after 2 seconds
    setTimeout(() => window.location.href = '/login.html', 2000);
  }

  setTimeout(() => {
    messageEl.textContent = '';
  }, 5000);
});
