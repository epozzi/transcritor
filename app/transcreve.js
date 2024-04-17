const btnStatoStop = document.querySelector('.comecar');
const btnCopiar = document.querySelector('.copiar')
const textoTrasncrito = document.querySelector('.texto-transcrito');
const idiomaSelecionado = document.getElementById('idiomas');
const btnTraduzir = document.querySelector('.traduzir');
const btnCopiarTraducao = document.querySelector('.copiar-traducao');
const textoTraduzido = document.querySelector('.texto-traduzido');
const checkTraducao = document.querySelector('.checkbox-traducao');

let texto = '';
let pararTranscricao = false;
let traduzirTexto = false;

btnStatoStop.addEventListener('click', () => {
    if (btnStatoStop.classList.contains('transcrevendo')) {
        btnStatoStop.classList.remove('transcrevendo')
        btnStatoStop.textContent = 'Começar'
        recognition.stop()
        pararTranscricao = true
    } else {
        pararTranscricao = false
        recognition.start()
        btnStatoStop.textContent = 'Parar transcrição'
        btnStatoStop.classList.add('transcrevendo')
    }

})

btnCopiar.onclick = () => {
    navigator.clipboard.writeText(texto)
}

idiomaSelecionado.onchange = () => {
    recognition.lang = idiomaSelecionado.value;
    console.log(recognition.lang)
}

btnTraduzir.onclick = () => {
    traduzir(textoTrasncrito.textContent)
        .then(data => {
            textoTraduzido.textContent = data.translatedText
            textoTraduzido.classList.remove('hidden')
            textoTraduzido.classList.add('caixa-texto-com-traducao')
            textoTrasncrito.classList.add('caixa-texto-com-traducao')
        })
        .catch(error => {
            console.log(error);
        });
}

btnCopiarTraducao.onclick = () => {
    navigator.clipboard.writeText(textoTraduzido.textContent)
}

checkTraducao.onchange = () => {
    if (checkTraducao.checked){
        traduzirTexto = true
        btnTraduzir.classList.toggle('hidden')
        textoTraduzido.classList.remove('hidden')
        textoTraduzido.classList.add('caixa-texto-com-traducao')
        textoTrasncrito.classList.add('caixa-texto-com-traducao')
        return
    }

    traduzirTexto = false
    btnTraduzir.classList.toggle('hidden')
}

function scrollParaFinal() {
    const textoElement = document.querySelector('.texto-transcrito')
    textoElement.scrollTop = textoElement.scrollHeight // Rola para o final do texto
}
