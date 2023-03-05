let ship2 = document.querySelector('#ship2');
let cells = document.querySelectorAll('.cell');

let hover = (event) => {

    console.log(event.srcElement.id);

    let next_cell = event.srcElement.id;

    
}

let pickship = () => {
    

    for (let cell of cells) {
        cell.classList.add('cell_planning');
    }

    
}

    for (let cell of cells) {
        cell.addEventListener('mouseover', hover);
        
    }


ship2.addEventListener('click', pickship);