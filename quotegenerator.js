
// 58 quotes
quotes=[
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him","David Brinkley",
    "Always bear in mind that your own resolution to success is more important than any other one thing","Abraham Lincoln",
    "Always remember that you are absolutely unique. Just like everyone else","Margaret Mead",
    "Do not let making a living prevent you from making a life","John Wooden",
    "Don't be afraid to give up the good to go for the great","John D. Rockefeller",
    "Don't judge each day by the harvest you reap but by the seeds that you plant","Robert Louis Stevenson",
    "Famous quote by Maya Angelou15. Never let the fear of striking out keep you from playing the game.","Babe Ruth",
    "Famous quote by Nelson Mandela26. Life is really simple, but we insist on making it complicated.","Confucius",
    "Go confidently in the direction of your dreams! Live the life you've imagined","Henry David Thoreau",
    "I failed my way to success","Thomas Edison",
    "I find that the harder I work, the more luck I seem to have","Thomas Jefferson",
    "I never dreamed about success, I worked for it","Estee Lauder",
    "If life were predictable it would cease to be life and be without flavor","Eleanor Roosevelt",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success","James Cameron",
    "In the end, it's not the years in your life that count. It's the life in your years","Abraham Lincoln",
    "In this life we cannot do great things. We can only do small things with great love","Mother Teresa",
    "In three words I can sum up everything I've learned about life: it goes on","Robert Frost",
    "It is better to fail in originality than to succeed in imitation","Herman Melville",
    "It is during our darkest moments that we must focus to see the light","Aristotle",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about","Marilyn Monroe",
    "Life is a long lesson in humility","James M. Barrie",
    "Life is a succession of lessons which must be lived to be understood","Ralph Waldo Emerson",
    "Life is either a daring adventure or nothing at all","Helen Keller",
    "Life is made of ever so many partings welded together","Charles Dickens",
    "Life is ours to be spend, not to be saved","D. H. Lawrence",
    "Life is trying things to see if they work","Ray Bradbury",
    "Life is what happens when you're busy making other plans","John Lennon",
    "Life itself is the most wonderful fairy tale","Hans Christian Andersen",
    "Live in the sunshine, swim the sea, drink the wild air","Ralph Waldo Emerson",
    "Love the life you live. Live the life you love","Bob Marley",
    "Many of life's failures are people who did not realize how close they were to success when they gave up","Thomas A. Edison",
    "May you live all the days of your life","Jonathan Swift",
    "Only a life lived for others is a life worthwhile","Albert Einstein",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier","Mother Teresa",
    "Success is not final; failure is not fatal: It is the courage to continue that counts","Winston S. Churchill",
    "Success is walking from failure to failure with no loss of enthusiasm","Winston Churchill",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit","Conrad Hilton",
    "Success usually comes to those who are too busy to be looking for it","Henry David Thoreau",
    "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better","Jim Rohn",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn","Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart.","Helen Keller",
    "The future belongs to those who believe in the beauty of their dreams","Eleanor Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall","Nelson Mandela",
    "The only impossible journey is the one you never begin","Tony Robbins",
    "The only limit to our realization of tomorrow will be our doubts of today","Franklin D. Roosevelt",
    "The purpose of our lives is to be happy","Dalai Lama",
    "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere","Barack Obama",
    "The road to success and the road to failure are almost exactly the same","Colin R. Davis",
    "The secret of success is to do the common thing uncommonly well","John D. Rockefeller Jr.",
    "The way to get started is to quit talking and begin doing","Walt Disney",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure","Colin Powell",
    "Things work out best for those who make the best of how things work out","John Wooden",
    "Try not to become a man of success. Rather become a man of value","Albert Einstein",
    "When you reach the end of your rope, tie a knot in it and hang on","Franklin D. Roosevelt",
    "Whoever is happy will make others happy too","Anne Frank",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose","Dr. Seuss",
    "You know you are on the road to success if you would do your job and not be paid for it","Oprah Winfrey",
    "You only live once, but if you do it right, once is enough","Mae West",
    "You will face many defeats in life, but never let yourself be defeated","Maya Angelou"
]

function change_quote() {
    let qn = randomgenerator(quotes.length/2);
    document.getElementById("quote").innerText=quotes[qn*2];
    document.getElementById("author").innerText=quotes[qn*2+1];


    fetch('https://quotes.rest/qod?language=en')
    .then(response => response.json())
    .then(data =>
        document.getElementById("qod").innerText = (data.contents.quotes[0].quote + data.contents.quotes[0].author)
    );

}

function randomgenerator(max) {
    return Math.floor(Math.random() * max)
}

