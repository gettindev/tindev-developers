// == Import : npm
import React from 'react';
// this one generate warnings in the console because using componentWillReceiveProps()
import { Typeahead } from 'react-bootstrap-typeahead';
// import PropTypes from 'prop-types';

// == Import : local
// import './user-profil.scss';
import './edit-profil.scss';
// css for the Typeahead
import 'react-bootstrap-typeahead/css/Typeahead.css';
// Bootstrap Components
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
//
import Nav from 'src/components/Nav';
import Header from './Header';

// == Composant
class UserProfilEdit extends React.Component {
  state = {
    avatar: 'https://avatars1.githubusercontent.com/u/1433968',
    firstName: 'Damien',
    lastName: 'Tailhades',
    biography: "I'm a designer trying to become developer after 12 years designing website and mobile apps",
    level: '1',
    technos: ['html', 'php', 'javascript'],
    sharedNewUrl: '',
    sharedNewTitleUrl: '',
    sharedUrl: [
      { id: 0, title: 'Google', url: 'http://www.google.com' },
      { id: 1, title: 'Regular', url: 'http://www.regulardesigner.com' },
      { id: 2, title: 'Webibli', url: 'http://www.webibli.fr' },
    ],
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  removeInArrayFromId = (identifier) => (event) => {
    event.preventDefault();
    // code here...
    const { sharedUrl } = this.state;
    const remodedSharedUrl = sharedUrl.filter(url => url.id !== identifier);
    this.setState({
      sharedUrl: remodedSharedUrl,
    });
  }

  generateId = () => {
    const { sharedUrl } = this.state;
    const ids = sharedUrl.map((url) => url.id);
    const maxId = ids.length === 0 ? 0 : Math.max(...ids);
    const newId = maxId + 1;
    return newId;
  }

  handleAddUrl = () => {
    const { sharedNewUrl } = this.state;
    const { sharedNewTitleUrl } = this.state;
    const { sharedUrl } = this.state;
    const urlId = this.generateId();
    const updateSharedUrl = sharedUrl;

    if (sharedUrl && sharedNewTitleUrl) {
      updateSharedUrl.unshift({
        id: urlId, title: sharedNewTitleUrl, url: sharedNewUrl,
      });
      this.setState({
        sharedUrl: updateSharedUrl,
        sharedNewUrl: '',
        sharedNewTitleUrl: '',
      });
    }

  }

  render() {
    const userName = 'myGithubName';
    const {
      avatar,
      firstName,
      lastName,
      biography,
      level,
      technos,
      sharedNewUrl,
      sharedNewTitleUrl,
      sharedUrl,
    } = this.state;
    return (
      <div className="edit-profil">
        <Nav nav="close-right" title="Éditer mon profil" />
        <Container className="text-left">
          <Header userName={userName} avatar={avatar} />
          <Form>
            <h3>Les infos de ton profil</h3>
            <Form.Group controlId="formFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entre ton prénom" name="firstName" value={firstName} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entre ton nom" name="lastName" value={lastName} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Petite description qui parle de toi..."
                name="biography"
                value={biography}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Ici tu peux parler de toi, de tes side-projects et bien d'autre chose encore !
              </Form.Text>
            </Form.Group>
            <h3>Ton niveau d'XP en Dev.</h3>
            <Form.Group controlId="formLevel.ControlSelect">
              <Form.Label>Choisis ton niveau</Form.Label>
              <Form.Control as="select" value={level} name="level" onChange={this.handleChange}>
                <option value="0">Noobyist (1 ans et moins)</option>
                <option value="1">Noob éclairé (1 à 2 ans)</option>
                <option value="2">Stackover Pro (2 à 4 ans)</option>
                <option value="3">Ninja (4 à 6 ans)</option>
                <option value="4">Binary God (6 ans et plus)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Technos utilisées</Form.Label>
              <Typeahead
                className="technosChoiceField"
                multiple
                onChange={(technos) => { this.setState({ technos }); }}
                selected={technos}
                options={['php', 'javascript', 'JSX', 'Ruby', 'Python', 'MongoBD']}
                name="technos"
                id="formTechnos"
              />
            </Form.Group>

            <Form.Group controlId="formSharedUrls">
              <Form.Label>Si tu veux montrer une url sur ton profil</Form.Label>
              <FormControl className="mb-3" placeholder="Donnes un titre à ton url" value={sharedNewTitleUrl} name="sharedNewTitleUrl" onChange={this.handleChange} />
              <InputGroup className="mb-3">
                <FormControl placeholder="http://whatever.com/" value={sharedNewUrl} name="sharedNewUrl" onChange={this.handleChange} />
                <InputGroup.Append>
                  <Button variant="primary" onClick={this.handleAddUrl}>Ajouter</Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted">Ajouter des urls à votre profil</Form.Text>
              <ul className="edit-profil-url-list">
                {sharedUrl.map((url) => {
                  return (
                    <li key={url.id}>
                      <a className="link" href={url.url}>{url.title} <span className="edit-profil-url-list-url">({url.url})</span></a>
                      <a className="text-danger text-sm suppr" href="#delete" onClick={this.removeInArrayFromId(url.id)}>Supprimer</a>
                    </li>
                  );
                })}
              </ul>
            </Form.Group>
            <Button className="mb-10" onClick={(e) => { e.preventDefault(); console.log(this.state) }} block variant="primary" type="submit">Sauvegarder</Button>
          </Form>
          <Row>
            <Col className="mt-5">
              <h4 className="text-danger">Wow, zone dangereuse !</h4>
              <Button type="button" block variant="outline-danger">Supprimer mon compte</Button>
              <small className="text-muted">Toutes les informations de ton compte seront définitivement supprimées. Nous ne conservons aucune données.</small>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*

EditUserProfil.propTypes = {
  userName: PropTypes.string.isRequired,
};

*/

// == Export
export default UserProfilEdit;
