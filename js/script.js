const cards = document.querySelector('.cards');

const animes = {
  '0': {
    'src': '../img/anime1.jpg',
    'title': 'SK8 the Infinity',
    'footer': 'Sub | Dub'
  },
  '1': {
    'src': '../img/anime2.jpg',
    'title': 'DARLING in the FRANXX',
    'footer': 'Sub | Dub'
  },
  '2': {
    'src': '../img/anime3.jpg',
    'title': 'SPY x FAMILY',
    'footer': 'Sub | Dub'
  }, 
  '3': {
    'src': '../img/anime4.jpg',
    'title': 'Tokyo Ghoul',
    'footer': 'Sub | Dub'
  },
  '4': {
    'src': '../img/anime5.jpg',
    'title': 'JUJUTSU KAISEN',
    'footer': 'Sub | Dub'
  },
  '5': {
    'src': '../img/anime6.jpg',
    'title': 'Naruto',
    'footer': 'Subtitled'
  },
  '6': {
    'src': '../img/anime7.jpg',
    'title': 'Demon Slayer: Kimetsu no Yaiba',
    'footer': 'Sub | Dub'
  },
  '7': {
    'src': '../img/anime8.jpg',
    'title': 'Shinobi no Ittoki',
    'footer': 'Sub | Dub'
  },
  '8': {
    'src': '../img/anime9.jpg',
    'title': 'SANIKUI BISCO',
    'footer': 'Sub | Dub'
  },
  '9': {
    'src': '../img/anime10.jpg',
    'title': 'Naruto Shippuden',
    'footer': 'Subtitled'
  }
}

for (let i = 0; i < 10; i++) {

  const card = document.createElement('div');
  card.className = 'card';
  cards.appendChild(card);

  const anime = animes[`${i}`];

  const img = document.createElement('img');
  const source = anime.src;
  img.setAttribute('src', source);
  img.className = 'card-image';

  const title = document.createElement('p');
  const nodeTitle = document.createTextNode(anime.title);
  title.className = 'card-title';
  title.appendChild(nodeTitle);
  
  const footer = document.createElement('p');
  const nodeFooter = document.createTextNode(anime.footer);
  footer.className = 'card-footer';
  footer.appendChild(nodeFooter);
  
  
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(footer);

  cards.appendChild(card);
  
}

let scrollContainer = document.querySelector('.feed');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

prevBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
})

const burguer = document.querySelector('#burguer');
const menuBurguer = document.querySelector('#menu-burguer')

burguer.addEventListener('click', () => {

  if (window.innerWidth < 1024 && menuBurguer.style.display !== 'block') {
    menuBurguer.style.display = 'block';
  } else {
    menuBurguer.style.display = ''
  }

})

