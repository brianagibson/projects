const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const openParam = urlParams.get('open')

const openDate = new Date('August 26, 2021 21:00:00');
let isOpen = true;

const indexRedirect = () => {
if (isOpen || openDate < Date.now()) { 
    'https://brianagibson.github.io/projects/surprise/index.html?open=true'; 
    } else {
    window.location = 'https://brianagibson.github.io/projects/surprise/index.html';
    };
};

window.onload = indexRedirect;