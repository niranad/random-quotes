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

class App extends Component {
  componentDidMount() {
    this.props.onQuoteRequest();
  }

  render() {
    const {
      quote,
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

    const errMessage = `${error.message}: Please check your internet connection and refresh the page.`;

    document.body.style.backgroundColor = textColor;

    return (
      <div
        id='container'
        className='container-fluid'
        style={{ backgroundColor: textColor }}
      >
        {Object.keys(quote).length === 0 ? (
          <div id='icon' className='container-fluid loader center'></div>
        ) : (
          <div id='quote-box' className='center'>
            <q id='quote-text' style={{ color: textColor }}>
              {error === '' ? quote['content'] : errMessage}
            </q>
            <p id='quote-author' style={{ color: textColor }}>
              -{error === '' ? quote['author'] : 'Error'}
            </p>
            {error === '' && (
              <div id='buttons'>
                <button
                  id='new-quote'
                  className='btn btn-default'
                  style={!isPending ? styles : { width: 50, height: 40 }}
                  onClick={onQuoteRequest}
                  disabled={isPending}
                >
                  {isPending ? <div className='loader' /> : 'Next quote'}
                </button>
                <button
                  id='previous-quote'
                  className='btn btn-default'
                  style={styles}
                  onClick={onGetPreviousQuote}
                  disabled={isPending}
                >
                  Previous quote
                </button>
                <SharingButtons
                  quote={quote['content']}
                  author={quote['author']}
                />
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;

