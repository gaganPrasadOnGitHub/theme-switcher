const themeButton = document.getElementById('theme-toggler-button');
const themeCheckbox = document.getElementById('theme-toggler-checkbox');
const body = document.body;

const enableNightTheme = () => {
    body.setAttribute('theme', 'night');
    themeButton.textContent = 'Switch to day';
    themeCheckbox.checked = true;
}

const enableDayTheme = () => {
    body.setAttribute('theme', 'day');
    themeButton.textContent = 'Switch to night';
    themeCheckbox.checked = false;
}

themeButton.addEventListener('click', () => {
    if (body.getAttribute('theme') === 'day') {
        enableNightTheme();
    } else {
        enableDayTheme();
    }
});

themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        enableNightTheme();
    } else {
        enableDayTheme();
    }
});
