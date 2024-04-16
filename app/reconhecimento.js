const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;

    if (event.results[event.results.length - 1].isFinal){
        texto += text
    }

    textoTrasncrito.textContent = texto + text
}

recognition.onend = (event) => {
    textoTrasncrito.textContent = texto
}
