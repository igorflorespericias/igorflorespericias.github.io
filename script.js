const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Solicitação de avaliação — Perícia Grafotécnica');
  const body = encodeURIComponent(
`Olá, Igor.

Gostaria de solicitar uma avaliação inicial.

Nome: ${data.get('nome')}
E-mail: ${data.get('email')}
Telefone/WhatsApp: ${data.get('telefone') || 'Não informado'}

Descrição do caso:
${data.get('mensagem')}

Obrigado.`
  );
  window.location.href = `mailto:igor.flores81@gmail.com?subject=${subject}&body=${body}`;
});
