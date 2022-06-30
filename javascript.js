let myLibrary = []

function book(title) {
    this.title = title
}

let addBookToLibrary = (...book) => {
    book.forEach(element => {
        myLibrary.push(book)
    });
    
}


let harryPotter = new book('Harry Potter')
let overLord = new book('Overlord')

addBookToLibrary(harryPotter, overLord)



myLibrary.forEach(element => {
    console.log(element)
});