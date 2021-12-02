export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')
  cancelButton.addEventListener('click', close)
  function open() {
    modalWrapper.classList.add('active')
  }

  function close() {
    // fechar o modal
    // remover a class active do modal
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
