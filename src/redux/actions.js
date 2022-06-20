import {
  QUOTE_REQUEST_PENDING,
  QUOTE_REQUEST_SUCCESS,
  QUOTE_REQUEST_FAILED,
  GET_PREVIOUS_QUOTE,
} from './constants';

export const quoteRequestPending = () => {
  return {
    type: QUOTE_REQUEST_PENDING,
  };
};

export const quoteRequestSuccess = (quote) => {
  return {
    type: QUOTE_REQUEST_SUCCESS,
    payload: quote,
  };
};

export const quoteRequestFailed = (error) => {
  return {
    type: QUOTE_REQUEST_FAILED,
    payload: error,
  };
};

export const getPreviousQuote = () => {
  return {
    type: GET_PREVIOUS_QUOTE,
  };
};

// async action creator
export const fetchNextQuote = () => (dispatch) => {
  dispatch(quoteRequestPending());
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then(
      (quote) =>
        dispatch(quoteRequestSuccess(quote)),
    )
    .catch((err) => dispatch(quoteRequestFailed(err)));
};
