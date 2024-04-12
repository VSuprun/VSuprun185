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

  // Добавляем обработчик события для нажатия кнопки колеса мыши
  [instagramBtn, telegramBtn, emailBtn].forEach(button => {
      button.addEventListener('mousedown', function(event) {
          if (event.button === 1) { // Проверяем, является ли нажатая кнопка колесом мыши
              const url = this.getAttribute('data-url'); // Получаем ссылку из атрибута data-url
              if (url) {
                  window.open(url, '_blank'); // Открываем ссылку в новом окне
              }
          }
      });
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-open'); // Добавляем или удаляем класс 'menu-open'

  // Проверяем, есть ли у меню класс 'menu-open'
  if (menu.classList.contains('menu-open')) {
    menu.style.left = "0"; // Показываем меню
  } else {
    menu.style.left = "-150px"; // Скрываем меню
  }
}

