// script.js
document.getElementById('apply').addEventListener('click', function() {
    const id = document.getElementById('selector-id').value;
    const property = document.getElementById('selector-property').value;
    const value = document.getElementById('selector-value').value;

    const element = document.getElementById(id);
    if (element) {
        element.style[property] = value;
    } else {
        alert('Element not found');
    }
});


// script.js
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
    <div>
        <div class="pixel to-red" id="pixel-1"></div>
        <div class="pixel" id="pixel-2"></div>
        <div class="pixel" id="pixel-3"></div>
        <div class="pixel" id="pixel-4"></div>
    </div>
    <div>
        <div class="pixel to-red" id="pixel-5"></div>
        <div class="pixel" id="pixel-6"></div>
        <div class="pixel" id="pixel-7"></div>
        <div class="pixel" id="pixel-8"></div>
    </div>
    <div>
        <div class="pixel to-red" id="pixel-9"></div>
        <div class="pixel" id="pixel-10"></div>
        <div class="pixel" id="pixel-11"></div>
        <div class="pixel" id="pixel-12"></div>
    </div>
    <div>
        <div class="pixel to-red" id="pixel-13"></div>
        <div class="pixel" id="pixel-14"></div>
        <div class="pixel" id="pixel-15"></div>
        <div class="pixel" id="pixel-16"></div>
    </div>`;

    const escapedHtml = escapeHtml(gridHtml);
    document.querySelector('#code code').innerHTML = escapedHtml;
    Prism.highlightAll();
}

document.addEventListener('DOMContentLoaded', displayGridCode);
