// == Import : npm
import React, { Component, useState } from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import Image from 'react-bootstrap/Image';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';
import { FaRegClipboard, FaHashtag, FaGlobeEurope, FaUserNinja, FaUserSecret  } from "react-icons/fa";

// == Import : local
import './style/matching.scss';
import './style/card.scss';


// == Composant
class Matching extends Component {
  
  componentDidMount() {
    //this.props.sendRequest();
    this.props.getMatchesAndMessages(); 
  }
  
  setGlobalStateOfUsers = (id) => {
    this.props.setUsers(this.props.users.filter((user) => user.id !== id))
  }

  /* like an user */
  likeProfil = (myId, hisId) => {
    const { doLike } = this.props;

    if (this.state.end !== true) {
      doLike(myId, hisId);
    }
  }

  /* Unlike an user */
  unlikeProfil = (myId, hisId) => {
    const { doUnlike } = this.props;

    doUnlike(myId, hisId);
  }

  render() {

    /***** *****/
    const currentUserId = localStorage.getItem('id');

    return (

      
      <SwipeableList>
        {this.props.users.map((user) => (
        <SwipeableListItem
          key={user.id}
          swipeLeft={{
            content: <Image roundedCircle className="right" src="src/data/glass.gif" />,
            action: () => (
              console.info('swiped on left'),
              this.setGlobalStateOfUsers(user.id),
              this.unlikeProfil(currentUserId, user.id)
            ),
          }}
          swipeRight={{
            content: <Image roundedCircle className="right" src="src/data/beer.gif" />,
            action: () => (
              console.info('swiped on left'),
              this.setGlobalStateOfUsers(user.id),
              this.likeProfil(currentUserId, user.id)
            ),
          }}
        >
          {/** ***** The card swiped ***** */}
          <div className="card">
                  <Image
                    roundedCircle
                    className="card-img-responsive"
                    alt={user.firstName}
                    src={user.photo}
                  />
                  <div className="card-top">
                    <div className="card-top-name">{user.firstName}</div>
                    <div className="card-top-exp">{user.levelId !== null ? user.level.name : "Top secret"}</div>
                  </div>
                  <div className="card-content">
                    <p className="card-content-bio">{user.bio}</p> 
                    <div className="card-content-tech">{user.techs.length > 0 ? <FaRegClipboard/> : ""}
                      {user.techs.map((tech) => 
                      <div key={tech.id}>{tech.name}</div>
                      )}
                    </div>
                    {user.pseudo !== null ? <div className="mod-body-pseudo"><FaUserNinja/> {user.pseudo}</div> : ""}
                    <div className="mod-body-loc"><FaGlobeEurope/> {user.location}</div>
                    <div className="card-wishes">{user.wishes.length > 0 ? <FaHashtag/> : ""}
                      {user.wishes.map((w) => 
                      <div key={w.id}>{w.name} </div> 
                      )}
                    </div>
                  </div>
                  <div className="footer"><TiArrowBack className="footer-left" />SWIPE<TiArrowForward className="footer-right" /></div>
          </div>
        </SwipeableListItem>
        ))}
        <div className="card-special">
                  <p className="card-special-p">Plus de profil à proximité..</p>
                  <Image fluid roundedCircle className="card-special-img" src="src/data/kid.gif" />
                  <p className="card-special-p">Nous en recherchons au plus vite..</p>
        </div>
      </SwipeableList>
    );
  }
}


// == Export
export default Matching;
