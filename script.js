async function fetchBooks() {
  const response = await fetch('https://api.example.com/books');
  const data = await response.json();

  const bookList = document.getElementById('bookList');

  data.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = book.title;
    bookItem.appendChild(title);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    bookItem.appendChild(author);

    const genre = document.createElement('p');
    genre.textContent = 'Genre: ' + book.genre;
    bookItem.appendChild(genre);

    

    bookList.appendChild(bookItem);
  });
}

fetchBooks();
