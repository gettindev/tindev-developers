// == Import : npm
import React, { Component } from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import Image from 'react-bootstrap/Image';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';

// == Import : local
import Mod from './Modal';
import './style/matching.scss';
import './style/card.scss';


// == Composant
class Matching extends Component {
  // Local State
  state = {
    display: this.props.users[0], /* display element */
    index: (this.props.users.length) - (this.props.users.length), /* index of the display element */
    userLength: this.props.users.length - 1,
    end: false, /* If the user has ended matching profiles */
    modalShow: false,
  }

  componentDidMount() {
    console.log("la partie matching vient d'être créée");
    this.props.getUsers();
    this.props.sendRequest();
    this.props.getMatchesAndMessages(); // get only my matches
    this.props.fetchMessages(); // get all messages between me and (all users)

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
  getProfils = () => {
    console.log("Envoi d'une requête Ajax");
    this.props.getUsers();
  }

  /* like an user */
  likeProfil = () => {
    console.log('Like done');
    const { doLike } = this.props;

    if (this.state.end !== true) {
      doLike();
    }
  }

  /* Unlike an user */
  unlikeProfil = () => {
    console.log('Unlike done');
    const { doUnlike } = this.props;

    if (this.state.end !== true) {
      doUnlike();
    }
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
    let userIndex = this.props.users.indexOf(display);
    /* console.log(index, end); */
    return (


      <SwipeableList>
        <SwipeableListItem
          swipeLeft={{
            content: <Image roundedCircle className="right" src="src/data/glass.gif" />,
            action: () => (
              console.info('swiped on left'),
              this.setState({
                ...this.state,
                display: this.props.users[userIndex = userIndex < userLength ? userIndex + 1 : userIndex],
                index: index + 1,
              }),
              this.checkEnd(),
              this.unlikeProfil()
            ),
          }}
          swipeRight={{
            content: <Image roundedCircle className="right" src="src/data/beer.gif" />,
            action: () => (
              console.info('swiped on right'),
              this.setState({
                ...this.state,
                display: this.props.users[userIndex = userIndex < userLength ? userIndex + 1 : userIndex],
                index: index + 1,
              }),
              this.checkEnd(),
              this.likeProfil()
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
                    alt={display.img.alt}
                    src={display.img.src}
                  />
                  <div className="card-top">
                    <div className="card-top-name">{display.name}</div>
                    <div className="card-top-exp">{display.exp}</div>
                  </div>
                  <div className="card-content">
                    <p className="card-content-bio">Bio: {display.bio}</p>
                    <button
                      className="card-content-btn"
                      onClick={() => this.setModalShow()}
                    >Voir le profil complet
                  </button>
                    <Mod
                      show={modalShow}
                      onHide={() => this.unsetModalShow()}
                      currentuser={display}
                    />
                    <div className="card-content-tech">{display.tech}</div>
                  </div>
                  <div className="card-tag">{display.tag}</div>
                  <div className="footer"><TiArrowBack className="footer-left" />SWIPE<TiArrowForward className="footer-right" /></div>
                </>
              )}

            {/* The card when list of cards is ended */}
            {end
              && (
                <div className="card-special">
                  <p className="card-content-bio-end">Plus de profil à proximité..</p>
                  <Image fluid roundedCircle className="right" src="src/data/kid.gif" />
                  <p className="card-content-bio-end">Nous en recherchons au plus vite..</p>
                </div>
              )}
          </div>


        </SwipeableListItem>

      </SwipeableList>
    );
  }
}

// == Export
export default Matching;
