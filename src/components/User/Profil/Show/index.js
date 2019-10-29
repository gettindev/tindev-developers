import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import './show-profil.scss';
import List from './List';

const ShowUserProfil = ({ user }) => {
  const userlinks = user.links;
  const userWishes = user.wishes;
  const userTechnos = user.technos;
  const userLevel = user.levelsList;
  const generalWishList = user.wishesList;
  const userWishId = user.wishedId;

  /* const tab = userWishId.filter((item) => {
    return !generalWishList.includes(item);
  }); */

  // Destructor
  const { avatar, firstName, lastName, githubName, level, biography} = user;
  
  // I create a new tab with id and wish name ! //
  const tab = generalWishList.filter(item => userWishId.includes(item.id));
  console.log(tab);


  return (
    <div className="show-profil">
      <Container>
        <section className="show-profil-info">
          <img className="avatar" src={avatar} alt={`Avatar de ${firstName} ${lastName}`} height="120" width="120" />
          <h2>{`${firstName} ${lastName}`}</h2>
          <h3>{userLevel[level].desc} <small>{githubName}</small></h3>
          <section className="show-profil-info-bio">
            <p>{biography}</p>
          </section>
        </section>
        <section className="wishes">
          <h4>Mes attentes :</h4>
          <List list={userWishes} />
        </section>
        <section className="technos">
          <h4>Mes technos :</h4>
          <List list={userTechnos} />
        </section>
        <section className="links">
          <h4>Mes liens :</h4>
          <ul>
            {userlinks.map((link) => (
              <li key={link.id}><a href={link.url}>{link.title}</a></li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
};

ShowUserProfil.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    githubName: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    wishes: PropTypes.array.isRequired,
    technos: PropTypes.array.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    levelsList: PropTypes.array.isRequired,
  }).isRequired,
};

export default ShowUserProfil;
