let myLibrary = []
let cardContainer = document.querySelector('.cardContainer')

function book(title, cover, read, pages) {
    this.title = title
    this.cover = cover
    this.read = read
    this.pages = pages
}

let addBookToLibrary = (...book) => {
    book.forEach(element => {
        myLibrary.push(book)
        console.log(element)
    });
    console.log('library:', myLibrary)
    
}

let markRead = (event) => {
    let marker = event.target
    let parentDiv = marker.parentElement.parentElement
    let id = event.target.getAttribute('id').slice(-1)
    console.log('markerid', id)
    if (marker.checked){
        myLibrary[id][0].read = 'yes'
        console.log('mylibrary read', myLibrary[id][0], myLibrary[id][0].read)
        parentDiv.classList.add('read')

    } else {
        myLibrary[id][0].read = 'no'
        console.log('mylibrary read', myLibrary[id][0], myLibrary[id][0].read)
        parentDiv.classList.remove('read')
    }
    
}

//funct to remove card

let removeCards = (event) => {
    let id = event.target.getAttribute('id').slice(-1)
    console.log(id)

    let getDiv = document.querySelector(`#card${id}`)
    getDiv.remove()

    myLibrary.splice(id, 1)
    console.log('after library', myLibrary)
}



//function to make cards

let createCards = () => {
    console.log('create card lib', myLibrary)
    cardContainer.textContent = ''
    

    for (let x = 0; x < myLibrary.length; x++) {
        console.log('COVER:', myLibrary[x][0].cover)
        
        let newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.setAttribute('id', `card${x}`)

        let newImage = document.createElement('img')
        newImage.classList.add('cardCover')
        if (myLibrary[x][0].cover != null) {
            newImage.setAttribute('src', `${myLibrary[x][0].cover}`)
        } else if (myLibrary[x][0].cover == null) {
            newImage.setAttribute('src', 'images/covers/nocover.jpg')
        } 
        newCard.appendChild(newImage)

        let newTitle = document.createElement('p')
        newTitle.classList.add('bookTitle')
        newTitle.textContent = `${myLibrary[x][0].title}`
        newCard.appendChild(newTitle)

        //let checkboxDiv = document.createElement('div')
        //checkboxDiv.classList.add('checkboxDiv')
        //newCard.appendChild(checkboxDiv)

        let newPages = document.createElement('p')
        newPages.classList.add('pagesTxt')
        if (myLibrary[x][0].pages != null){
            newPages.textContent = `${myLibrary[x][0].pages} Pages`
            
        } else {
            newPages.textContent = `Unknown Pages`
            newPages.classList.add('hidden')
        }
        newCard.appendChild(newPages)
        

        let newCheckboxLabel = document.createElement('label')
        newCheckboxLabel.classList.add('labels')
        newCheckboxLabel.setAttribute('id', `label${x}`)
        newCheckboxLabel.textContent = 'Read'
        newCard.appendChild(newCheckboxLabel)


        let newCheckbox = document.createElement('input')
        newCheckbox.classList.add('checkbox')
        newCheckbox.setAttribute('id', `checkbox${x}`)
        newCheckbox.setAttribute('type', 'checkbox')
        if (`${myLibrary[x][0].read}` == 'yes'){
            newCheckbox.checked = true;
            newCard.classList.add('read')
        }
        newCheckboxLabel.appendChild(newCheckbox)
        newCheckbox.addEventListener('change', markRead)

        //remove btn

        let removeBtn = document.createElement('button')
        removeBtn.classList.add('removeBtns')
        removeBtn.setAttribute('id', `removeBtn${x}`)
        removeBtn.textContent = 'Remove Book'

        removeBtn.addEventListener('click', removeCards)

        newCard.appendChild(removeBtn)




        

        cardContainer.appendChild(newCard)

        console.log('my library after create card', myLibrary)

    }
}

//submit func



let addBook = (event) => {
    event.preventDefault()
    console.log('submitted')

    //grab form 
    let formEl = document.forms.addBookForm
    let formData = new FormData(formEl)

    let bookTitle = formData.get('bookTitle')
    console.log(bookTitle)
    let newBook = new book(`${bookTitle}`)

    let bookRead = formData.get('yes_no')
    console.log(bookRead)

    //let bookCover = formData.get('cover')
    //let bookCover = document.querySelector('#cover').files[0]
    //console.log('bookcover:', bookCover)

    //create obj url
    let coverObj = URL.createObjectURL(formData.get('cover'))
    
    newBook.cover = coverObj
  
    

    console.log('cover obj', coverObj)

    
   

    let bookPages = formData.get('bookPages')
    console.log(bookPages)
  
    

    if (bookRead == null){
        newBook.read = 'no'
    } else {
        newBook.read = bookRead
    }
    
    
    if (bookPages == ''){
        newBook.pages = 'unknown' 
    } else {
        newBook.pages = bookPages
    }

    addBookToLibrary(newBook)
    createCards()

    let addContainer = document.querySelector('.addContainer')
    addContainer.textContent = ''
    addContainer.removeAttribute('class')
    
    

}



