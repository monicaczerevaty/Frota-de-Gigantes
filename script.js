
document.getElementById('carregar-modelos').addEventListener('click', function() {
    const modelos = [
        'Caminhão Ford Cargo',
        'Caminhão Volkswagen Delivery',
        'Caminhão Mercedes-Benz Actros',
        'Caminhão Scania R440',
        'Caminhão Iveco Stralis'
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
