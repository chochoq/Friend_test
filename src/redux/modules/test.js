// Actions
// 랭킹조회, 퀴즈조회, 이름추가, 코멘트추가, 점수
const LOAD = 'test/LOAD';
const CREATENAME = 'test/CREATENAME';
const SCORE = 'test/SCORE';
const COMMENT = 'test/COMMENT';


const initialState = {
    name: ["잊누너"],
    score: ["100", "80"],
    comment:["주노 좋아하는구나!? 나도 조아해"],
    number: ["1", "2", "3"],
    // page: "start",
    list: [
    { question: "주노는 잊누너", answer: "O" },
    { question: "주노는 개그맨", answer: "X" },
    { question: "주노는 잘생김", answer: "O" },
    { question: "주노는 뾰로롱", answer: "X" },
    { question: "주노는 쪼아쪼아", answer: "O" },
    ]
}

// Action Creators
export const loadTest = (test) => {
    return { type: LOAD, test };
}
export const createNAME = (name) => {
    return { type: CREATENAME, name };
}
export const scoreTest = (test) => {
    return { type: SCORE, test };
}
export const commentTest = (comment) => {
    return { type: COMMENT, comment };
}

// Reducer

export default function reducer(state=initialState,action={}) {
    switch (action.type) {
        case "test/LOAD": {
            return state;
        }
        case "test/CREATENAME": {
            
            return state;
        }
        case "test/SCORE": {
            return state;
        }
        case "test/COMMENT": {
            return state;
        }
            
        default:
            return state;
    }
}