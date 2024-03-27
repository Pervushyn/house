document.addEventListener('DOMContentLoaded', function() {
    const franceBtn = document.querySelector('.button-country'); // Франция
    const englandBtn = document.querySelector('button[country="England"]'); // Англия
    const germanyBtn = document.querySelector('button[country="Germany"]'); // Германия
  
    const franceContainer = document.querySelector('.card-list-france');
    const englandContainer = document.querySelector('.card-list-england');
    const germanyContainer = document.querySelector('.card-list-germany');
  
    function resetButtons() {
      // Убираем активный класс со всех кнопок
      [franceBtn, englandBtn, germanyBtn].forEach(button => {
        button.classList.remove('button-country');
        button.classList.add('button-country-secondary');
      });
    }
  
    franceBtn.addEventListener('click', function() {
      franceContainer.style.display = 'flex';
      englandContainer.style.display = 'none';
      germanyContainer.style.display = 'none';
  
      resetButtons(); // Сбрасываем классы кнопок
      franceBtn.classList.add('button-country'); // Добавляем активный класс выбранной кнопке
      franceBtn.classList.remove('button-country-secondary');
    });
  
    englandBtn.addEventListener('click', function() {
      englandContainer.style.display = 'flex';
      franceContainer.style.display = 'none';
      germanyContainer.style.display = 'none';
  
      resetButtons();
      englandBtn.classList.add('button-country');
      englandBtn.classList.remove('button-country-secondary');
    });
  
    germanyBtn.addEventListener('click', function() {
      germanyContainer.style.display = 'flex';
      franceContainer.style.display = 'none';
      englandContainer.style.display = 'none';
  
      resetButtons();
      germanyBtn.classList.add('button-country');
      germanyBtn.classList.remove('button-country-secondary');
    });
  });