html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de DOM</title>
</head>
<body>
    <ul id="minhaLista">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <input type="text" id="novoItem" placeholder="Adicionar novo item">
    <button id="adicionarBtn">Adicionar</button>

    <script>
        const botao = document.getElementById('adicionarBtn');
        const lista = document.getElementById('minhaLista');

        botao.addEventListener('click', () => {
            const input = document.getElementById('novoItem');
            const novoLi = document.createElement('li');
            novoLi.textContent = input.value;
            lista.appendChild(novoLi);
            input.value = ''; // Limpa o campo de entrada
        });
    </script>
</body>
</html>

