anime({
  targets: ".bounce_1",
  direction: "alternate",
  translateY: 2,
  duration: 500,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: ".sway_1",
  direction: "alternate",
  rotateZ: -1,
  //   translateX: 5,
  duration: 500,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: "#scallions",
  direction: "alternate",
  rotateZ: -5,
  //   translateX: 5,
  duration: 500,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: "#left_wheel",
  direction: "alternate",
  translateY: 1,
  duration: 500,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: "#right_wheel",
  direction: "alternate",
  translateY: -1,
  duration: 500,
  loop: true,
  easing: "easeInOutSine",
});

// anime({
//   targets: ".bg_1",
//   easing: "linear",
//   translateX: -600,
//   duration: 2000,
//   keyframes: [
//     { duration: 400, opacity: 1 },
//     { duration: 1200, opacity: 1 },
//     { duration: 400, opacity: 0 },
//   ],
//   loop: true,
// });

// anime({
//   delay: 300,
//   targets: ".bg_2",
//   easing: "linear",
//   translateX: -600,
//   duration: 2000,
//   keyframes: [
//     { duration: 400, opacity: 1 },
//     { duration: 1200, opacity: 1 },
//     { duration: 400, opacity: 0 },
//   ],
//   loop: true,
// });

// STAGGERING

// anime({
//   targets: ".bg_square",
//   easing: "linear",
//   translateX: -600,
//   duration: 2000,
//   delay: anime.stagger(400),
//   keyframes: [
//     { duration: 400, opacity: 1 },
//     { duration: 1200, opacity: 1 },
//     { duration: 400, opacity: 0 },
//   ],
//   loop: true,
// });

// TIMELINE

var bg_timeline_1 = anime.timeline({
  easing: "linear",
  loop: true,
});

bg_timeline_1.add({
  targets: ".bg_1",
  translateX: -400,
  duration: 2000,
  keyframes: [
    { duration: 400, opacity: 1 },
    { duration: 1200, opacity: 1 },
    { duration: 400, opacity: 0 },
  ],
});

// var bg_timeline_2 = anime.timeline({
//   easing: "linear",
//   loop: true,
//   duration: 500,
// });

// bg_timeline_2
//   .add({
//     delay: 200,
//     targets: ".bg_2",
//     translateX: -232,
//   })
//   .add({
//     targets: ".bg_2",
//     translateX: -464,
//     opacity: 0,
//   });
