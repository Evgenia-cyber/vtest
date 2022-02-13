const IS_LOADING = 'vtest/common/IS_LOADING';
const IS_SHOW_MODAL = 'vtest/common/IS_SHOW_MODAL';

let initialState = {
  isLoading: false,
  isShowModal: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.payload,
      };
    default:
      return state;
  }
};

export const setIsLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
});
export const setIsShowModal = (isShow) => ({
  type: IS_SHOW_MODAL,
  payload: isShow,
});

export default commonReducer;
