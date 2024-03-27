document.addEventListener('DOMContentLoaded', function() {
  
    const openModalButton = document.querySelector('.icon-menu');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.icon-close');
  
    
    function openModal() {
      modal.classList.remove('is-hidden');
    }
  
    
    function closeModal() {
      modal.classList.add('is-hidden'); 
    }
  
    
    openModalButton.addEventListener('click', openModal);
  
    
    closeModalButton.addEventListener('click', closeModal);
  

    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeModal();
      }
    });
  
    
    document.querySelector('.modal').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });