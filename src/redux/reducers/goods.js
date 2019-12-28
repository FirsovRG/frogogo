import mockData from '../../mockData/goods.json';

const initialState = mockData;

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
