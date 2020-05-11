const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
//const formBtnIcon = document.getElementById('form-btn-icon');
//const formButton = document.getElementById('form-button');
const openNavLink = document.getElementById('open-nav-link');
const nav = document.getElementById('navbar');

homeLink.addEventListener('mouseover', homeLinkHover);
homeLink.addEventListener('mouseout', homeLinkHoverDelete);
projectsLink.addEventListener('mouseover', projectsLinkHover);
projectsLink.addEventListener('mouseout', projectsLinkHoverDelete);
aboutLink.addEventListener('mouseover', aboutLinkHover);
aboutLink.addEventListener('mouseout', aboutLinkHoverDelete);
contactLink.addEventListener('mouseover', contactLinkHover);
contactLink.addEventListener('mouseout', contactLinkHoverDelete);
//formButton.addEventListener('mouseover', changeFormBtnIcon);
//formButton.addEventListener('mouseout', restoreFormBtnIcon);
openNavLink.addEventListener('click', openNav);

switch (document.title) {
  case 'Ben Nyakaz Portifolio | Contact':
    console.log('switch contact good');
    contactLinkHover();
    break;
  case 'Ben Nyakaz Portifolio | About':
    console.log('switch about good');
    aboutLinkHover();
    break;
  case 'Ben Nyakaz Portifolio | Projects':
    console.log('switch projects good');
    projectsLinkHover();
    break;
  case 'Ben Nyakaz Portifolio':
    console.log('switch home good');
    homeLinkHover();
    break;
  default:
    break;
}

function homeLinkHover() {
  homeLink.style.backgroundColor = '#27476e';
  homeLink.style.borderBottom = '3px solid #ffbf21';
}

function homeLinkHoverDelete() {
  if (document.title === 'Ben Nyakaz Portifolio') {
    homeLinkHover();
    console.log('on home');
  } else {
    homeLink.style.backgroundColor = '#001D4A';
    homeLink.style.borderBottom = 'none';
    console.log('not home');
  }
}

function projectsLinkHover() {
  projectsLink.style.backgroundColor = '#27476e';
  projectsLink.style.borderBottom = '3px solid #ffbf21';
}

function projectsLinkHoverDelete() {
  if (document.title === 'Ben Nyakaz Portifolio | Projects') {
    console.log('on projects');
    projetsLinkHover();
  } else {
    console.log('not projects');
    projectsLink.style.backgroundColor = '#001D4A';
    projectsLink.style.borderBottom = 'none';
  }
}

function contactLinkHover() {
  contactLink.style.backgroundColor = '#27476e';
  contactLink.style.borderBottom = '3px solid #ffbf21';
}

function contactLinkHoverDelete() {
  if (document.title === 'Ben Nyakaz Portifolio | Contact') {
    console.log('on contact');
    contactLinkHover();
  } else {
    console.log('not contact');
    contactLink.style.backgroundColor = '#001D4A';
    contactLink.style.borderBottom = 'none';
  }
}

function aboutLinkHover() {
  aboutLink.style.backgroundColor = '#27476e';
  aboutLink.style.borderBottom = '3px solid #ffbf21';
}

function aboutLinkHoverDelete() {
  if (document.title === 'Ben Nyakaz Portifolio | About') {
    console.log('on about');
    aboutLinkHover();
  } else {
    console.log('not about');
    aboutLink.style.backgroundColor = '#001D4A';
    aboutLink.style.borderBottom = 'none';
  }
}

function changeFormBtnIcon() {
  console.log('form button working');
  formBtnIcon.style.color = '#ffbf21';
  formButton.style.color = '#001d4a';
}

function restoreFormBtnIcon() {
  formBtnIcon.style.color = '#eaf8bf';
}

//Open Nav on mobile
function openNav() {
  console.log('Hamburger Woking');

  if ((nav.style.display = 'none')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    console.log('else working');
  }
}
