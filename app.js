/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const addButton = document.querySelector('#add');
const form = document.querySelector('form');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formIsRead = document.getElementById('isRead');
const formSubmitButton = document.querySelector('#submit');
const formCancelButton = document.querySelector('#cancel');
const library = document.querySelector('.library');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deleteBook(e) {
    myLibrary.splice(e.target.parentNode.parentNode.dataset.index, 1);
    displayLibrary();
}

function toggleRead(e) {
    myLibrary[e.target.parentNode.dataset.index].isRead = !(myLibrary[e.target.parentNode.dataset.index].isRead);
    displayLibrary();
}

function displayLibrary() {
    Array.from(library.children).forEach(book => {
        library.removeChild(book);
    })
    myLibrary.forEach ((book, index) => {
        const card = document.createElement('div');
        const cardDelete = document.createElement('button');
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardIsRead = document.createElement('button');

        cardDelete.innerHTML = `<img src="images/delete-outline.svg">`;
        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = `${book.pages} pages`;
        cardIsRead.textContent = (book.isRead) ? "Already read" : "Not yet read";
        card.dataset.index = index;

        cardDelete.addEventListener('click', deleteBook);
        cardIsRead.addEventListener('click', toggleRead);

        card.appendChild(cardDelete);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardIsRead);
        card.classList.add('card');
        library.appendChild(card);
    });
}

function toggleForm() {
    if(addButton.style.display === "block") {
        form.style.display = "grid";
        addButton.style.display = "none";
    } else {
        form.style.display = "none";
        form.reset();
        addButton.style.display = "block";
    }
}

addButton.addEventListener('click', toggleForm);

function submitForm(e) {
    if(form.checkValidity()) {
        e.preventDefault();
        const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formIsRead.checked);
        addBookToLibrary (newBook);
        toggleForm();
        displayLibrary();
    }
}

formSubmitButton.addEventListener('click', submitForm);

formCancelButton.addEventListener('click', toggleForm);

// hardcode books
const book1 = new Book("The Devotion of Suspect X", "Keigo Higashino", 320, true);
const book2 = new Book("Salvation of a Saint", "Keigo Higashino", 336, true);
const book3 = new Book("A Midsummers Equation", "Keigo Higasino", 368, false);
const book4 = new Book("Confessions", "Kanae Minato", 234, true);
const book5 = new Book("Journey Under the Midnight Sun", "Keigo Higashino", 539, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

displayLibrary();