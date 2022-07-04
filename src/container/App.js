import { Component } from 'react';
import { connect } from 'react-redux';
import { Footer } from '../presentational/footer';
import { SharingButtons } from '../sharingbuttons';
import { fetchNextQuote, getPreviousQuote } from '../redux/actions';
import './App.css';

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    quotes: state.quotes,
    prevQuoteIdx: state.prevQuoteIdx,
    isPending: state.isPending,
    isDuplicate: state.isDuplicate,
    error: state.error,
    textColor: state.textColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQuoteRequest: () => dispatch(fetchNextQuote()),
    onGetPreviousQuote: () => dispatch(getPreviousQuote()),
  };
};

class QuoteMachine extends Component {
  componentDidMount() {
    this.props.onQuoteRequest();
  }

  render() {
    const {
      quote,
      isDuplicate,
      isPending,
      onQuoteRequest,
      error,
      textColor,
      onGetPreviousQuote,
    } = this.props;

    const styles = {
      backgroundColor: textColor,
      color: 'black',
    };

    const errMessage = `${error.message}: Please check your internet connection and try again.`;

    // set body background color to the textColor in state
    document.body.style.backgroundColor = textColor;

    // if the fetched quote has been previously fetched, trigger another fetch
    if (isDuplicate) {
      document.getElementById('new-quote').click();
    }

    return (
      <div id='container' className='App' style={{ backgroundColor: textColor }}>
        {Object.keys(quote).length === 0 ? (
          <div id='icon' className='loader center' />
        ) : (
          <div id='quote-box' className='center'>
            <i className='fas fa-quote-left' style={{ color: textColor }} />
            {'    '}
            <q id='text' style={{ color: textColor }}>
              {error === '' ? quote['content'] : errMessage}
            </q>
            <p id='author' style={{ color: textColor }}>
              -{error === '' ? quote['author'] : 'Error'}
            </p>

            <div id='buttons'>
              <button
                id='new-quote'
                className='btn'
                style={!isPending ? styles : { width: 40, height: 34, backgroundColor: 'black' }}
                onClick={onQuoteRequest}
                disabled={isPending}
              >
                {isPending ? (
                  <div
                    className='loader'
                    style={{ borderTop: '2px solid #3498db' }}
                  />
                ) : (
                  'Next quote'
                )}
              </button>
              <button
                id='previous-quote'
                className='btn'
                style={styles}
                onClick={onGetPreviousQuote}
                disabled={isPending}
              >
                Previous quote
              </button>
              {error === '' && (
                <SharingButtons
                  quote={quote['content']}
                  author={quote['author']}
                />
              )}
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);

export default Container;


