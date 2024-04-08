let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only impossible journey is the one you never begin. - Tony Robbins"
];

let show_quote = document.getElementById('quotes')
let quote_choosen = document.getElementById('generate');

function quoteSelector(){
    let quote = Math.floor(Math.random() * quotes.length)
    return quotes[quote];
}

function showQuote(){
    show_quote.innerHTML = quoteSelector()
    console.log('successful')
}


quote_choosen.addEventListener('click', showQuote)