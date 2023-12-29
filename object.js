const myLibrary = [];


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        const readStatus = this.isRead ? "Have been read" : "Not yet read";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}
  
document.getElementById("saveButton").addEventListener("click", function (){
    event.preventDefault();

    const title = document.getElementById("titleInput").value;
    const author = document.getElementById("authorInput").value;
    const pages = document.getElementById("pagesInput").value;
    const isRead = document.getElementById("isReadInput").checked;
    const isReadValue = isRead ? "yes" : "no";

    const newBook = new Book(title, author, pages, isReadValue);
    myLibrary.push(newBook);

    console.log(myLibrary.map(book => book.info()));

    const displayArea = document.getElementById("displayArea");
    displayArea.textContent = myLibrary.map(book => book.info()).join('\n');
})