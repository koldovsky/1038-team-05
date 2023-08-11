 export const modal = () => {
 
    const refs = {
      modalBtns: document.querySelectorAll('.list-logo__modal-btn'),
      back: document.querySelector('.backdrop')
    };

    for (var i = 0; i < refs?.modalBtns?.length; i++) {
      refs?.modalBtns[i]?.addEventListener('click', toggleModal);
    }
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs?.back?.classList.toggle('is-hidden');
      this.classList.toggle('open');
      document.querySelector('.' + this.getAttribute('data-modal')).style.display = 'block';
      if(document.body.classList.contains('modal-open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };

  
  modal();