//add new book function

let newBook = document.querySelector('#addNewBookBtn')
console.log(newBook)

newBook.addEventListener('click', () => {
    let contContainer = document.querySelector('.contentContainer')

    let addNew = document.createElement('div')
    addNew.classList.add('addContainer')

    contContainer.appendChild(addNew)
    
    //form

    let newForm = document.createElement('form')
    newForm.setAttribute('method', 'post')
    newForm.setAttribute('id' , 'addBookForm')
    newForm.classList.add('addForm')
    addNew.appendChild(newForm)

    //title

    let newDiv = document.createElement('div')
    newForm.appendChild(newDiv)

    let newLabel = document.createElement('label')
    newLabel.setAttribute('for', 'bookTitle')
    newLabel.textContent = 'Book Title'
    newDiv.appendChild(newLabel)

    let newInput = document.createElement('input')
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('id', 'bookTitle')
    newInput.setAttribute('name', 'bookTitle')
    newInput.setAttribute('required', 'yes')
    newDiv.appendChild(newInput)


    // read status

    let newDiv2 = document.createElement('div')
    newForm.appendChild(newDiv2)

    let newLabel2 = document.createElement('label')
    newLabel2.setAttribute('for', 'bookRead')
    newLabel2.textContent = 'Read?'
    newDiv2.appendChild(newLabel2)

    //yes btn

    let newInput2 = document.createElement('input')
    newInput2.setAttribute('type', 'radio')
    newInput2.setAttribute('id', 'bookRead')
    newInput2.setAttribute('name', 'yes_no')
    newInput2.setAttribute('value', 'yes')

    let newInput2Label = document.createElement('label')
    newInput2Label.textContent = 'Yes'

    newDiv2.appendChild(newInput2Label)
    
    newDiv2.appendChild(newInput2)

    //no radio

    let newInput3 = document.createElement('input')
    newInput3.setAttribute('type', 'radio')
    newInput3.setAttribute('id', 'bookRead')
    newInput3.setAttribute('name', 'yes_no')

    newInput3.setAttribute('value', 'no')
    

    let newInput3Label = document.createElement('label')
    newInput3Label.textContent = 'No'

    newDiv2.appendChild(newInput3Label)

    newDiv2.appendChild(newInput3)


    //img
    let imgDiv = document.createElement('div')
    newForm.appendChild(imgDiv)


    let imgLabel = document.createElement('label')
    imgLabel.setAttribute('for', 'cover')
    imgLabel.textContent = 'Select Image'

    let imgInput = document.createElement('input')
    imgInput.setAttribute('type', 'file')
    imgInput.setAttribute('id', 'cover')
    imgInput.setAttribute('name', 'cover')
    imgInput.setAttribute('accept', 'iamges/*')

    

    imgDiv.appendChild(imgLabel)
    imgDiv.appendChild(imgInput)
    

    //pages

    let pageDiv = document.createElement('div')
    newForm.appendChild(pageDiv)

    let pageLabel = document.createElement('label')
    pageLabel.setAttribute('for', 'bookPages')
    pageLabel.textContent = 'Pages'

    pageDiv.appendChild(pageLabel)

    let pageInp = document.createElement('input')
    pageInp.setAttribute('type', 'number')
    pageInp.setAttribute('id', 'bookPages')
    pageInp.setAttribute('name', 'bookPages')
    pageInp.setAttribute('min' , '1')

    pageDiv.appendChild(pageInp)

    //submit

    let submitDiv = document.createElement('div')
    let submitBtn = document.createElement('button')
    submitBtn.classList.add('submitBtn')
    submitBtn.textContent = 'Add Book'
    
    newForm.appendChild(submitDiv)
    submitDiv.appendChild(submitBtn)
    

    let addForm = document.querySelector('.addForm')
    addForm.addEventListener('submit', addBook)
    
    
    
})





let harryPotter = new book('Mushoku Tensei', 'images/covers/mushoku1.jpg')
harryPotter.read = 'yes'
harryPotter.pages = '232'
let overLord = new book('Overlord', 'images/covers/overlord1.jpg')
let tbate = new book('The Beginning After The End', 'images/covers/tbate1.jpg')

addBookToLibrary(harryPotter)
addBookToLibrary(overLord)
addBookToLibrary(tbate)

console.log('mylibary', myLibrary)

createCards()

let myCollection = document.querySelector('#myCollectionBtn')

myCollection.addEventListener('click', createCards)



myLibrary.forEach(element => {
    console.log(element)
    console.log(element[0].title)
    
    
});

