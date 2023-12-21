$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
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

    anime_introbox1_scroll.from("#intro-box-1", 1.5, { opacity: 0, y: 100 });
    anime_introbox1_scroll.from(".totop", 0.5, { opacity: 0 });
    anime_introbox2_scroll.from("#intro-box-2", 1.5, { opacity: 0, y: 100 });
    anime_introbox3_scroll.from("#intro-box-3", 1.5, { opacity: 0, y: 100 });

    anime_nav_scroll.from("#nav", 0.5, { opacity: 0 });


    //角色介紹區調控
    $('#select-pic > .select-picbox').hover(
        function () {//hover-in
            gsap.to(this, 0.5, { scaleX: 1.2, scaleY: 1.2 })
        },
        function () {//hover-out
            gsap.to(this, 0.5, { scaleX: 1, scaleY: 1 })
        }
    );
    $('#select-pic > .select-picbox').click(
        function () {
            let images = $(this).attr('src');
            $('#show-pic').attr('src', images);
        }
    );

});