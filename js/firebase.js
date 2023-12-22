// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
//USE
const db = firebase.firestore();
const sponserRef = db.collection("sponser");

// 更新一筆資料到 sponser 集合中
sponserRef.doc("0001").set({
    "name": "ethan",
    "account": "197297",
    "money": 2000
});
$(document).ready(function () {


});