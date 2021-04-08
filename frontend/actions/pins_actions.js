import * as PinsApiUtil from '../util/pins_api_util'

export const RECEIVE_PIN = 'RECEIVE_PIN'
export const RECEIVE_PINS = 'RECEIVE_PINS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchPins = () => dispatch => {
  return ( PinsApiUtil.fetchPins() 
    .then(pins => dispatch(receivePins(pins)),
    errors => dispatch(receiveErrors(errors))))
};

export const fetchPin = pinId => dispatch => {
  return( PinsApiUtil.fetchPin(pinId)
    .then(pin => dispatch(receivePin(pin))))
}
