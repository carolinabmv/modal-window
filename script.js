const buttons = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

buttons.forEach((button) => button.addEventListener('click', showModal));

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', (event) => {
  if (!modal.classList.contains('hidden') && event.key === 'Escape') closeModal();
});
