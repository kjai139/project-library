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
    });
    
}

//function to make cards

let createCards = () => {
    for (let x = 0; x < myLibrary.length; x++) {
        console.log(myLibrary[x][x].cover)
        
        let newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.setAttribute('id', `card${x}`)

        let newImage = document.createElement('img')
        newImage.classList.add('cardCover')
        if (myLibrary[x][x].cover != null) {
            newImage.setAttribute('src', `${myLibrary[x][x].cover}`)
        } else if (myLibrary[x][x].cover == null) {
            newImage.setAttribute('src', 'images/covers/nocover.jpeg')
        } 
        newCard.appendChild(newImage)

        let newTitle = document.createElement('p')
        newTitle.textContent = `${myLibrary[x][x].title}`
        newCard.appendChild(newTitle)

        //let checkboxDiv = document.createElement('div')
        //checkboxDiv.classList.add('checkboxDiv')
        //newCard.appendChild(checkboxDiv)

        let newCheckboxLabel = document.createElement('label')
        newCheckboxLabel.classList.add('labels')
        newCheckboxLabel.textContent = 'Read'
        newCard.appendChild(newCheckboxLabel)


        let newCheckbox = document.createElement('input')
        newCheckbox.classList.add('checkbox')
        newCheckbox.setAttribute('id', `checkbox${x}`)
        newCheckbox.setAttribute('type', 'checkbox')
        newCheckboxLabel.appendChild(newCheckbox)

        let removeBtn = document.createElement('button')
        removeBtn.classList.add(`removeBtn${x}`)
        removeBtn.textContent = 'Remove Book'
        newCard.appendChild(removeBtn)


        

        cardContainer.appendChild(newCard)

        

    }
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


    // read

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

    
})



let harryPotter = new book('Mushoku Tensei', 'images/covers/mushoku1.jpg')
let overLord = new book('Overlord', 'images/covers/overlord1.jpg')

addBookToLibrary(harryPotter, overLord)

createCards()



myLibrary.forEach(element => {
    console.log(element)
    console.log(element[0].title)
    
    
});