// script.js
require('dotenv').config();
const apiKey = process.env.API_KEY;

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Initialize the conversation with the first question
initializeChat();

async function initializeChat() {
    addMessage('AI', 'Welcome! What genre of story would you like to read?');
    userInput.disabled = false;
    sendButton.disabled = false;
}

// Handle user input and send it to ChatGPT
function sendUserInput() {
    const userMessage = userInput.value;
    addMessage('User', userMessage);
    userInput.value = '';
    userInput.disabled = true;
    sendButton.disabled = true;
    fetchStoryFromChatGPT(userMessage);
}

// Display message in chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender.toLowerCase()}-message`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fetch story or options from ChatGPT API
async function fetchStoryFromChatGPT(input) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: input }],
                max_tokens: 150,
            }),
        });
        const data = await response.json();
        const story = data.choices[0].message.content.trim();
        addMessage('AI', story);
        presentStoryOptions();
    } catch (error) {
        console.error('Error:', error);
        addMessage('AI', 'Oops, something went wrong. Please try again.');
        userInput.disabled = false;
        sendButton.disabled = false;
    }
}

// Present story continuation options
function presentStoryOptions() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    options.forEach(option => addMessage('AI', option));
    userInput.disabled = false;
    sendButton.disabled = false;
}
