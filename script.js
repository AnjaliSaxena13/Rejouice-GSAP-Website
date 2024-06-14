function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locomotiveScroll()


function cursorEffect() {

    let page1 = document.querySelector(".page1");
    let cursor = document.querySelector(".cursor");
    page1.addEventListener("mousemove", function (move) {
        // cursor.style.left = move.x + "px";
        // cursor.style.top = move.y + "px";
        gsap.to(cursor, {
            x: move.x,
            y: move.y,
        })
    })

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })

    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

    // gsap.to(".cursor",{
    // x:500,
    // y:500,
    // }) 
}
cursorEffect()

let tl = gsap.timeline()

tl.from(".page2 ", {
    y: 80,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 97%",
        end: "top 20%",
        markers: false,
        scrub: 2,
    }

})
tl.from(".link ", {
    y: 80,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 40%",
        end: "top 10%",
        markers: false,
        scrub: 2,
    }

})

tl.from(".page4 ", {
    y: 82,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".main",
        start: "top 97%",
        end: "top 20%",
        markers: false,
        scrub: 2,
    }

})

function cursorEffect2() {
    let page5 = document.querySelector(".page5");
    let cursor2 = document.querySelector(".cursor2");
    page5.addEventListener("mousemove", function (move) {
        // cursor2.style.left = move.x + "px";
        // cursor2.style.top = move.y + "px";
        gsap.to(cursor2, {
            x: move.x,
            y: move.y,
        })
    })

    page5.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1,
        })
    })

    page5.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect2()

tl.from(".page6 ", {
    y: 82,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page6",
        scroller: ".main",
        start: "top 97%",
        end: "top 20%",
        markers: false,
        scrub: 2,
    }

})

function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
    });
}
sliderAnimation()


tl.from(".page8 .nav1 ", {
    y: -170,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page8",
        scroller: ".main",
        start: "top 97%",
        end: "top 20%",
        markers: false,
        scrub: 2,
    }

})


function loader(){
    tl.from(".loader h3", {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })
    
    tl.to(".loader h3", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
    })
    tl.to(".loader",{
    opacity:0,
    display:"none",
    })
    
    tl.from(".page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.6,
        delay:-0.4,
    })
    
    tl.from(".page1-content nav h3",{
        x: 50,
        opacity: 0,
        duration: 0.9,
    })
    
}
loader()
