export const RECEIVE_NUM_COLS = 'RECEIVE_NUM_COLS';
export const RECEIVE_HEIGHT = 'RECEIVE_HEIGHT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';

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

const receiveContent = content => {
  return {
    type: RECEIVE_CONTENT,
    content
  }
}


export const setNumColumns = numCols => dispatch => {
  return dispatch(receiveNumCols(numCols))
}

export const setHeight = height => {
  return dispatch(receiveHeight(height))
}

export const setContent = content => {
  return dispatch(receiveContent(content))
}