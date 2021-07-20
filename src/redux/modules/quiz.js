// quiz.js

// 퀴즈리스트가져오기, 답추가, 응답초기화
const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
    name: ["잊누너"],
    score: ["100", "80"],
    score_texts: {
        60: "주노 좋아하는구나!? 나도 조아해",
        80: "80점!! 핫티구낫!!",
        100: "찐러버 주노집으로 가자"
    },
    // page: "start",
    answers: [],
    quiz: [
        { question: "주노는 잊누너", answer: "O" },
        { question: "주노는 개그맨", answer: "X" },
        { question: "주노는 잘생김", answer: "O" },
        { question: "주노는 뾰로롱", answer: "X" },
        { question: "주노는 쪼아쪼아", answer: "O" }
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