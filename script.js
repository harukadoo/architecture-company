// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.container'
// })







// function onEntry(entry) {
//     entry.forEach(change => {
//         if (change.isIntersecting) {
//             setTimeout(() => {
//                 change.target.classList.add('active');
//             }, 100); // задержка в 1 секунду (1000 миллисекунд)
//         }
//     });
// }

// let options = {
//     threshold: [0.5]
// };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.animation-block');

// for (let elm of elements) {
//     observer.observe(elm);
// }


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animation-block');
  
  for (let elm of elements) {
    observer.observe(elm);
  }