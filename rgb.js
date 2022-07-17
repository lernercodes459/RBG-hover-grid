const body = document.querySelector('body')
const container = document.querySelector('.main-container')
const rows = document.getElementsByClassName('row')
const cells = document.getElementsByClassName('cell')

//creates div grid in the dom
makeGrid()

body.addEventListener('mouseover', rgbChange)

function rgbChange(event){
    let rgbStorage = ['rgb', '(', ')']

    for(i = 0; i < 3; i++){

        const num = randomInt(255).toString()
        if(i != 2){
            rgbStorage.splice((2 * i) + 2, 0, num, ',')
        }else{
            rgbStorage.splice((2 * i) + 2, 0, num)
        }
        
    }
    const value = rgbStorage.join('')
    
    event.target.style.backgroundColor = value
}

function randomInt(max){
    return Math.floor(Math.random() * max)
}

function makeGrid(){
    makeRows(19)
    makeCells(40)
}

function makeRows(amount){
    for(i = 0; i < amount; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
    }
}

function makeCells(amount){
    for(i = 0; i < rows.length; i++){
        for(j = 0; j < amount; j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            rows[i].appendChild(cell)
        }
    }
}