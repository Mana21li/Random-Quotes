import React, { Component } from 'react';
import hat from './hat.gif';
import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      QuoteText: '',
      Author: '',
    }
  }

  componentDidMount(){
    this.fetchQuotes();
    this.newQuote();
  }

  
  fetchQuotes = async (req, res) => {
    try{
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      this.setState({
        QuoteText: data.content,
        Author: data.author,
      })
    }catch(err){
      console.log(err);
    }
  }
  newQuote = () => {
  this.fetchQuotes();
 }

  render() {
    const { QuoteText } = this.state;
    const { Author } = this.state;
    const { newQuote } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={hat} className="App-logo" alt="logo" />
          <h1 className="title">Random Quote Generator</h1>
          <div className="quote-box">
            <div className="quote-content">
              <div className="text">" { QuoteText } "</div>
              <div className="author">-{ Author }</div>
            </div>
          </div>
          <button onClick={ newQuote } className="new-quote">New Quote</button>
        </header>
      </div>
    );
  }  
  
}

export default App;
