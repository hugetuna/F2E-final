const opSys =
    `
        <div id="but-opSys" class="switch-but-opSys  pickup">
            <h2 class="h2">操作系統</h2>
        </div>
        <div id="but-batSys" class="switch-but-batSys  notpickup">
            <h2 class="h2">戰鬥系統</h2>
        </div>
        <div id="but-itemSys" class="switch-but-itemSys  notpickup">
            <h2 class="h2">道具系統</h2>
        </div>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=_mhksJ_6xddxjPU9" target="_blank">
            <div id="but-speSys" class="switch-but-speSys  notpickup">
                <h2 class="h2">特殊要素</h2>
            </div>
        </a>
        <article id="opSys" class="Sys opSys row">
            <h2 class="h2 opSys-h2 col col-lg-12 col-md-12 col-12">
                類銀河戰士惡魔城的精隨之一<br>
                在於隨著進度的推進，解鎖更加多元的移動與作戰方式<br>
                並以此前往原本無法抵達的地方<br>
                在本作中，你可以發現
            </h2>
            <aside class="opSys-aside col col-lg-5 col-md-9 col-12">
                <h2 class="h2">最新刊漫畫</h2>
                <p>
                    騰空飛起的超能力，酣暢淋漓的戰鬥，流行於校園的這本漫畫承載的不只是故事，還有夢想。<br>
                    (解鎖二段跳)
                </p>
                <img src="img/comic.png" alt="comic" class="artical-picbox">
            </aside>
            <aside class="opSys-aside col col-lg-5 col-md-9 col-12">
                <h2 class="h2">牽繩</h2>
                <p>樸素的狗用牽繩，斑駁的破損是主人責任的證明。<br>
                    (可以瞄準空中的錨點並移動)
                </p>
                <img src="img/Knot-a-Leash.jpg" alt="rope" class="artical-picbox">
            </aside>
            <h2 class="h2">還有更多等待著你發覺。</h2>
        </article>
`
const batSys =
    `
        <div id="but-opSys" class="switch-but-opSys notpickup">
            <h2 class="h2">操作系統</h2>
        </div>
        <div id="but-batSys" class="switch-but-batSys pickup">
            <h2 class="h2">戰鬥系統</h2>
        </div>
        <div id="but-itemSys" class="switch-but-itemSys notpickup">
            <h2 class="h2">道具系統</h2>
        </div>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=_mhksJ_6xddxjPU9" target="_blank">
            <div id="but-speSys" class="switch-but-speSys  notpickup">
                <h2 class="h2">特殊要素</h2>
            </div>
        </a>
        <article id="batSys" class="Sys batSys row">
            <h2 class="h2 batSys-h2 col col-lg-12 col-md-12 col-12">
                無主靈由情感構成，必須使用蘊藏情感的物件打擊才能消滅他們<br>
                但並不代表它們沒有物理構造<br>
                本作中，除了心靈值(也就是血量)，敵人還有break值的計量，透過物理打擊集滿break值時，能夠達成粉碎敵人的防禦、減緩敵人的攻勢等多項作用，巧妙配合手邊的武器，應對各式不同的敵人吧!
            </h2>
        </article>
    `
const itemSys =
    `
        <div id="but-opSys" class="switch-but-opSys notpickup">
            <h2 class="h2">操作系統</h2>
        </div>
        <div id="but-batSys" class="switch-but-batSys notpickup">
            <h2 class="h2">戰鬥系統</h2>
        </div>
        <div id="but-itemSys" class="switch-but-itemSys pickup">
            <h2 class="h2">道具系統</h2>
        </div>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=_mhksJ_6xddxjPU9" target="_blank">
            <div id="but-speSys" class="switch-but-speSys  notpickup">
                <h2 class="h2">特殊要素</h2>
            </div>
        </a>
        <article id="itemSys" class="Sys itemSys row">
            <h2 class="h2 itemSys-h2 col col-lg-12 col-md-12 col-12">
                拾物員透過富情感的道具武裝自身<br>
                在遊戲裡，玩家能夠裝備主武器、副武器、及輔助道具<br>
                透過搭配不同的裝備，便能發揮多樣的玩法。
            </h2>
            <aside class="itemSys-aside col col-lg-5 col-md-9 col-12">
                <h2 class="h2">橡皮筋槍</h2>
                <p>橡皮筋沒辦法蘊含太多的感情，但橡皮筋射在身上的感受真的只能說痛。累積勢能，轉換動能，童年殺器。</p>
                <img src="img/橡皮筋槍.jpg" alt="橡皮筋槍" class="artical-picbox">
            </aside>
            <aside class="itemSys-aside col col-lg-5 col-md-9 col-12">
                <h2 class="h2">分針與時針</h2>
                <p>將鬧鐘上的部件拆解下來製成的武器，時間總是能給人許多教訓。</p>
                <img src="img/時針與分針.jpg" alt="指針" class="artical-picbox">
            </aside>
            <h2 class="h2">還有更多等待著你發覺。</h2>
        </article>
`

$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    $('#Sys-block').html(
        opSys
    );
    //頁面切換
    $(document).on('click', '#but-opSys', function () {
        $('#Sys-block').html(opSys);
        gsap.from(".opSys-h2", 1, { opacity: 0 });
        gsap.from(".opSys-aside", 1, { opacity: 0 });
    });

    $(document).on('click', '#but-batSys', function () {
        $('#Sys-block').html(batSys);
        gsap.from(".batSys-h2", 1, { opacity: 0 });
    });

    $(document).on('click', '#but-itemSys', function () {
        $('#Sys-block').html(itemSys);
        gsap.from(".itemSys-h2", 1, { opacity: 0 });
        gsap.from(".itemSys-aside", 1, { opacity: 0 });
    });
});