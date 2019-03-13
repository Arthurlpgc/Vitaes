import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Button, Card, Form, InputGroup,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { copyElement } from '../Util';
import { strings } from '../i18n/strings';

export class AlertCreationForm extends Component {
  constructor(props) {
    super(props);
    const message = { type: 'warning' };
    for (const language of strings.getAvailableLanguages()) {
      message[language] = '';
    }
    this.state = { message };
    this.addAlert = this.addAlert.bind(this);
  }

  addAlert() {
    const errorRef = firebase.database().ref('messages').push();
    let message = copyElement(this.state.message);
    if (!message.en) {
      toast.error(strings.noEnMessageError);
      return;
    }
    errorRef.set(message);
    message = { type: 'warning' };
    for (const language of strings.getAvailableLanguages()) {
      message[language] = '';
    }
    this.setState({ message });
  }

  render() {
    const forms = [];
    for (const key in this.state.message) {
      if (key !== 'type') {
        const msg = (
          <InputGroup
            key={key}
            value={this.state.message[key]}
            style={{ marginBottom: 10 }}
          >
            <InputGroup.Prepend>
              <InputGroup.Text>{key}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
              value={this.state.message[key]}
              onChange={(event) => {
                const { message } = this.state;
                message[key] = event.target.value;
                this.setState({ message });
              }}
            />
          </InputGroup>
        );
        forms.push(msg);
      }
    }
    return (
      <Card style={{ marginBottom: 10 }}>
        <Card.Body>
          <Card.Title>{strings.alertManager}</Card.Title>
          {forms}
          {/* The entries must stay not translated */}
          <Form.Group>
            <Form.Label>{strings.alertType}</Form.Label>
            <Form.Control
              value={this.state.message.type}
              onChange={(event) => {
                const message = copyElement(this.state.message);
                message.type = event.target.value;
                this.setState({ message });
              }}
              as="select"
            >
              <option>default</option>
              <option>warning</option>
              <option>info</option>
              <option>error</option>
              <option>success</option>
            </Form.Control>
          </Form.Group>
          <Button style={{ float: 'right' }} onClick={this.addAlert} variant="dark">{strings.addAlert}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default AlertCreationForm;
