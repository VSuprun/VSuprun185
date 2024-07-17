const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};
document.body.addEventListener('pointermove', syncPointer);

document.addEventListener('DOMContentLoaded', function() {
  const instagramBtn = document.querySelector('.instagram-btn');
  const telegramBtn = document.querySelector('.telegram-btn');
  const emailBtn = document.querySelector('.email-btn');

  instagramBtn.addEventListener('click', function() {
      window.location.href = 'https://Instagram.com/V.Suprun185';
  });

  telegramBtn.addEventListener('click', function() {
      window.location.href = 'https://t.me/v_suprun185';
  });

  emailBtn.addEventListener('click', function() {
      window.location.href = 'mailto:v.suprun185@gmail.com';
  });

  [instagramBtn, telegramBtn, emailBtn].forEach(button => {
      button.addEventListener('mousedown', function(event) {
          if (event.button === 1) { 
              const url = this.getAttribute('data-url'); 
              if (url) {
                  window.open(url, '_blank'); 
              }
          }
      });
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-open'); 

  if (menu.classList.contains('menu-open')) {
    menu.style.left = "0"; 
  } else {
    menu.style.left = "-150px"; 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('languageSelect');
  const descriptions = document.querySelectorAll('.description');

  function showDescription(lang) {
      descriptions.forEach(description => {
          if (description.getAttribute('data-lang') === lang) {
              description.classList.add('active');
          } else {
              description.classList.remove('active');
          }
      });
  }

  languageSelect.addEventListener('change', function () {
      const selectedLang = languageSelect.value;
      showDescription(selectedLang);
  });

  // Show the default language (English) on page load
  showDescription(languageSelect.value);
});

// Функция, которая будет вызываться при нажатии комбинации клавиш
function handleKeyPress(event) {
  // Проверяем комбинацию клавиш (например,  Shift + F)
  if (event.shiftKey && event.key === 'J') {
      // Переходим на другую страницу
      window.location.href='oi.html';
  }
}

// Добавляем обработчик события keydown для всего документа
document.addEventListener('keydown', handleKeyPress);
