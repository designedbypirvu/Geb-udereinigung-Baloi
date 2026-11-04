const dot = document.getElementById("dot");
const outline = document.getElementById("outline");

window.addEventListener("mousemove", (e) => {
  gsap.to(dot, {
    x: e.clientX,
    y: e.clientY,
    duration: 0,
  });

  gsap.to(outline, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power2.out",
  });
});

const hoverElements = document.querySelectorAll(".hover-target, a, .stat-card");

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(outline, {
      scale: 1.5,
      backgroundColor: "rgba(210, 255, 0, 0.1)",
      duration: 0.3,
    });

    if (el.closest(".contact")) {
      dot.style.background = "#050505";
      outline.style.borderColor = "#050505";
    }
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(outline, {
      scale: 1,
      backgroundColor: "transparent",
      duration: 0.3,
    });

    dot.style.background = "var(--accent)";
    outline.style.borderColor = "var(--accent)";
  });
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".hero h1", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "expo.out",
  delay: 0.5,
})
  .from(
    ".hero-desc",
    {
      y: 30,
      opacity: 0,
      duration: 1,
    },
    "-=0.8",
  )
  .fromTo(
    ".hero-cta",
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      clearProps: "all",
    },
    "-=0.7",
  );

document.querySelectorAll(".gs_reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});

gsap.to("nav", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80px",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  yPercent: -100,
  autoAlpha: 0,
  duration: 0.4,
  ease: "power2.inOut",
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Awwwards-style Background Gradient Animation
gsap.to("body", {
  "--grad-1-x": "15%",
  "--grad-1-y": "20%",
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("body", {
  "--grad-2-x": "85%",
  "--grad-2-y": "15%",
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 2,
});

gsap.to("body", {
  "--grad-3-x": "80%",
  "--grad-3-y": "85%",
  duration: 22,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1,
});

gsap.to("body", {
  "--grad-4-x": "20%",
  "--grad-4-y": "80%",
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 3,
});
