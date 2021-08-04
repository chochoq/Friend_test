// rank.js
import { firestore } from '../../firebase';

const rank_db = firestore.collection("rank");

// 유저이름 바꾸기, 메세지바꾸기, 랭킹정보 추가, 랭킹정보 가져오기, 스피너
const ADD_USER_NAME = 'rank/ADD_USER_NAME';
const ADD_USER_MESSAGE = 'rank/ADD_USER_MESSAGE';
const ADD_RANK = 'rank/ADD_RANK';
const GET_RANK = 'rank/GET_RANK';
const IS_LOADED = 'rank/IS_LOADED';

const initialState = {
    user_name: '이름',
    user_message: '메세지',
    user_score: '',
    score_texts: {
        30: "우리 더 노력해서 분리배출 해봐요😉",
        60: "우와 조금 더 하면 분리배출왕이 되겟는걸요?😘",
        100: "재활용에 아주아주 신경쓰는 당신! 지구의 히어로😍"
    },
    ranking: [],
    is_loaded: false,
};

// action creator
export const addUserName = (user_name) => {
    return { type: ADD_USER_NAME, user_name };
};
export const addUserMessage = (user_message) => {
    return { type: ADD_USER_MESSAGE, user_message };
};
export const addRank = (rank_info) => {
    return { type: ADD_RANK, rank_info };
};
export const getRank = (rank_list) => {
    return { type: GET_RANK, rank_list };
};
export const isLoaded = (loaded) => {
    return { type: IS_LOADED, loaded };
};

export const getRankFB = () => {
    return function (dispatch) {
        dispatch(isLoaded(false));

        rank_db.get().then((docs) => {
            let rank_data = [];

            docs.forEach((doc) => {
                    rank_data = [...rank_data, { id: doc.id, ...doc.data() }];
            });

            dispatch(getRank(rank_data));
            dispatch(isLoaded(true));
        })
    }
};

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'rank/ADD_USER_NAME': {
            return { ...state, user_name: action.user_name };
        }
        case 'rank/ADD_USER_MESSAGE': {
            return { ...state, user_message: action.user_message };
        }
        case 'rank/ADD_RANK': {
            return { ...state, ranking: [...state.ranking, action.rank_info] };
        }
        case 'rank/GET_RANK': {
            let ranking_data = [...state.ranking];

            const rank_ids = state.ranking.map((r, idx) => {
                return r.id;
            });

            const rank_data_fb = action.rank_list.filter((r, idx) => {
                if (rank_ids.indexOf(r.id) === -1) {
                    ranking_data = [...ranking_data, r];
                }
            });
            
            return { ...state, ranking: ranking_data };
        }
        case 'rank/IS_LOADED': {
            return { ...state, is_loaded: action.loaded };
        }
        default:
            return state;
    }
}