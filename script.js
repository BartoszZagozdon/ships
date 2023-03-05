let ship2 = document.querySelector('#ship2');
let cells = document.querySelectorAll('.cell');

let deploy = (event) => {
    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1))+1;
    let next_cell_line = next_cell_id.charAt(0);

    let new_id = '#' + next_cell_line + next_cell_number;

    let element = document.querySelector(new_id);

    element.classList.remove('cell_planning1');
    event.currentTarget.classList.remove('cell_planning1');

    if(!(event.currentTarget.classList.contains('denied')) && !(element.classList.contains('denied')))
    {
        document.querySelector(new_id).classList.add('deployed');
        event.currentTarget.classList.add('deployed');
    }

    

}

let hover = (event) => {

    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1))+1;
    let next_cell_line = next_cell_id.charAt(0);

    let new_id = '#' + next_cell_line + next_cell_number;

    let element = document.querySelector(new_id);

    console.log(element);

    if(element.classList.contains('deployed')) {
        if(!(event.currentTarget.classList.contains('deployed')))
        {
            
            event.currentTarget.classList.add('denied');
        }
        
    }
    else if(event.currentTarget.classList.contains('deployed')) {
        
        element.classList.add('denied');
    }
    else {
        document.querySelector(new_id).classList.add('cell_planning1');
        event.currentTarget.classList.add('cell_planning1');
        
    }

    
    
}

let unhover = (event) => {

    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1))+1;
    let next_cell_line = next_cell_id.charAt(0);

    let new_id = '#' + next_cell_line + next_cell_number;

    let element = document.querySelector(new_id);

    if(event.currentTarget.classList.contains('denied') || element.classList.contains('denied')) {
        event.currentTarget.classList.remove('denied');
        element.classList.remove('denied');
    }
    else
    {
        document.querySelector(new_id).classList.remove('cell_planning1');
        event.currentTarget.classList.remove('cell_planning1');
    }

}

let pickship = () => {
    

    for (let cell of cells) {
        cell.classList.add('cell_planning');
    }

    
}

    for (let cell of cells) {
        cell.addEventListener('mouseover', hover);
        cell.addEventListener('mouseout', unhover);
        cell.addEventListener('click', deploy);
    }


ship2.addEventListener('click', pickship);