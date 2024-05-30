gsap.from(".box1", {
    delay: 1,
    duration: 3,
    rotate: 360,
    scale: 0.1,
})

// // normal scrollTrigger
// gsap.from(".box2", {
//     delay: 1,
//     duration: 3,
//     rotate: 360,
//     scale: 0.1,
//     scrollTrigger: ".box2"
// })

gsap.from(".box2", {
    borderRadius: "50%",
    delay: 1,
    duration: 3,
    rotate: 360,
    scale: 0.1,
    scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: 2                   //scrub is used for the smoothness and controlling the animation while scrolling amount and value can be 1 to 5 or true/false
    }
})

// gsap.to("#page3 .boxes", {
//     duration: 4,
//     // rotate: 360,
//     transform: "translateX(-400%)",
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         scrub: 2,
//         pin: true
//     }
// })