// const anime = require("./anime");

anime({
  targets: "#banana",
  direction: "alternate",
  rotateZ: 10,
  duration: 1000,
  loop: true,
  easing: "easeInOutSine",
});

// anime({
//   targets: "#banana",
//   direction: "alternate",
//   translateY: 5,
//   duration: 80,
//   loop: true,
//   easing: "easeInOutSine",
// });

anime({
  targets: "#right-eye",
  direction: "alternate",
  translateY: 50,
  duration: 1000,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: "#left-eye",
  direction: "alternate",
  translateY: -50,
  duration: 1000,
  loop: true,
  easing: "easeInOutSine",
});

anime({
  targets: ".jelly",
  direction: "alternate",
  translateY: 2,
  duration: 180,
  loop: true,
  easing: "easeInOutSine",
});
