// quiz.js

// 퀴즈리스트가져오기, 답추가, 응답초기화
const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
    name: ["재활용"],
    score: ["100", "60","30"],
    score_texts: {
        30: "우리 더 노력해서 분리배출 해봐요😉",
        60: "우와 조금 더 하면 분리배출왕이 되겟는걸요?😘",
        100: "재활용에 아주아주 신경쓰는 당신! 지구의 히어로😍"
    },
    answers: [],
    quiz: [
        { question: "종이팩(테트라팩)은 물로 헹구고 부피를 최대한 줄여 재활용한다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/751/751682.png' },
        { question: "캔은 깨끗하게 세척해 재활용으로 배출한다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/2916/2916038.png'},
        { question: "원두 찌꺼기와 찻잎, 티백은 일반쓰레기로 버린다", answer: "O",quiz_img:'https://image.flaticon.com/icons/png/512/2935/2935441.png' },
        { question: "양파 껍질은 일반쓰레기로 버린다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/1728/1728728.png' },
        { question: "종이컵은 물로 헹구고 압착해 재활용한다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/4220/4220500.png'},
        { question: "뽁뽁이는 테이프나 본드를 제거한 후 비닐류로 배출한다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/5024/5024486.png'},
        { question: "실리콘 젤리폰케이스는 플라스틱으로 재활용한다 ", answer: "X", quiz_img:'https://image.flaticon.com/icons/png/512/644/644521.png' },
        { question: "택배 상자를 버릴때는 송장스티커, 테이프는 뜯어서 일반쓰레기로 버린다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/2250/2250292.png' },
        { question: "컵라면 용기는 씻어서 재활용으로 버린다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/5100/5100840.png' },
        { question: "플라스틱빨대는 일반 쓰레기로 버린다", answer: "O", quiz_img:'https://image.flaticon.com/icons/png/512/3648/3648923.png' },
    ],
};

// action creator
export const getQuiz = (quiz_list) => {
    return { type: GET_QUIZ, quiz_list };
};
export const addAnswer = (answer) => {
    return { type: ADD_ANSWER, answer };
};
// 초기화라서 프롭스를 받아올 필요 없음
export const resetAnswer = () => {
    return { type: RESET_ANSWER, };
};

// reducer
export default function reducer(state=initialState,action={}) {
    switch (action.type) {
        case "quiz/GET_QUIZ": {
            return {...state, quiz: action.quiz_list};
        }
        case "quiz/ADD_ANSWER": {
            return { ...state, answers: [...state.answers, action.answer] };
        }
        case "quiz/RESET_ANSWER": {
            return { ...state, answers: [] };
        }
        
        default:
            return state;
    }
}