const feedbacks = [
    {
        name: "Sinthia T.",
        message: "Linksy made it so easy to organize all my social links in one place. My followers love it!",
        rating: 5
    },
    {
        name: "Sumon D.",
        message: "I was able to create a professional page in minutes without any coding. Highly recommend!",
        rating: 4
    },
    {
        name: "Adam M.",
        message: "The QR sharing feature is amazing. My clients love scanning and instantly accessing all my links.",
        rating: 4
    },
]

const feedbackListEl = document.getElementById('feedback-list')

function fetchFeedbacks(reviews) {
    reviews.forEach(review => {
        const card = document.createElement('div')
        card.classList = 'bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition'

        let stars = ''
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                stars += '★'
            } else {
                stars += "☆"
            }
        }
        card.innerHTML =
            `
        <div class="flex justify-center mb-2 text-yellow-400">${stars}</div>
        <p class="text-gray-300 mb-4">"${review.message}"</p>
        <h3 class="font-semibold text-white">– ${review.name}</h3>
    `
        feedbackListEl.append(card)
    })
}

export {feedbacks, fetchFeedbacks}
