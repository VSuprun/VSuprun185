// Пример списка аккаунтов
const accounts = [
  { username: 'vs', password: 'passvs' },
  { username: 'ip', password: 'passip' },
  { username: 'yk', password: 'passyk' },
];

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Пожалуйста, введите логин и пароль');
    return;
  }

  // Ищем аккаунт, где совпадают и логин, и пароль
  const user = accounts.find(acc => acc.username === username && acc.password === password);

  if (user) {
    // Если аккаунт найден — переход на страницу
    window.location.href = "../loader/loading_menu.html";
  } else {
    alert('Неверный логин или пароль');
  }
}

function continueAsGuest() {
  window.location.href = "../loader/loading_main.html";
}

// Обработка Enter (оставляем как есть)
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#username, #password');

  inputs.forEach(input => {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        login();
      }
    });
  });
});
