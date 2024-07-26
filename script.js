document.getElementById('apply').addEventListener('click', function() {
    const selectors = [
        {
            checkbox: document.getElementById('checkbox-1'),
            id: document.getElementById('selector-id-1'),
            property: document.getElementById('selector-property-1'),
            value: document.getElementById('selector-value-1')
        },
        {
            checkbox: document.getElementById('checkbox-2'),
            id: document.getElementById('selector-id-2'),
            property: document.getElementById('selector-property-2'),
            value: document.getElementById('selector-value-2')
        },
        {
            checkbox: document.getElementById('checkbox-3'),
            id: document.getElementById('selector-id-3'),
            property: document.getElementById('selector-property-3'),
            value: document.getElementById('selector-value-3')
        },
        {
            checkbox: document.getElementById('checkbox-4'),
            id: document.getElementById('selector-id-4'),
            property: document.getElementById('selector-property-4'),
            value: document.getElementById('selector-value-4')
        }
    ];

    selectors.forEach(selector => {
        if (selector.checkbox.checked) {
            applyStyle(selector);
        }
    });
});

function applyStyle(selector) {
    const id = selector.id.value;
    const property = selector.property.value;
    const value = selector.value.value;

    if (selector.checkbox.id === 'checkbox-1') {
        const element = document.getElementById(id);
        if (element) {
            element.style[property] = value;
        } else {
            alert('Element not found');
        }
    } else if (selector.checkbox.id === 'checkbox-2') {
        const elements = document.getElementsByClassName(id);
        if (elements.length > 0) {
            Array.from(elements).forEach(element => {
                element.style[property] = value;
            });
        } else {
            alert('No elements found with class ' + id);
        }
    } else if (selector.checkbox.id === 'checkbox-3') {
        const element = document.querySelector(id);
        if (element) {
            element.style[property] = value;
        } else {
            alert('No element found with selector ' + id);
        }
    } else if (selector.checkbox.id === 'checkbox-4') {
        const elements = document.querySelectorAll(id);
        if (elements.length > 0) {
            elements.forEach(element => {
                element.style[property] = value;
            });
        } else {
            alert('No elements found with selector ' + id);
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

function displayGridCode() {
    const gridHtml = `
    <div class="pixel to-red" id="pixel-1"></div>
    <div class="pixel" id="pixel-2"></div>
    <div class="pixel" id="pixel-3"></div>
    <div class="pixel" id="pixel-4"></div>
    <div class="pixel to-red" id="pixel-5"></div>
    <div class="pixel" id="pixel-6"></div>
    <div class="pixel" id="pixel-7"></div>
    <div class="pixel" id="pixel-8"></div>
    <div class="pixel to-red" id="pixel-9"></div>
    <div class="pixel" id="pixel-10"></div>
    <div class="pixel" id="pixel-11"></div>
    <div class="pixel" id="pixel-12"></div>
    <div class="pixel to-red" id="pixel-13"></div>
    <div class="pixel" id="pixel-14"></div>
    <div class="pixel" id="pixel-15"></div>
    <div class="pixel" id="pixel-16"></div>`;

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
