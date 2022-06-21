import colors from '../presentational/colors';
import {
  QUOTE_REQUEST_PENDING,
  QUOTE_REQUEST_SUCCESS,
  QUOTE_REQUEST_FAILED,
  GET_PREVIOUS_QUOTE,
} from './constants';

const initialQuoteState = {
  quote: {},
  quotes: [],
  prevQuoteIdx: 0,
  textColor: 'white',
  prevTextColors: [],
  isPending: false,
  isDuplicate: false,
  error: '',
};

export const quoteReducer = (state = initialQuoteState, action = {}) => {
  switch (action.type) {
    case QUOTE_REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case QUOTE_REQUEST_SUCCESS:
      // if the fetched quote is not duplicate
      if (
        !state.quotes.some(
          (quote) => quote['content'] === action.payload['content'],
        )
      ) {
        let color = colors[Math.floor(Math.random() * 108)];

        return Object.assign({}, state, {
          quotes: [...state.quotes, action.payload],
          quote: action.payload,
          prevQuoteIdx: state.quotes.length,
          textColor: color,
          prevTextColors: [...state.prevTextColors, color],
          isPending: false,
          isDuplicate: false,
          error: '',
        });
      } else {
        return Object.assign({}, state, {
          isPending: false,
          isDuplicate: true,
          error: '',
        });
      }
    case QUOTE_REQUEST_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        quote: Object.assign({}, state.quote, {
          content: action.payload.message,
          author: 'Error',
        }),
        isPending: false,
      });
    case GET_PREVIOUS_QUOTE:
      let idx = state.prevQuoteIdx > 0 ? state.prevQuoteIdx - 1 : 0;
      return Object.assign({}, state, {
        prevQuoteIdx: idx,
        quote: state.quotes[idx],
        textColor: state.prevTextColors[idx],
        error: '',
      });
    default:
      return state;
  }
};
