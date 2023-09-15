// Import GSAP and ScrollTrigger
import { gsap, Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
});