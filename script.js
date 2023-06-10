function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('active');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-block');

for (let elm of elements) {
  observer.observe(elm);
}




function scrollTo(element) {
  window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
  })
}

let homeBtn = document.querySelector('.home');
let homeBlock = document.querySelector('.hero__container');

homeBtn.addEventListener('click', () => {
  scrollTo(homeBlock);
})

let aboutBtn = document.querySelector('.about');
let aboutBlock = document.querySelector('.about__section');

aboutBtn.addEventListener('click', () => {
  scrollTo(aboutBlock);
})

let projectsBtn = document.querySelector('.portfolio');
let projectsBlock = document.querySelector('.portfolio-section__gallery');

projectsBtn.addEventListener('click', () => {
  scrollTo(projectsBlock);
})

let servisesBtn = document.querySelector('.servises');
let servisesBlock = document.querySelector('.servises-section__container');

servisesBtn.addEventListener('click', () => {
  scrollTo(servisesBlock);
})
