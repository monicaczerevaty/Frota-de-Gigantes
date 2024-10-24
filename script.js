fetch('https://api.exemplo.com/dados')
    .then(response => {
        if (!response.ok) {
            throw new Error('Rede não está disponível!');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Exibe os dados no console
    })
    .catch(error => {
        console.error('Erro:', error);
    });