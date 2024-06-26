const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;

    if (event.results[event.results.length - 1].isFinal){
        texto += text
        if (traduzirTexto) {
            traduzir(textoTrasncrito.textContent)
                .then(data => {
                    textoTraduzido.textContent = data.translatedText
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    textoTrasncrito.textContent = texto + text
    scrollParaFinal()
}

recognition.onend = (event) => {
    if (!pararTranscricao) {
        recognition.start();
    }
    textoTrasncrito.textContent = texto
}
