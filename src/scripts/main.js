// Functions
const setTheme = (theme) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggleButton(theme === 'dark');
};

const updateThemeToggleButton = (isDark) => {
    const toggleButtonIcon = document.getElementById('toggle-theme-icon');
    if (isDark) {
        toggleButtonIcon.innerHTML = 'dark_mode';
    } else {
        toggleButtonIcon.innerHTML = 'light_mode';
    }
};


// Event listeners
const toggleThemeButton = document.getElementById('toggle-theme-btn');
toggleThemeButton.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});


// On Startup
setTheme(localStorage.getItem('theme') || 'dark');