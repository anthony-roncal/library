/* eslint-disable no-console */
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
        console.log(book);
        
    });
}

const book1 = new Book("Title", "Author", 10, false);
const book2 = new Book("Title 2", "Author 2", 20, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayLibrary();