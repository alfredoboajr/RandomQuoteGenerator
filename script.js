alert("This site is created by Alfredo Boa Jr")
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
  const apiUrl = 'https://api.quotable.io/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author;
  } catch (error) {
    console.log('Error fetching quote: ', error);
  }
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();
