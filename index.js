function mini() {
    const mouse = document.querySelector('.mouse');
    if (mouse) mouse.classList.toggle('hover');
}

const scrollHorizontally = (e) => {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('.main').scrollLeft -= (delta * 40);
    e.preventDefault();
};

const mousemove = (ev) => {
    const mouse = document.querySelector('.mouse');
    if (mouse) {
        mouse.style.transform = `translateY(${ev.clientY}px)`;
        mouse.style.transform += `translateX(${ev.clientX}px)`;
    }
};

const inputMouselog = () => {
    const mouse = document.querySelector('.mouse');
    if (mouse) mouse.classList.toggle('menu');
};

const close = () => {
    const map = document.querySelector('.map__about');
    if (map) {
        map.classList.toggle('hidden');
    }
}

const closeBurger = () => {
    // document.querySelector('.burger__input').click();
    console.log(document.querySelector('.burger__input'));
}

const onCity = (city='') => {
    const mouse = document.querySelector('.mouse');
    const info = document.querySelector('.city-info');
    if(info) info.textContent = (city) ? citiesInfo[city] : '';
    if(mouse)
    mouse.classList.toggle("city");
};

const queryArr = ['.home__about', '.home__title', '.home__header', '.main__info', '.main__map'];
const cities = ['borisov', 'slutsk', 'molodechno', 'nesvizh', 'iluyansk', 'radosh', 'ivenets'];
const citiesInfo = {
    'borisov': 'Шталаг 382 – погибло 10 тыс. человек.',
    'slutsk': 'Самое крупное гетто на Минщине. \nУничтожено 18 тыс. человек.',
    'molodechno': 'Шталаг 342 – погибло 33 тыс. человек.',
    'nesvizh': 'Уничтожено 4.5 тыс. человек.',
    'iluyansk': 'Уничтожено 2.3 тыс. человек.',
    'radosh': 'Уничтожено 2 тыс. человек.',
    'ivenets': 'Уничтожено 1 тыс. человек.'
};
const burgerItems = document.getElementsByClassName('burger__item');

queryArr.forEach(element => {
    document.querySelector(element).addEventListener('mouseover', () => mini());
    document.querySelector(element).addEventListener('mouseout', () => mini());
});

cities.forEach(city => {
    const queruCity = document.querySelector(`.map__${city}`);
    queruCity.addEventListener('mouseover', () => onCity(city), false);
    queruCity.addEventListener('mouseout', () => onCity(), false);
});

[...burgerItems].forEach(element => {
    element.addEventListener('click', () => (closeBurger(), false));
});

document.querySelector('.map__close').addEventListener('click', () => close(), false);
document.addEventListener('mousemove', () => mousemove(event), false);
document.body.addEventListener('mousewheel', () => scrollHorizontally(event), false);
document.querySelector('.burger__input').addEventListener('mouseover', () => inputMouselog());
document.querySelector('.burger__input').addEventListener('mouseout', () => inputMouselog());