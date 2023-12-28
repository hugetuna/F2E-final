$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    //漢堡動畫
    let open = 0;//0=close,1=open
    $('#hamburger').click(
        function () {
            $(this).toggleClass('is-active');
            $(".nav").slideToggle(500);
            open = 1 - open;
        });
    $('.nav-li').click(
        function () {
            if (open == 1) {
                $('#hamburger').toggleClass('is-active');
                $(".nav").slideToggle(500);
                open = 1 - open;
            }
        });
    //簡介淡入動畫
    let anime_introbox1_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro-box-1",
            pin: false,
            start: "top bottom",
            end: "bottom bottom",
            scrub: false,
            markers: true,
            id: "anime-intro-box-1",
        },
    });
    let anime_introbox2_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro-box-2",
            pin: false,
            start: "top bottom",
            end: "bottom bottom",
            scrub: false,
            markers: true,
            id: "anime-intro-box-2",
        },
    });
    let anime_introbox3_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro-box-3",
            pin: false,
            start: "top bottom",
            end: "bottom bottom",
            scrub: false,
            markers: true,
            id: "anime-intro-box-3",
        },
    });
    let anime_nav_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#story",
            pin: false,
            start: "top bottom",
            end: "center bottom",
            scrub: true,
            markers: true,
            id: "anime-nav",
        },
    });

    anime_introbox1_scroll.from("#intro-box-1", 1.5, { opacity: 0, y: 200, ease: "power3.out" });
    anime_introbox1_scroll.from(".totop", 0.5, { opacity: 0 });
    anime_introbox2_scroll.from("#intro-box-2", 1.5, { opacity: 0, y: 200, ease: "power3.out" });
    anime_introbox3_scroll.from("#intro-box-3", 1.5, { opacity: 0, y: 200, ease: "power3.out" });

    anime_nav_scroll.from("#nav", 0.5, { opacity: 0 });
    anime_nav_scroll.to("#logo", 0.5, { opacity: 0 });

    //角色介紹區調控
    $('#select-pic > .select-picbox').hover(
        function () {//hover-in
            gsap.to(this, 0.5, { scaleX: 1.2, scaleY: 1.2 });
        },
        function () {//hover-out
            gsap.to(this, 0.5, { scaleX: 1, scaleY: 1 });
        }
    );
    $("#char-select-1").click(function () {
        const tl = gsap.timeline();
        tl.to(".show", { duration: 0.5, opacity: 0, y: 100 })
            .call(function () {
                $(".show").addClass("noshow").removeClass("show");
                $("#char-box-1").removeClass("noshow").addClass("show");
            })
            .fromTo("#char-box-1", { opacity: 0, y: 100 }, { duration: 0.5, opacity: 1, y: 0 });
    });
    $("#char-select-2").click(function () {
        const tl = gsap.timeline();
        tl.to(".show", { duration: 0.5, opacity: 0, y: 100 })
            .call(function () {
                $(".show").addClass("noshow").removeClass("show");
                $("#char-box-2").removeClass("noshow").addClass("show");
            })
            .fromTo("#char-box-2", { opacity: 0, y: 100 }, { duration: 0.5, opacity: 1, y: 0 });
    });
    $("#char-select-3").click(function () {
        const tl = gsap.timeline();
        tl.to(".show", { duration: 0.5, opacity: 0, y: 100 })
            .call(function () {
                $(".show").addClass("noshow").removeClass("show");
                $("#char-box-3").removeClass("noshow").addClass("show");
            })
            .fromTo("#char-box-3", { opacity: 0, y: 100 }, { duration: 0.5, opacity: 1, y: 0 });
    });
    //支持我們調控
    let anime_supbar_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: "#sup-block",
            pin: false,
            start: "center bottom",
            end: "bottom bottom",
            scrub: false,
            markers: true,
            id: "anime-supbar",
        },
    });
});