// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.container'
// })



// const carousel = document.querySelector(".carousel"),
// firstImg = document.querySelectorAll(".carousel__images")[0];
// arrowIcons = document.querySelectorAll(".caruosel-btn");

// let isDragStart = false, prevPageX, prevScrollLeft;
// let firstImgWidth = firstImg.clientWidth + 30;

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();

//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);


const carousel = document.querySelector('.carousel');
const dragging = (e) => {
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener('mousemove', dragging);