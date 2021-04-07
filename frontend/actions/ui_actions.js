export const RECEIVE_NUM_COLS = 'RECEIVE_NUM_COLS';
export const RECEIVE_HEIGHT = 'RECEIVE_HEIGHT';

const receiveNumCols = numCols => {
  return {
    type: RECEIVE_NUM_COLS,
    numCols
  }
}

const receiveHeight = height => {
  return {
    type: RECEIVE_HEIGHT,
    height
  }
}


export const setNumColumns = numCols => {
  return dispatch(receiveNumCols(numCols))
}

export const setHeight = height => {
  return dispatch(receiveHeight(height))
}