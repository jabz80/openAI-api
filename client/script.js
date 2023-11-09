const chatForm = document.getElementById('chat-form')
const chatBox = document.getElementById('chat-box')
const chatInput = document.getElementById('chat-message')
const loader = document.getElementById('loader')
const messageSound = document.getElementById('sound')

chatForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const m = chatInput.value.trim()
    const nm = document.createElement('div')
    nm.className = "chat-text-u"
    nm.innerHTML = `<strong>You: </strong> ${m}`
    chatBox.appendChild(nm)
    chatInput.value = ""
    showLoader();
    answer(m)
})

async function answer(question) {
    try {
        // fetch response
        const response = await fetch('http://localhost:3000/getChat',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: question})
        })
        const data = await response.json()
        // pop the response
        const nm = document.createElement('div')
        nm.className = "chat-text-v"
        nm.innerHTML = `<strong>Hal: </strong> ${data.message}`
        chatBox.appendChild(nm)
        playPingSound() //play sound
    } catch (error) {
        console.error('Error fetching data:', error)
    } finally {
        hideLoader()
    }
}

function showLoader() {
    loader.style.display = 'block'; //style.display = block to show loader
}

function hideLoader() {
    loader.style.display = 'none'; //style.display = none to hide loader
}

function playPingSound() {
    messageSound.play(); // function to play the sound
}