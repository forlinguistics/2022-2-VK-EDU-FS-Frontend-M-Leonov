import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', handleSubmit);
window.addEventListener('load', loadMessages);

function handleSubmit(event) {
    event.preventDefault();
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    saveMessage(input.value, 'me', time)
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML("beforeend",
        `<p class="message-item"">
            <span>${input.value}</span>
            </p>`)

    input.value = '';
}

function saveMessage(message, sender, time) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    // add to it,
    messages.push({message: message, sender: sender, time: time});
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages(event) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    const list = document.querySelector('.messages');
    for (const message of messages)
    {
        list.insertAdjacentHTML("beforeend",
            `<p class="message-item"">
            <span class="message-text">${message.message}</span>
            <span class="message-time">${message.time}</span>
            </p>`)
    }
}