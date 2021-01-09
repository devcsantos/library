let myBook = new Book('a','b','c','d');

var storedBooks = [myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook,myBook];

initializePage();

function initializePage() {
  initializeEventListeners();
  initializeLibraryCards();
}

function initializeEventListeners() {

}

function initializeLibraryCards() {
  let libraryContainer = document.getElementById('library-container');
  for(let x=0; x<storedBooks.length; x++) {
    let libraryCardBox = document.createElement('div');
    libraryCardBox.classList.add('library-card')
    for(const prop in storedBooks[x]) {
      let libraryCardDetail = document.createElement('div');
      libraryCardDetail.innerText = prop.toString();
      libraryCardBox.appendChild(libraryCardDetail);
    }
    libraryContainer.appendChild(libraryCardBox);
  }
  
   // adds an empty library card box at the end for adding new books
  addLibraryCardBox = document.createElement('div');
  addLibraryCardBox.setAttribute('id', 'new-library-card');
  addLibraryCardBox.innerText = '+';
  libraryContainer.appendChild(addLibraryCardBox);
}


function Book(bookTitle, bookAuthor, bookPages, bookRead) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = bookRead;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  storedBooks.push(newBook);
}

function removeBookFromLibrary() {

}