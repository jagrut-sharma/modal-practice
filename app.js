'use strict';

const showModal = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelector('.modal');
const closeModalSign = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const openModal = () => {
  hiddenModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  hiddenModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let currEle of showModal) {
  currEle.addEventListener('click', openModal);
}

closeModalSign.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !hiddenModal.classList.contains('hidden')) {
    closeModal();
  }
});
