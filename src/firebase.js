//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyBF8Iz-nMtj-x7_BAwlVnE9N0W8pi6TnM4",
    authDomain: "bucket-list-26b1d.firebaseapp.com",
    projectId: "bucket-list-26b1d",
    storageBucket: "bucket-list-26b1d.appspot.com",
    messagingSenderId: "180594855607",
    appId: "1:180594855607:web:01f75d57c7041c0a248732",
    measurementId: "G-NYE6JL012W"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 fireStore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
