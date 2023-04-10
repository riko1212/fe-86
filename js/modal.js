(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  //* Закривання по кліку на бекдроп

  refs.modal.addEventListener('click', removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
