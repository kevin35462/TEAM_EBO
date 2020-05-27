import GameComponent from '../../GameComponent.js';
import React from 'react';
// import UserApi from '../../UserApi.js';
import { TitleScreen } from "./TitleScreen";
import { GameScreen } from "./GameScreen";
import { ScoreBoard } from "./ScoreBoard";

import './DuckHunt.css';

export default class DuckHunt extends GameComponent {
  constructor(props) {
    super(props);
    // console.log(this.getSessionDatabaseRef().database);
    const currentUser = this.getMyUserId();
    this.state = {
      currentUser: currentUser,
      currentScreen: 'game', // game
      gameScore: {
        [currentUser]: 0,
      },
    };
  }

  onSessionDataChanged(data) {
    this.setState({
      currentUser: data.current_user,
      gameScore: data.gameScore ? data.gameScore : this.state.gameScore,
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

  duckClick = () => {
    console.log("Duck Was Clicked");
  }

  addPoints = () => {
    const currentScore = this.state.gameScore[this.state.currentUser];
    const gameScore = {
      [this.state.currentUser]: currentScore + 1,
    };
    this.getSessionDatabaseRef().set(gameScore, (error) => {
      if (error) {
        console.error("Error updating DuckHunt state", error);
      }
    });
  }



  render() {
    const pages = {
      'title': (
        <TitleScreen
          handleClick={this.handleClick}
          currentUser={this.state.currentUser}
        />
      ),
      'game': (
        <GameScreen duckClick={this.duckClick} />
      ),
      'scoreboard': (
        <ScoreBoard />
      ),
      'default': (
        `What? how did we get here? currentScreen is set to: ${this.state.currentScreen}`
      )
    };
    const selectedPage = pages[this.state.currentScreen];
    const CurrentScreen = selectedPage ? selectedPage : pages.default;
    return (
      <div className="allPages">
        test
      </div>
    );
  }
}
