const body = document.querySelector('body')

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
    
    event.target.style.color = value
}

function randomInt(max){
    return Math.floor(Math.random() * max)
}

function makeGrid(){
    makeRows()
    makeCells()
}

function makeRows(amount){
    
}