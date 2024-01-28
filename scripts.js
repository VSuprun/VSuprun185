// scripts.js
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const body = document.body;

themeToggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    updateThemeLabel();
});

function updateThemeLabel() {
    const themeLabel = document.querySelector('.theme-label');
    themeLabel.textContent = body.classList.contains('dark-theme') ? 'Темная тема' : 'Светлая тема';
}
