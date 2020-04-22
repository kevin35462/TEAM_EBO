import Button from '@material-ui/core/Button';
import GameComponent from '../../GameComponent.js';
import React from 'react';
import UserApi from '../../UserApi.js';
import './DuckHunt.css';

// const State = {
//   EMPTY: " ",
//   X: "X",
//   O: "0",
// };

export default class DuckHunt extends GameComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.getSessionCreatorUserId(),
      currentPage: 'title',
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
  }

  render() {
    const TitlePage = () => {
      return (
      <div className="titleScreen">
        <div className="buttons">
          <button className="beginning" onClick={this.handleClick}>START</button>
        </div>
        <h1>DUCK HUNT</h1>
        <p>WOWOWOW</p>
        {this.state.currentUser}

      </div>
      )
    }
    return (
      <div className="allPages">
        {this.state.currentPage === 'title'
          ? <TitlePage/> 
          : 'Not Title page ahhhh' //To do next week!
        }
      </div>
    );
  }
}
