// Cart Elements

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

// Background

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
