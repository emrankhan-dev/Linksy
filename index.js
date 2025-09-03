import { feedbacks, fetchFeedbacks } from "./feedbacks.js"

// fetch feedbacks dynamically
fetchFeedbacks(feedbacks)

// footer year changes dynamically
const year = document.getElementById('year')
const currentYear = new Date().getFullYear()
year.textContent = currentYear

