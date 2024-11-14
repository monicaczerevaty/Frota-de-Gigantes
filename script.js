
document.getElementById('carregar-modelos').addEventListener('click', function() {
    const modelos = [
        'Caminhão verde',
        'Caminhão pink',
        'Caminhão vermelho',
        'Caminhão preto',
        'Caminhão roxo'
    ];

    const lista = document.getElementById('lista-modelos');
    
    modelos.forEach(modelo => {
        const item = document.createElement('div');
        item.textContent = modelo;
        lista.appendChild(item);
    });
});

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    
    // Resetando o formulário
    this.reset();
});
