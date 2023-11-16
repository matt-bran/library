const myLibrary = [];

const my_book = new Book('Book', 'Author', '300', '149');
myLibrary.push(my_book);

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return this.title + " by " + this.author + ", " + pages + " pages, " + haveRead;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const btn = document.querySelector('#add_btn');

btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = "flex";
    modal.style.flexDirection = "row";
    modal.style.justifyContent = "center";
})

/*
const div_books = document.querySelector('.books');

const book_card = document.createElement('div');
book_card.classList.add('card');

const book_title = document.createElement('h3');
book_title.textContent = 'Book';
book_card.appendChild(book_title);

const book_author = document.createElement('p');
book_author.textContent = 'Author';
book_card.appendChild(book_author);

const book_pages = document.createElement('p');
book_pages.textContent = '300';
book_card.appendChild(book_pages);

const book_read = document.createElement('p');
book_read.textContent = 'Have read 149';
book_card.appendChild(book_read);

div_books.append(book_card);
*/
