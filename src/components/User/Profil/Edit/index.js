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
    photo: this.props.currentUser.photo,
    firstName: this.props.currentUser.firstName,
    lastName: this.props.currentUser.lastName,
    bio: this.props.currentUser.bio,
    levelId: this.props.currentUser.levelId,
    technos: this.props.currentUser.technos,
    sharedUrl: this.props.currentUser.links,
    sharedNewUrl: '',
    sharedNewTitleUrl: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { sendRequest } = this.props;
    const { changeState } = this.props;
    const currentUserDatas = this.state;
    //console.log(currentUserDatas);
    sendRequest(currentUserDatas);
    //changeState(currentUserDatas);
  }

  render() {
    const userName = 'myGithubName';
    const {
      photo,
      firstName,
      lastName,
      bio,
      levelId,
      technos,
      sharedNewUrl,
      sharedNewTitleUrl,
      sharedUrl,
    } = this.state;

    console.log(levelId);
    return (
      <div className="edit-profil">

        <Container className="text-left">
          <Header userName={userName} photo={photo} />
          <Form>
            <h5>Les infos de ton profil</h5>
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
                name="bio"
                value={bio}
                onChange={this.handleChange}
              />
              <Form.Text className="form-info">
                Ici tu peux parler de toi, de tes side-projects et bien d'autre chose encore !
              </Form.Text>
            </Form.Group>
            <h5>Ton niveau d'XP en Dev.</h5>
            <Form.Group controlId="formLevel.ControlSelect">
              <Form.Label>Choisis ton niveau</Form.Label>
              {console.log('LEVEL ID FROM THE VUE: ', levelId)}
              <Form.Control className="level-select" as="select" value={levelId} name="levelId" onChange={this.handleChange}>
                <option id="level-select" value="0">Noobyist (1 ans et moins)</option>
                <option id="level-select" value="1">Noob éclairé (1 à 2 ans)</option>
                <option id="level-select" value="2">Stackover Pro (2 à 4 ans)</option>
                <option id="level-select" value="3">Ninja (4 à 6 ans)</option>
                <option id="level-select" value="4">Binary God (6 ans et plus)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Technos utilisées</Form.Label>
              <Typeahead
                className="technosChoiceField"
                multiple
                onChange={(technos) => { this.setState({ technos }); }}
                selected={technos}
                options={['php', 'javascript', 'JSX', 'React', 'Vue', 'Angular', 'Sass', 'Ruby', 'Python', 'MongoBD', 'CSS', 'html', 'MySQL', 'C#', 'Go', 'WordPress', 'Symfony', 'Java']}
                name="technos"
                id="formTechnos"
              />
            </Form.Group>

            {/* <Form.Group controlId="formSharedUrls">
              <Form.Label>Tu veux montrer une url sur ton profil?</Form.Label>
              <FormControl className="mb-3" placeholder="Donnes un titre à ton url" value={sharedNewTitleUrl} name="sharedNewTitleUrl" onChange={this.handleChange} />
              <InputGroup className="mb-3">
                <FormControl placeholder="http://whatever.com/" value={sharedNewUrl} name="sharedNewUrl" onChange={this.handleChange} />
                <InputGroup.Append>
                  <Button className="btn-mycolor" onClick={this.handleAddUrl}>Ajouter</Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="form-info">Ajouter des urls à votre profil</Form.Text>
              <ul className="edit-profil-url-list mb-1">
                {sharedUrl.map((url) => {
                  return (
                    <li key={url.id}>
                      <a className="link" href={url.url}>{url.title} <span className="edit-profil-url-list-url">({url.url})</span></a>
                      <a className="text-danger text-sm suppr" href="#delete" onClick={this.removeInArrayFromId(url.id)}>Supprimer</a>
                    </li>
                  );
                })}
              </ul>
            </Form.Group> */}
            <Button className="mb-10" onClick={this.handleSubmit} block className="btn-mycolor" type="submit">Sauvegarder</Button>
          </Form>
          <Row>
            <Col className="mt-5">
              <h5 className="text-danger font-weight-bold text-center">Wow, zone dangereuse!!</h5>
              <Button type="button" block variant="outline-danger">Supprimer mon compte</Button>
              <small className="form-info">Toutes les informations de ton compte seront définitivement supprimées. Nous ne conservons aucune données.</small>
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
