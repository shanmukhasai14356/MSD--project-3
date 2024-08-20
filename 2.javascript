// Initial state
let isToggled = false;

function toggleState() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (isToggled) {
        // Revert to initial state
        container.style.backgroundColor = '#fff';
        text.textContent = 'This is the text inside the container.';
        button.textContent = 'Click me!';
        button.style.backgroundColor = '#fff';
        button.style.color = '#000';
    } else {
        // Change state
        container.style.backgroundColor = '#4CAF50';
        text.textContent = 'Text and color changed!';
        button.textContent = 'Revert';
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
    }

    isToggled = !isToggled;
}