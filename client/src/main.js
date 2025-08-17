


const serverUrl = 'http://localhost:8080'; // local testing

// const serverUrl = 'https:// RENDER SPACE' ; // for deployment

const fetchButton = document.getElementById('fetch-button');
const messageList = document.getElementById('message-list');

fetchButton.addEventListener('click', async () => {
  try {
    const response = await fetch(`${serverURL}/messages`);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data = await response.json();

    messageList.innerHTML = '';

    data.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.text;
      messageList.appendChild(li);
    });
    
  } catch (error) {
    console.error('Error fetching data:', error);
    messageList.innerHTML = '<li>Error loading messages>/li>';
  }
});
