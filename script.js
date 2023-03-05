let ship2 = document.querySelector('#ship2');
let start = document.querySelector('#start');
let cells = document.querySelectorAll('.cell');

let orient = true;

let chars = ['a','b','c','d','e'];

let rotation = () => {


    if(orient)
    {
        orient = false;
    }
    else
    {
        orient = true;
    }

}

let enemy_deploy = () => {
    let rand_orient = Math.floor(Math.random() * 2);
    let e_ships = 0;

    if(rand_orient>0)
    {

        while(!(e_ships===2))
        {
            let rand_num = Math.floor(Math.random() * 4) +1;
            let rand_line = Math.floor(Math.random() * 5);
            
            console.log(rand_num);

            let id = '#f' + chars[rand_line] + rand_num;
            rand_num++;
            let next_id = '#f' + chars[rand_line] + rand_num;

            let element = document.querySelector(id);
            let element2 = document.querySelector(next_id);

            if(!(element.classList.contains('deployed')) && !(element2.classList.contains('deployed')))
            {
                element.classList.add('deployed');
                element2.classList.add('deployed');
                e_ships++;
            }
        }
        

        
    }
    else {

    }

}

let deploy = (event) => {
    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1));
    let cell_line = next_cell_id.charAt(0);

    if(orient) {
        next_cell_number++;
    let new_id = '#' + cell_line + next_cell_number;

    let element = document.querySelector(new_id);

    element.classList.remove('cell_planning1');
    event.currentTarget.classList.remove('cell_planning1');

    if(!(event.currentTarget.classList.contains('denied')) && !(element.classList.contains('denied')))
    {
        document.querySelector(new_id).classList.add('deployed');
        event.currentTarget.classList.add('deployed');
    }
    }
    else {
        let array_index = chars.indexOf(cell_line);

        let next_cell_line = chars[array_index+1];

        let new_h_id = '#' + next_cell_line + next_cell_number;

        let element = document.querySelector(new_h_id);

        element.classList.remove('cell_planning1');
        event.currentTarget.classList.remove('cell_planning1');

    if(!(event.currentTarget.classList.contains('denied')) && !(element.classList.contains('denied')))
    {
        element.classList.add('deployed');
        event.currentTarget.classList.add('deployed');
    }
    }
}

let hover = (event) => {

    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1));
    let cell_line = next_cell_id.charAt(0);

    if(orient)
    {
        next_cell_number++;
        let new_id = '#' + cell_line + next_cell_number;

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
    else
    {
        let array_index = chars.indexOf(cell_line);

        let next_cell_line = chars[array_index+1];

        let new_h_id = '#' + next_cell_line + next_cell_number;

        let element = document.querySelector(new_h_id);

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
            document.querySelector(new_h_id).classList.add('cell_planning1');
            event.currentTarget.classList.add('cell_planning1');
            
        }
    }
    
}

let unhover = (event) => {

    let next_cell_id = event.srcElement.id;

    let next_cell_number = parseInt(next_cell_id.charAt(1));
    let cell_line = next_cell_id.charAt(0);

    if(orient)
    {
        next_cell_number++;
        let new_id = '#' + cell_line + next_cell_number;

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
    else {

        let array_index = chars.indexOf(cell_line);

        let next_cell_line = chars[array_index+1];

        let new_h_id = '#' + next_cell_line + next_cell_number;

        let element = document.querySelector(new_h_id);

        if(event.currentTarget.classList.contains('denied') || element.classList.contains('denied')) {
            event.currentTarget.classList.remove('denied');
            element.classList.remove('denied');
        }
        else
        {
            document.querySelector(new_h_id).classList.remove('cell_planning1');
            event.currentTarget.classList.remove('cell_planning1');
        }
        
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

document.addEventListener('wheel', rotation);
start.addEventListener('click', enemy_deploy);
ship2.addEventListener('click', pickship);