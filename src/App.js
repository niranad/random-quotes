import React from 'react';
import './App.scss';
import { colors } from './colors';
import { Footer } from './footer';
import { SharingButtons } from './sharingbuttons';

let i = 0; // to be used as an array index

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      bgColor: "",
      color: 'white',
      previousQuotes: []
    }
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      let color = colors[Math.floor(Math.random() * 108)];
      document.body.style.backgroundColor = color;
      return this.setState({ 
          quote: data["content"], 
          author: data["author"],
          bgColor: color,
          color
      });
    })
    .catch(error => this.setState({
      quote: "Error: please check your internet connection", 
      author: "Unavailable"
    }));
  } 

  getNextQuote = () => {
    this.componentDidMount();
    if (!this.state.previousQuotes.some(obj => obj.quote === this.state.quote)) {
      this.setState(state => ({
        previousQuotes: state.previousQuotes.concat({
          quote: state.quote,
          author: state.author
        })
      }));
    }
    i = this.state.previousQuotes.length + 1;
  }

  getPreviousQuote = () => {
    if (i !== 0 && this.state.previousQuotes.length !== 0) {
      --i;
      if (this.state.previousQuotes[i] !== undefined) {
        this.setState(state => ({
          quote: state.previousQuotes[i].quote,
          author: state.previousQuotes[i].author
        }));
      } else {
        this.getPreviousQuote();
      }
    }
  }

  render() {
    const styles = { 
      backgroundColor: this.state.bgColor, 
      color: "black"
    }

    return (!this.state.quote) ? <h1 id="icon">Loading...</h1> :
      (
        <div 
          id="container" 
          className="container-fluid" 
          style={{backgroundColor: this.state.bgColor}}
        >
          <div id="quote-box">
            <q id="text" style={{color: this.state.bgColor}}>{this.state.quote}</q>
            <p id="author" style={{color: this.state.bgColor}}>-{this.state.author}</p>
            { 
              this.state.quote && !this.state.author.match(/unavailable/i) &&
              <div id="buttons">
                <button 
                  id="new-quote" className="btn btn-default" 
                  style={styles} onClick={this.getNextQuote}
                >
                  Next quote
                </button>
                <button 
                  id="previous-quote" className="btn btn-default"
                  style={styles} onClick={this.getPreviousQuote}
                >
                  Previous quotes
                </button>
                <SharingButtons quote={this.state.quote} author={this.state.author} />
                
              </div> 
            }
          
          </div>
          <Footer />
        </div>
      );
  }
  
}

export default App;
