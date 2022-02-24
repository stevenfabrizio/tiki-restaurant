/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
//left tiki animations on scroll
const allTikisLeft= document.querySelectorAll('.left')
const observerL = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('wobbleL', entry.isIntersecting)

        if(entry.isIntersecting) observerL.unobserve(entry.target)
    })
    },
    {
        threshold: 0.2,
    }
)

for (let i = 0; i < allTikisLeft.length; i++){
    observerL.observe(allTikisLeft[i])
}

//right tiki animations on scroll
const allTikisRight = document.querySelectorAll('.right')
const observerR = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('wobbleR', entry.isIntersecting)

        if(entry.isIntersecting) observerR.unobserve(entry.target)
    })
    },
    {
        threshold: 0.2,
    }
)
for (let i = 0; i < allTikisRight.length; i++){
    observerR.observe(allTikisRight[i])
}
/******/ })()
;
//# sourceMappingURL=observers.js.map