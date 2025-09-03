const getStartedForm = document.getElementById('get-started-form')

console.log(getStartedForm)

getStartedForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('submit')
    window.location.href = './linksy.html'
})