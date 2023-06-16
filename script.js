const API_URL = 'https://example.com/api/books';

const bookList = document.getElementById('book-list');
const searchBar = document.getElementById('search-bar');

async function fetchBooks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching book data:', error);
    return [];
  }
}

function displayBooks(books) {
  bookList.innerHTML = '';

  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year of Publishing: ${book.year}</p>
      <p>Available: ${book.available}</p>
      <p>Copies: ${book.copies}</p>
      <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
    `;

    bookList.appendChild(bookElement);
  });
}

searchBar.addEventListener('input', async (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const books = await fetchBooks();

  const filteredBooks = books.filter((book) => {
    const bookTitle = book.title.toLowerCase();
    const bookAuthor = book.author.toLowerCase();
    const bookGenre = book.genre.toLowerCase();
    const bookYear = book.year.toString();
    
    return (
      bookTitle.includes(searchTerm) ||
      bookAuthor.includes(searchTerm) ||
      bookGenre.includes(searchTerm) ||
      bookYear.includes(searchTerm)
    );
  });

  displayBooks(filteredBooks);
});

fetchBooks()
  .then((books) => {
    displayBooks(books);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
