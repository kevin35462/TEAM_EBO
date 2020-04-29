import Button from '@material-ui/core/Button';
import GameComponent from '../../GameComponent.js';
import React from 'react';
import UserApi from '../../UserApi.js';
import { TitleScreen } from "./TitleScreen";
import { GameScreen } from "./GameScreen";
import './DuckHunt.css';

export default class DuckHunt extends GameComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.getSessionCreatorUserId(),
      currentScreen: 'title', // game
    };
  }

  onSessionDataChanged(data) {
    this.setState({
      currentUser: data.current_user,
    });
  }

  // isMyTurn() {
  //   return this.state.currentUser === this.getMyUserId();
  // }


  // getOtherUser() {
  //   return this.getSessionUserIds().find((uid) => {
  //     return uid !== this.getMyUserId();
  //   });
  // }
  handleClick = (event) => {
    console.log('WOWOWOW');
    this.setState({
      currentScreen: 'game',
    });
  }

  render() {
    let CurrentScreen;

    switch (this.state.currentScreen) {
      case 'title': {
        CurrentScreen = (
          <TitleScreen
            handleClick={this.handleClick}
            currentUser={this.state.currentUser}
          />
        )
        break;
      }
  
      case 'game': {
        CurrentScreen = (
          <GameScreen />
        );
        break;
      }
  
      default: {
        CurrentScreen = (
          `What? how did we get here? currentScreen is set to: ${this.state.currentScreen}`
        )
      }
    }

    return (
      <div className="allPages">
        {CurrentScreen}
      </div>
    );
  }
}
