// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCPpccmQLDthWuIUbd534fSFGfaNz8eyBM",
        authDomain: "f2e-111119007.firebaseapp.com",
        projectId: "f2e-111119007",
        storageBucket: "f2e-111119007.appspot.com",
        messagingSenderId: "834486980086",
        appId: "1:834486980086:web:9a03403d92bfb4bc808bd7",
        measurementId: "G-L56PKWK0YE"
    };
    // Initialize Firebase
    // 初始化 Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    //USE
    const sponserRef = db.collection("sponser");
    const sorted_sponserRef = db.collection("sponser").orderBy("timeStamp", "desc");
    // 更新一筆預設資料到 sponser 集合中
    sponserRef.doc("0001").set({
        "name": "Aan",
        "email": "197297@gmail.com",
        "cardnum": "0000111122223333",
        "money": 20000,
        "comment": "cool",
        "timeStamp": Date.now()
    }).then(() => {
        console.log("Document successfully updated!");
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
    //驗證表單內容
    // 自定義的表單驗證函式
    function validateForm() {
        let isValid = true;
        let cardnumValue = $("#cardnum").val().trim();
        // 對每個帶有 required 屬性的 input 元素進行檢查
        $("input[required]").each(function () {
            if ($(this).val().trim() === "") {
                isValid = false;
                return false; // 如果有一個必填項目為空，即可中斷迴圈
            }
        });
        //檢查信用卡卡號
        if (cardnumValue.length < 16 || cardnumValue.length > 19) {
            isValid = false;
        }
        return isValid;
    }
    //實際驗證
    $("#sponser-form").submit(function (event) {
        // 阻止表單的默認提交行為
        event.preventDefault();
        // 進行自定義的表單驗證
        if (validateForm()) {
            // 如果通過驗證，可以執行實際的提交
            alert("驗證完畢，上傳中");
            // 在這裡可以使用 val() 函式取得表單元素的值
            let nameValue = $("#name").val();
            let emailValue = $("#email").val();
            let cardnumValue = $("#cardnum").val();
            let moneyValue = $("#money").val();
            let moneyintegerValue = parseInt(moneyValue, 10);
            let messageValue = $("#message").val();
            // 在這裡執行實際的提交或其他操作
            sponserRef.add({
                "name": nameValue,
                "email": emailValue,
                "cardnum": cardnumValue,
                "money": moneyintegerValue,
                "comment": messageValue,
                "timeStamp": Date.now()
            });
        } else {
            alert("上傳失敗，請檢察輸入");
        }
    });
    //總金額變動
    sorted_sponserRef.onSnapshot(function (QuerySnapshot) {
        let all = 0;
        let percent;
        QuerySnapshot.forEach(function (doc) {
            all += doc.data().money;
        });
        //變字體
        $(".sup-h2").each(
            function () {
                $(this).removeClass("darker-h2");
            });
        if (all < 150000) {
            $("#15-h2").addClass("darker-h2");
        }
        if (all < 120000) {
            $("#12-h2").addClass("darker-h2");
        }
        if (all < 90000) {
            $("#9-h2").addClass("darker-h2");
        }
        if (all < 60000) {
            $("#6-h2").addClass("darker-h2");
        }
        if (all < 30000) {
            $("#3-h2").addClass("darker-h2");
        }
        //變量表
        percent = (all / 150000) * 100;

        $("#money").html(`總捐款額 = ${all}`);
        gsap.to("#sup-bar", 0.5, { height: percent + "%" });
    });
    //留言板
    sorted_sponserRef.onSnapshot(function (QuerySnapshot) {
        $("#sponser_box_row").html("");
        QuerySnapshot.forEach(function (doc) {
            let putname = doc.data().name;
            let putmoney = doc.data().money;
            let putcomment = doc.data().comment;
            let sponser_box =
                `<div class="singlebox col col-lg-4 col-md-6 col-12">
                <h1 class="singlebox-name h1">${putname}</h1>
                <p class="singlebox-comment p">${putcomment}</p>
                <h2 class="singlebox-money h2">捐款額:${putmoney}</h2>
            </div>`;
            $("#sponser_box_row").append(sponser_box);
        });

    });

});
