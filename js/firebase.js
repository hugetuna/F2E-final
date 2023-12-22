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
    const db = firebase.firestore();;
    //USE
    const sponserRef = db.collection("sponser");

    // 更新一筆資料到 sponser 集合中
    sponserRef.doc("0001").set({
        "name": "Aan",
        "account": "197297",
        "money": 3000  // 更新金額為 3000
    }).then(() => {
        console.log("Document successfully updated!");
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });

    sponserRef.doc("0002").onSnapshot(function (doc) {
        $("#test").html(`money = ${doc.data().money}a`);
    });

});