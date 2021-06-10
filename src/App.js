import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLink from './components/ImageLink/ImageLink';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'f20f6ef9b0a94aad9ecc9d73bac59da1'
})

class App extends Component {
  constructor() {
        super();
        this.state = {
          input: 'https://www.onlyu.cz/wp-content/uploads/2020/11/angelina_jolie-2.jpg',
          imageUrl: 'https://www.onlyu.cz/wp-content/uploads/2020/11/angelina_jolie-2.jpg',
          celebrity:  '',
          last: localStorage.getItem('celebrity') == null ? '' : localStorage.getItem('celebrity')
        }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        'cfbb105cb8f54907bb8d553d68d9fe20',
        this.state.input)
      .then(response => this.setState({celebrity: response.outputs[0].data.concepts[0]}, 
        localStorage.setItem('celebrity', response.outputs[0].data.concepts[0].name), 
        this.setState({last: response.outputs[0].data.concepts[0].name})));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLink onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition celebrity={this.state.celebrity} imageUrl={this.state.imageUrl} last={this.state.last}/>
      </div>
    );
  }
}

export default App;
