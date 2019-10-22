import React from 'react';
import PropTypes from 'prop-types';

// import './show-profil.scss';

const ShowUserProfil = ({ user }) => {
  const userlinks = user.links;

  return (
    <div className="show-profil">
      <img src={user.avatar} alt={`Avatar de ${user.firstName} ${user.lastName}`} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <h3>Level ({user.level}) <small>{user.githubName}</small></h3>
      <section className="bio">
        <p>{user.biography}</p>
      </section>
      <section className="wishes">
        <h4>Mes attentes :</h4>
        {user.wishes}
      </section>
      <section className="technos">
        <h4>Mes technos :</h4>
        {user.technos}
      </section>
      <section className="links">
        <ul>
          {userlinks.map((link) => (
            <li><a href={link.url}>{link.title}</a></li>
          ))}
        </ul>
      </section>
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
  }).isRequired,
};

export default ShowUserProfil;
