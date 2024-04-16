// URL da API
const apiUrl = 'http://127.0.0.1:5000//translate';

// Fazendo a requisição usando fetch()
function traduzir(texto) {
    // Opções da requisição
    const options = {
        method: 'POST', // ou 'POST', 'PUT', etc.
        headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo
        // Se necessário, outros cabeçalhos
        },
        // Corpo da requisição (para POST ou PUT)
        body: JSON.stringify({
        "q": texto,
        "source": "auto",
        "target": "pt",
        "format": "text"
        }),
    };
    return fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
            throw new Error('Erro ao fazer a requisição');
            }
            return response.json(); // Retorna os dados em formato JSON
        })
        // .then(data => {
        //     // Manipule os dados recebidos aqui
        //     console.log(data);
        // })
        .catch(error => {
            console.error('Erro:', error);
        });
}