class Library {
    constructor (name) {
        this.name = name
    }
    myLibrary = []

    Books = class Books{
        constructor(title, cover, read, pages) {
            this.title = title
            this.cover = cover
            this.read = read
            this.pages = pages

        }
    } 

    addBookToLibrary = (...book) => {
        book.forEach(element => {
            this.myLibrary.push(book)
        });
    }

   

    markRead = (event) => {
        let marker = event.target
        let parentDiv = marker.parentElement.parentElement
        let id = event.target.getAttribute('id').slice(-1)
        
        if (marker.checked){
            this.myLibrary[id][0].read = 'yes'
           
            parentDiv.classList.add('read')
    
        } else {
            this.myLibrary[id][0].read = 'no'
           
            parentDiv.classList.remove('read')
        }
        
    }
    



    removeCards = (event) => {
        let id = event.target.getAttribute('id').slice(-1)
        
    
        let getDiv = document.querySelector(`#card${id}`)
        getDiv.remove()
    
        this.myLibrary.splice(id, 1)
        
    }

    createCards = () => {
        
        cardContainer.textContent = ''
        
    
        for (let x = 0; x < this.myLibrary.length; x++) {
            
            
            let newCard = document.createElement('div')
            newCard.classList.add('card')
            newCard.setAttribute('id', `card${x}`)
    
            let newImage = document.createElement('img')
            newImage.classList.add('cardCover')
            if (this.myLibrary[x][0].cover != null) {
                newImage.setAttribute('src', `${this.myLibrary[x][0].cover}`)
            } else if (this.myLibrary[x][0].cover == null) {
                newImage.setAttribute('src', 'images/covers/nocover.jpg')
            } 
            newCard.appendChild(newImage)
    
            let newTitle = document.createElement('p')
            newTitle.classList.add('bookTitle')
            newTitle.textContent = `${this.myLibrary[x][0].title}`
            newCard.appendChild(newTitle)
    
    
            let newPages = document.createElement('p')
            newPages.classList.add('pagesTxt')
            if (this.myLibrary[x][0].pages != null){
                newPages.textContent = `${this.myLibrary[x][0].pages} Pages`
                
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
            if (`${this.myLibrary[x][0].read}` == 'yes'){
                newCheckbox.checked = true;
                newCard.classList.add('read')
            }
            newCheckboxLabel.appendChild(newCheckbox)
            newCheckbox.addEventListener('change', library1.markRead)
    
            //remove btn
    
            let removeBtn = document.createElement('button')
            removeBtn.classList.add('removeBtns')
            removeBtn.setAttribute('id', `removeBtn${x}`)
            removeBtn.textContent = 'Remove Book'
    
            removeBtn.addEventListener('click', library1.removeCards)
    
            newCard.appendChild(removeBtn)
    
    
    
    
            
    
            cardContainer.appendChild(newCard)
    
            
    
        }
    }
    addBookBtn = (event) => {
        
        
    
        //grab form 
        let formEl = document.forms.addBookForm
        let formData = new FormData(formEl)
    
        let bookTitle = formData.get('bookTitle')
        
        let newBook = new library1.Books(`${bookTitle}`)
    
        let bookRead = formData.get('yes_no')
       
    
        //let bookCover = formData.get('cover')
        //let bookCover = document.querySelector('#cover').files[0]
        
    
        //create obj url
        let coverObj = URL.createObjectURL(formData.get('cover'))
        
        newBook.cover = coverObj
      
        
    
       
    
        
       
    
        let bookPages = formData.get('bookPages')
        
      
        
    
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
    
        library1.addBookToLibrary(newBook)
        library1.createCards()
    
        let addContainer = document.querySelector('.addContainer')
        addContainer.textContent = ''
        addContainer.removeAttribute('class')
        
        
    
    }
    
    
}



let library1 = new Library('1')

let newBook = document.querySelector('#addNewBookBtn')


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

    let newInputDiv = document.createElement('div')

