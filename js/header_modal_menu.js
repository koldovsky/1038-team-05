 export const modal = () => {
 
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };


   
  
    console.log(refs.openModalBtn)
    refs?.openModalBtn?.addEventListener('click', toggleModal);
    refs?.closeModalBtn?.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body?.classList.toggle('modal-open');
      refs.modal?.classList.toggle('is-hidden');
      if(document.body.classList.contains('modal-open')) {
        document.body.style.overflow = 'hidden';
      } else{
        document.body.style.overflow = '';
      }
    }
  };

  
  modal();

