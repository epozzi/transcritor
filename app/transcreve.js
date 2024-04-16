const btnStatoStop = document.querySelector('.comecar');
const btnCopiar = document.querySelector('.copiar')
const textoTrasncrito = document.querySelector('.texto-transcrito');

let texto = ''

btnStatoStop.addEventListener('click', () => {
    if (btnStatoStop.classList.contains('transcrevendo')) {
        btnStatoStop.classList.remove('transcrevendo')
        btnStatoStop.textContent = 'Começar'
        recognition.stop()
    } else {
        recognition.start()
        btnStatoStop.textContent = 'Parar transcrição'
        btnStatoStop.classList.add('transcrevendo')
    }

})

btnCopiar.onclick = () => {
    navigator.clipboard.writeText(texto)
}