/* eslint-disable no-console */
const library = document.querySelector('.library');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach (book => {
        const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardIsRead = document.createElement('p');
        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        cardIsRead.textContent = (book.isRead) ? "Already read" : "Not yet read";
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardIsRead);
        card.classList.add('card');
        library.appendChild(card);
    });
}

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