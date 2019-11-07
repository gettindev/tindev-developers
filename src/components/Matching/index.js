// == Import : npm
import React, { Component, useState } from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import Image from 'react-bootstrap/Image';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';
import  user  from 'src/data/user.js';

// == Import : local
import Mod from './Modal';
import './style/matching.scss';
import './style/card.scss';


// == Composant
class Matching extends Component {
  // Local State

  state = {
    end: false, /* If the user has ended matching profiles */
    modalShow: false,
  }
  
  componentDidMount() {
    console.log("la partie matching vient d'être créée");
    this.props.getUsers();
    this.props.sendRequest();
    this.props.getMatchesAndMessages(); // get only my matches
    // this.props.fetchMessages(); // get all messages between me and (all users)


    // A ajouter : requete pour obtenir les matchs et conversations en cours
  }

  /* Func who tcheck the end of the list */
  checkEnd = () => {
    if (this.state.index === this.props.users.length) {
      this.setState({
        ...this.state,
        end: true,
      });
      /* Start the axios request to get new profiles */
      if (this.state.end) {
        this.getProfils();
      }
    }

  }
  
  /* Func to get new profiles */
  // getProfils = () => {
  //   console.log("Envoi d'une requête Ajax");
  //   this.props.getUsers();
  // }

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

  /* Open the Modal */
  setModalShow = () => {
    this.setState({
      ...this.state,
      modalShow: true,
    });
  }

  /* Close the modal */
  unsetModalShow = () => {
    this.setState({
      ...this.state,
      modalShow: false,
    });
  }


  render() {
    /* Destructuration */
    const {
      display, index, userLength, end, modalShow,
    } = this.state;
    const currentUserId = localStorage.getItem('id');
    let userIndex = index;
    /* console.log(index, end); */
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

            {/* Normal card when we have profil in the list */}
            {end == false
              && (
                <>
                  <Image
                    roundedCircle
                    className="card-img-responsive"
                    alt={user.firstName}
                    src={user.photo}
                  />
                  <div className="card-top">
                    <div className="card-top-name">{user.firstName}</div>
                    <div className="card-top-exp">{user.levelId}</div>
                  </div>
                  <div className="card-content">
                    <p className="card-content-bio">Bio: {user.bio}</p>
                    {/* <button
                      className="card-content-btn"
                      onClick={() => this.setModalShow()}
                    >Voir le profil complet
                  </button>
                    <Mod
                      show={modalShow}
                      onHide={() => this.unsetModalShow()}
                      currentuser={user}
                    /> */}
                    {/* <div className="card-content-tech">{display.tech}</div> */}
                  </div>
                  {/*<div className="card-tag">{display.tag}</div>*/}
                  <div className="footer"><TiArrowBack className="footer-left" />SWIPE<TiArrowForward className="footer-right" /></div>
                </>
              )}
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
