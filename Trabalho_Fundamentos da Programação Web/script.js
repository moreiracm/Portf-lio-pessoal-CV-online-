// Adiciona um efeito de rolagem suave para todos os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth' // Rolagem suave
      });
  });
});

// Valida o formulário de contato
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  if (form) {
      form.addEventListener('submit', function (e) {
          // Seleciona os campos do formulário
          const nome = document.getElementById('nome').value.trim();
          const email = document.getElementById('email').value.trim();
          const mensagem = document.getElementById('mensagem').value.trim();
          let valid = true;

          // Limpa mensagens de erro anteriores
          document.querySelectorAll('.error').forEach(el => el.remove());

          // Validação do nome
          if (!nome) {
              showError('nome', 'O nome é obrigatório.');
              valid = false;
          }

          // Validação do email
          if (!email || !validateEmail(email)) {
              showError('email', 'O email é inválido.');
              valid = false;
          }

          // Validação da mensagem
          if (!mensagem) {
              showError('mensagem', 'A mensagem é obrigatória.');
              valid = false;
          }

          if (!valid) {
              e.preventDefault(); // Impede o envio do formulário se houver erros
          }
      });
  }

  // Função para mostrar mensagens de erro
  function showError(id, message) {
      const element = document.getElementById(id);
      if (element) {
          const error = document.createElement('div');
          error.className = 'error';
          error.textContent = message;
          element.parentElement.appendChild(error);
      }
  }

  // Função para validar o formato do email
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});
