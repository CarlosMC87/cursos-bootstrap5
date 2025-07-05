const btn = document.getElementById('toggle-dark');
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btn.querySelector('i').classList.toggle('bi-moon');
    btn.querySelector('i').classList.toggle('bi-sun');
  });
}