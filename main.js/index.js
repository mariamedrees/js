const quotes = [
    "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
    "He who sows kindness reaps gratitude.",
    "Optimism is the faith that leads to achievement.",
    "Happiness is not something ready-made, it comes from your own actions.",
    "Success is going from failure to failure without losing your enthusiasm.",
    "The mind is everything. What you think you become.",
    "Nothing is impossible, the word itself says 'I'm possible.'",
    "What you do today can improve all your tomorrows.",
    "If you can dream it, you can do it.",
    "Strength does not come from physical capacity, it comes from an indomitable will."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
