let myLibrary = []
let cardContainer = document.querySelector('.cardContainer')

function book(title, cover, read) {
    this.title = title
    this.cover = cover
    this.read = read
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

        

        cardContainer.appendChild(newCard)

    }
}


let harryPotter = new book('Mushoku Tensei', 'images/covers/mushoku1.jpg')
let overLord = new book('Overlord', 'images/covers/overlord1.jpg')

addBookToLibrary(harryPotter, overLord)

createCards()



myLibrary.forEach(element => {
    console.log(element)
    console.log(element[0].title)
    
    
});