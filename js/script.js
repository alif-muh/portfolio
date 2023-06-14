window.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('#nav');
  nav.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('load', function () {
  const form = document.getElementById('message-from-portfolio');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      alert('Thanks for hitting me up! ;D');
    });
  });
});
