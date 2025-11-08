  const carrinho = [];

    function adicionarAoCarrinho(produto) {
      carrinho.push(produto);
      atualizarCarrinho();
    }

    function atualizarCarrinho() {
      const lista = document.getElementById('listaCarrinho');
      const contador = document.getElementById('contador');
      lista.innerHTML = '';
      carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
      });
      contador.textContent = carrinho.length;
    }

    function enviarParaWhatsApp() {
      if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
      }

      const numero = '5563992227437';
      const mensagem = encodeURIComponent(
        `Olá! Gostaria de comprar as seguintes atividades:\n\n${carrinho.map(p => '• ' + p).join('\n')}\n\nPode me enviar mais informações?`
      );
      const url = `https://wa.me/${numero}?text=${mensagem}`;
      window.open(url, '_blank');
    }

    function toggleCarrinho() {
      const painel = document.getElementById('painelCarrinho');
      painel.style.display = painel.style.display === 'block' ? 'none' : 'block';
    }