const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const toggleModal = () => {
  backdropEl.classList.toggle('is-open');

  if (!backdropEl.classList.contains('is-open')) {
    document.removeEventListener('keydown', onEscBtnPress);
  }
};

const onEscBtnPress = event => {
  if (event.code === 'Escape') {
    toggleModal();
  }
};

const onOpenModalBtnElClick = event => {
  toggleModal();

  document.addEventListener('keydown', onEscBtnPress);
};

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
closeModalBtnEl.addEventListener('click', toggleModal);
