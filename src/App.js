import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar/Navbar"
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    score: 0,
    selected: [],
    topScore: 0,
    result: "Click on an Image to begin"
  };

  clickImage = id => {
    console.log("Id: " + id);
    console.log(this.state);

    if (this.state.selected.indexOf(id) === -1) {
      this.handleIncrement();
      console.log(this.state);
      this.setState({ selected: this.state.selected.concat(id) });

    } else {
      this.handleGameOver();
    }
    this.shuffleArray();
  };
  shuffleArray() {
    const shuffledImages = this.state.images.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    this.setState({ images: shuffledImages });
  }

  handleIncrement() {
    console.log("Handle Inc");

    this.setState({
      score: this.state.score + 1,
      result: "Click on another Image"
    });

    console.log(this.state);
    this.shuffleArray();

  }
  handleGameOver() {
    this.setState({
      result: "Oops! You clicked an image already clicked before! You lose!!"
    });
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score,
        score:0,
        selected:[],
        result:"Oops! You clicked an image already clicked before! You lose!!. Click on an Image to begin"
      });
    }
    this.shuffleArray();

  }
  // Map over this.state.images and render a ImageCard component
  render() {
    return (
      <Wrapper>
        <Title />
        <Navbar score={this.state.score} topScore={this.state.topScore} result={this.state.result} />
        {this.state.images.map(image => (
          <ImageCard
            key={image.id}
            clickImage={this.clickImage}
            shuffleArray={this.shuffleArray}
            handleIncrement={this.handleIncrement}
            handleGameOver={this.handleGameOver}
            id={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
