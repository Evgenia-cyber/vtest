const IS_LOADING = 'vtest/common/IS_LOADING';

let initialState = {
  isLoading: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const setIsLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
});

export default commonReducer;
