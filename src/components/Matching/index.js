import React, { Component } from 'react';
import render from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';
import CardMatch from 'src/components/CardMatch';


 
class Matching extends Component {
 
  onSwipe = (data) => {
    console.log("I was swiped.");
  }
 
  onSwipeLeft = (data) => {
    console.log("I was swiped left.");
  }
 
  onSwipeRight = (data) => {
    console.log("I was swiped right.");
  }
 

  renderCards() {

      return(
        <>
        <Card 
          date={CardMatch}
          onSwipe={this.onSwipe}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          >
          <CardMatch /> 
        </Card>
        <Card 
          date={CardMatch}
          onSwipe={this.onSwipe}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          >
          <CardMatch />
        </Card>
        <Card 
          date={CardMatch}
          onSwipe={this.onSwipe}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          >
          <CardMatch />  
        </Card>
        </>
      )
    }

  
  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    );
  }
};

export default Matching;