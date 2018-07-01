const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const hasSelectColor = document.querySelector('p');

let colorInput;

function makeGrid() {
    let html = '';
    
    // Get the values entered by the user to draw out the grid
    let gridHeight = document.querySelector('#inputHeight').value;
    let gridWidth = document.querySelector('#inputWidth').value;
    
    for (let row = 0; row < gridHeight; row++) {
        html += '<tr>';
        for (let col = 0; col < gridWidth; col++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }
    
    // Getting the markup generated above and append as a child to the table element
    pixelCanvas.innerHTML = html;
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});

colorPicker.addEventListener('input', function(e) {
    colorInput = e.target.value;
});

// Change the background color of the selected td
pixelCanvas.addEventListener('click', function(e) {
    // If color is not selected, display a message to the user telling them to select a color
    if (typeof colorInput === 'undefined') {
        hasSelectColor.style.display = 'block';
    } else {
        hasSelectColor.style.display = 'none';
    }

    const td = e.target;

    // Toggle the backgroundColor of the selected table cell on and off
   if (td.hasAttribute('style')) {
        td.removeAttribute('style');
    } else {
        td.style.backgroundColor = colorInput;
    }
});