    let newInput = document.createElement('input')
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('id', 'bookTitle')
    newInput.setAttribute('name', 'bookTitle')
    newInput.setAttribute('required', 'yes')
    newDiv.appendChild(newInputDiv)
    newInputDiv.appendChild(newInput)

    let titleError = document.createElement('span')
    titleError.classList.add('hidden')
    titleError.classList.add('errorMsg')
    titleError.setAttribute('id', 'titleError')


    newInputDiv.appendChild(titleError)


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

    let imgInputDiv = document.createElement('div')

    let imgInput = document.createElement('input')
    imgInput.setAttribute('type', 'file')
    imgInput.setAttribute('id', 'cover')
    imgInput.setAttribute('name', 'cover')
    imgInput.setAttribute('accept', 'iamges/*')

    let imgError = document.createElement('span')
    imgError.setAttribute('id', 'imgError')
    imgError.classList.add('hidden')
    imgError.classList.add('errorMsg')

    imgInputDiv.appendChild(imgInput)
    imgInputDiv.appendChild(imgError)

    imgDiv.appendChild(imgLabel)
    imgDiv.appendChild(imgInputDiv)
    

    //pages

    let pageDiv = document.createElement('div')
    newForm.appendChild(pageDiv)

    let pageLabel = document.createElement('label')
    pageLabel.setAttribute('for', 'bookPages')
    pageLabel.textContent = 'Pages'

    pageDiv.appendChild(pageLabel)

    let pageInputDiv = document.createElement('div')

    let pageInp = document.createElement('input')
    pageInp.setAttribute('type', 'number')
    pageInp.setAttribute('id', 'bookPages')
    pageInp.setAttribute('name', 'bookPages')
    pageInp.setAttribute('min' , '1')


    let pageError = document.createElement('span')
    pageError.classList.add('hidden')
    pageError.classList.add('errorMsg')
    pageError.setAttribute('id', 'pageError')

    pageInputDiv.appendChild(pageInp)
    pageInputDiv.appendChild(pageError)
    pageDiv.appendChild(pageInputDiv)

    //submit

    let submitDiv = document.createElement('div')
    let submitBtn = document.createElement('button')
    submitBtn.classList.add('submitBtn')
    submitBtn.textContent = 'Add Book'
    
    newForm.appendChild(submitDiv)
    submitDiv.appendChild(submitBtn)
    

    let addForm = document.querySelector('.addForm')
    submitBtn.addEventListener('click', validateForm)





})





let cardContainer = document.querySelector('.cardContainer')
let myCollection = document.querySelector('#myCollectionBtn')

myCollection.addEventListener('click', library1.createCards)



const validateForm = (e) => {
    e.preventDefault()
    


    let addBookForm = document.querySelector('#addBookForm')
    addBookForm.noValidate = true
    let bookTitle = document.querySelector('#bookTitle')
    let ImgUpload = document.querySelector('#cover')
    let bookPages = document.querySelector('#bookPages')

    let titleError = document.querySelector('#titleError')
    let imgError = document.querySelector('#imgError')
    let pageError = document.querySelector('#pageError')

    if (bookTitle.value == ''){
        titleError.textContent = 'Please enter a book name'
        titleError.classList.remove('hidden')
    } else {

        bookTitle.classList.add('valid')
        titleError.classList.add('hidden')
    }
    
    if (ImgUpload.value != ''){
        ImgUpload.classList.add('valid')
    } else {
        imgError.textContent = 'Please upload a cover'
        imgError.classList.remove('hidden')
    }

    if (bookPages.value == ''){
        pageError.textContent  = 'Please enter a number'
        pageError.classList.remove('hidden')
    } else {
        if (isNaN(bookPages.value) != false){
            console.log(isNaN(bookPages.value))
            pageError.textContent = 'Please enter a numeric value'
            pageError.classList.remove('hidden')
        } else {
            bookPages.classList.add('valid')
        }
    }


    if (bookTitle.classList.contains('valid') && bookPages.classList.contains('valid') && ImgUpload.classList.contains('valid')){
        library1.addBookBtn()
    }

    console.log(bookTitle)

    console.log(addBookForm)
    
}

