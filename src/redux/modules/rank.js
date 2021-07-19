// rank.js
// 유저이름 바꾸기, 메세지바꾸기, 랭킹정보 추가, 랭킹정보 가져오기
const ADD_USER_NAME = 'rank/ADD_USER_NAME';
const ADD_USER_COMMENT = 'rank/ADD_USER_COMMENT';
const ADD_RANK = 'rank/ADD_RANK';
const GET_RANK = 'rank/GET_RANK';

const initialState = {
    user_name: '',
    user_comment: '',
    user_score: '',
    score_text: {
        60: "주노 좋아하는구나!? 나도 조아해",
        80: "80점!! 핫티구낫!!",
        100: "찐러버 주노집으로 가자"
    },
    ranking:[{score:40, name :'noname', comment:'조아해..조아한다'}]
}

// action creator
export const addUserName = (user_name) => {
    return { type: ADD_USER_NAME, user_name };
}
export const addUserComment = (user_comment) => {
    return { type: ADD_USER_COMMENT, user_comment };
}
export const addRank = (rank_info) => {
    return { type: ADD_RANK, rank_info };
}
export const getRank = (rank_list) => {
    return { type: GET_RANK, rank_list };
}

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'rank/ADD_USER_NAME': {
            return { ...state, user_name: action.user_name };
        }
        case 'rank/ADD_USER_COMMENT': {
            return { ...state, user_comment: action.user_comment };
        }
        case 'rank/ADD_RANK': {
            return { ...state, rank: [...state.rank, action.rank_info] };
        }
        case 'rank/GET_RANK': {
            return { ...state, rank: action.rank_list };
        }
        
        default:
            break;
    }
}