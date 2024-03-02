// Bool Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Ahmed Sandoqah',
                isbn: '1643513'
            }, {
                title: 'Book Tow',
                author: 'Giath Sandoqah',
                isbn: '1643513'
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row)
    }
    static clearFields() {
        document.querySelector('#book-form').reset()
    }
}
// Store Class: Handles Storage

// Event: Display a Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book)

    // Clear fields
    UI.clearFields()
})

// Event: Remove a Book 
