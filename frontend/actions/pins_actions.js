import * as PinsApiUtil from '../util/pins_api_util'

export const REMOVE_PIN = 'REMOVE_PIN'
export const RECEIVE_PIN = 'RECEIVE_PIN'
export const RECEIVE_PINS = 'RECEIVE_PINS'
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS'

const receivePins = pins => {
  return ({
    type: RECEIVE_PINS,
    pins
  })
};

const receivePin = pin => {
  return({
    type: RECEIVE_PIN,
    pin
  })
};

const removePin = pinId => {
  return ({
    type: REMOVE_PIN,
    pinId
  })
}

const receiveErrors = errors => {
  return ({
    type: RECEIVE_PIN_ERRORS,
    errors
  })
};

export const fetchPins = () => dispatch => {
  return ( 
    PinsApiUtil.fetchPins() 
      .then(pins => dispatch(receivePins(pins)),
      errors => dispatch(receiveErrors(errors)))
  )
};

export const createPin = formData => dispatch => {
  return(
    PinsApiUtil.createPin(formData)
      .then( pin => dispatch(receivePin(pin)),
      errors => dispatch(receiveErrors(errors)))
  )
};

export const fetchPin = pinId => dispatch => {
  return( 
    PinsApiUtil.fetchPin(pinId)
      .then(pin => dispatch(receivePin(pin))),
      errors => dispatch(receiveErrors(errors))
  )
};


export const fetchPinByUser = userId => dispatch => {
  return(
    PinsApiUtil.fetchPinByUser(userId)
      .then(pins => dispatch(receivePins(pins)),
      errors => dispatch(receiveErrors(errors)))
  )
};


export const deletePin = pinId => dispatch => {
  return(
    PinsApiUtil.deletePin(pinId)
      .then(pinId => dispatch(removePin(pinId)),
      errors => dispatch(receiveErrors(errors)))
  )
}