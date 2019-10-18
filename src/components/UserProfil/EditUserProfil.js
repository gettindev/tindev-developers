// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './user-profil.scss';
import Nav from 'src/components/Nav';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

// == Composant
class EditUserProfil extends React.Component {
  state = {
    avatar: 'https://avatars1.githubusercontent.com/u/1433968',
    firstName: 'Damien',
    lastName: 'Tailhades',
    biography: "I'm a designer trying to become developer after 12 years designing website and mobile apps",
    level: '1',
    technos: ['html', 'php', 'javascript'],
    sharedUrl: [
      { id: 0, name: 'Google', url: 'http://www.google.com' },
      { id: 1, name: 'Regulardesigner', url: 'http://www.regulardesigner.com' },
      { id: 2, name: 'Webibli', url: 'http://www.webibli.fr' }
    ]
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const userName = 'myGithubName';
    const { avatar, firstName, lastName, biography, level, technos, sharedUrl } = this.state;
    return (
      <div className="edit-profil">
        <Nav nav="close-right" title="Éditer mon profil" />
        <Container className="text-left">
          <Row>
            <Col>
              <h2>Hello {userName}</h2>
              <p>Bienvenue sur l'édition de ton profil.</p>
            </Col>
          </Row>
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
              <Form.Control as="textarea" rows="4" placeholder="Petite description qui parle de toi..." name="biography" value={biography} onChange={this.handleChange} />
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
            <Form.Group controlId="formTechnos">
              <Form.Label>Technos utilisées</Form.Label>
              <InputGroup>
                <FormControl placeholder="Ajoutes des technos" />
                <InputGroup.Append>
                  <Button variant="primary">Ajouter</Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted">
                {technos}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSharedUrls">
              <Form.Label>Si tu veux montrer une url sur ton profil</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="http://whatever.com/"
                />
                <InputGroup.Append>
                  <Button variant="primary">Ajouter</Button>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className="text-muted">
                Ajouter des urls à votre profil.
              </Form.Text>
              <ul>
                {sharedUrl.map((url) => <li key={url.id}><a href={url.url}>{url.name}</a> <span className="text-danger text-sm">supprimer</span></li>)}
              </ul>
            </Form.Group>

            <Button onClick={(e) => {e.preventDefault(); console.log(this.state)}} block variant="primary" type="submit">Sauvegarder</Button>
          </Form>
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
export default EditUserProfil;
