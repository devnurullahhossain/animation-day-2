gsap.from("#first_section #animate", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
gsap.from("#second_section h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#second_section h1",
    scroller: "body",
    start: "top 60%",
  },
});
gsap.from("#second_section h2", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#second_section h2",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from("#third_section #animate_zoom", {
  scale: 0,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#third_section #animate_zoom",
    scroller: "body",
    start: "top 50%",
    end: "bottom 50%",
    scrub: 5,
    pin: true,
  },
});

gsap.to("#forth_section h1", {
  transform: "translateX(-180%)",
  scrollTrigger: {
    trigger: "#forth_section",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: true,
    pin:true
  },
});
