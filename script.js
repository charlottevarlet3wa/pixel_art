const errorElem = document.getElementById('error');

document.getElementById('apply').addEventListener('click', function() {
    const selectors = [
        {
            checkbox: document.getElementById('checkbox-1'),
            id: sanitizeInput(document.getElementById('selector-id-1').value),
            property: sanitizeInput(document.getElementById('selector-property-1').value),
            value: sanitizeInput(document.getElementById('selector-value-1').value)
        },
        {
            checkbox: document.getElementById('checkbox-2'),
            id: sanitizeInput(document.getElementById('selector-id-2').value),
            property: sanitizeInput(document.getElementById('selector-property-2').value),
            value: sanitizeInput(document.getElementById('selector-value-2').value)
        },
        {
            checkbox: document.getElementById('checkbox-3'),
            id: sanitizeInput(document.getElementById('selector-id-3').value),
            property: sanitizeInput(document.getElementById('selector-property-3').value),
            value: sanitizeInput(document.getElementById('selector-value-3').value)
        },
        {
            checkbox: document.getElementById('checkbox-4'),
            id: sanitizeInput(document.getElementById('selector-id-4').value),
            property: sanitizeInput(document.getElementById('selector-property-4').value),
            value: sanitizeInput(document.getElementById('selector-value-4').value)
        }
    ];

    selectors.forEach(selector => {
        if (selector.checkbox.checked) {
            applyStyle(selector);
        }
    });
});



function displayError(msg) {
    errorElem.textContent = msg;
}

function applyStyle(selector) {
    const id = selector.id;
    const property = selector.property;
    const value = selector.value;


    if (!isValidCssValue(selector.property, selector.value)) {
        displayError('Invalid CSS value');
    }

    const validProperties = ['backgroundColor', 'border', 'borderRadius', 'opacity', 'position', 'left','top','bottom','right', 'display', 'width', 'height', 'transform', 'padding', 'margin', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-left', 'margin-top', 'margin-right', 'margin-bottom', 'zIndex', 'boxShadow'];
    if (!validProperties.includes(selector.property)) {
        displayError('Invalid CSS property');
        return;
    }


    if (selector.checkbox.id === 'checkbox-1') {
        const element = document.getElementById(id);
        if (element) {
            element.style[property] = value;
        } else {
            displayError('Element not found');
        }
    } else if (selector.checkbox.id === 'checkbox-2') {
        console.log('id :' +id)
        console.log('first letter : ' + id[0])
        let newId = id;
        if(id[0] == '.'){
            newId = id.substr(1);
        } 
        const elements = document.getElementsByClassName(newId);
        console.log('id :' +id)
        console.log("elements:")
        console.log(elements)
        if (elements.length > 0) {
            Array.from(elements).forEach(element => {
                element.style[property] = value;
            });
        } else {
            errorElem.textContent = 'No elements found with class ' + id;
        }
    } else if (selector.checkbox.id === 'checkbox-3') {
        const element = document.querySelector(id);
        if (element) {
            element.style[property] = value;
        } else {
            errorElem.textContent = 'No element found with selector ' + id;
        }
    } else if (selector.checkbox.id === 'checkbox-4') {
        const elements = document.querySelectorAll(id);
        if (elements.length > 0) {
            elements.forEach(element => {
                element.style[property] = value;
            });
        } else {
            errorElem.textContent = 'No elements found with selector ' + id;
        }
    }
}
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}

function isValidCssValue(property, value) {
    const cssValueRegex = /^[a-zA-Z0-9#.,()\s%-]+$/;
    return cssValueRegex.test(value);
}

function displayGridCode() {
    const gridHtml = `
    <div class="pixel row-1 col-1" id="pixel-1"></div>
    <div class="pixel row-1 col-2" id="pixel-2"></div>
    <div class="pixel row-1 col-3" id="pixel-3"></div>
    <div class="pixel row-1 col-4" id="pixel-4"></div>
    <div class="pixel row-2 col-1" id="pixel-5"></div>
    <div class="pixel row-2 col-2" id="pixel-6"></div>
    <div class="pixel row-2 col-3" id="pixel-7"></div>
    <div class="pixel row-2 col-4" id="pixel-8"></div>
    <div class="pixel row-3 col-1" id="pixel-9"></div>
    <div class="pixel row-3 col-2" id="pixel-10"></div>
    <div class="pixel row-3 col-3" id="pixel-11"></div>
    <div class="pixel row-3 col-4" id="pixel-12"></div>
    <div class="pixel row-4 col-1" id="pixel-13"></div>
    <div class="pixel row-4 col-2" id="pixel-14"></div>
    <div class="pixel row-4 col-3" id="pixel-15"></div>
    <div class="pixel row-4 col-4" id="pixel-16"></div>`;

    const escapedHtml = escapeHtml(gridHtml);
    document.querySelector('#code code').innerHTML = escapedHtml;
    Prism.highlightAll();
}

document.addEventListener('DOMContentLoaded', displayGridCode);

// Toggle checkbox when the paragraph is clicked, except when clicking on input elements
document.querySelectorAll('#selectors p').forEach((paragraph, index) => {
    paragraph.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() !== 'input') {
            const checkbox = document.querySelector(`#checkbox-${index + 1}`);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        }
    });
});

// Prevent checkbox toggle when clicking on input elements inside the paragraphs
document.querySelectorAll('#selectors p input').forEach((input) => {
    input.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});



// TARGET IMAGE

const images = [
    {
        name: 'Pikachu',
        image: 'pikachu.png'
    },
    {
        name: 'Link',
        image: 'link.jpg'
    },
    {
        name: 'Mario',
        image: 'mario.jpg'
    },
    {
        name: 'Peach',
        image: 'peach.jpg'
    },
    {
        name: 'Pacman',
        image: 'pacman.jpg'
    }
];

let currentIndex = 0;
const targetImageDiv = document.getElementById('target-image');
const titleElem = document.querySelector('h2');

function updateBackgroundImage() {
    targetImageDiv.style.backgroundImage = `url(images/${images[currentIndex].image})`;
    titleElem.textContent = `${images[currentIndex].name}`;
}

// Initial background image
updateBackgroundImage();

document.getElementById('next-image').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length; // Go to the next image, loop around if at the end
    updateBackgroundImage();
});

document.getElementById('prev-image').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to the previous image, loop around if at the start
    updateBackgroundImage();
});