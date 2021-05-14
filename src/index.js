import './styles.css';
import menuData from './menu.json';
import menuMake from './tpl/menu.hbs';

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const listRef = document.querySelector('.js-menu');
const themeRef = document.querySelector('#theme-switch-toggle')

const menuMakeMarkup = menuMake(menuData);

listRef.innerHTML = menuMakeMarkup;

themeRef.addEventListener('change', themeChange);

function themeChange (e) {
    if(e.target.checked){
        themeUpdate(theme.LIGHT, theme.DARK);
    } else {
        themeUpdate(theme.DARK, theme.LIGHT);
    }
}

function themeUpdate (themeOld, themeNew) {
    document.body.classList.add(themeNew);
    document.body.classList.remove(themeOld);
    localStorage.setItem('theme', themeNew);
}

const themeCurrent = localStorage.getItem(theme);

if(themeCurrent === theme.DARK) {
    document.body.classList.add(theme.DARK);
} else {
    document.body.classList.add(theme.LIGHT);
}



