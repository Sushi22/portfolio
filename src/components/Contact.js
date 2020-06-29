import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import '../css/Contact.css';


export default class Contact extends Component {
  state = {
    Message: '',
    sender:'',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChangeEmail = this.handleChangeEmail.bind(this);
  showMessage=this.showMessage.bind(this)


  showMessage(){
    alert("Message sent successfully");
  }

  handleCancel() {
    this.setState({
      Message: '',
      sender:''
    });
  }

  handleChange(event) {
    this.setState({
      Message: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
        sender: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    const {
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.state.sender,
      this.state.Message,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId,user_email,Message, user) {
    window.emailjs
      .send('default_service', templateId, {
          user_email,
          Message
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
    <div className="Contact" id="contactme">
    <h1 class="con">Let's Talk</h1>

    <Form onSubmit={this.handleSubmit} id="form">
      <FormGroup>
        <Label for="exampleEmail">Your Email</Label>
        <Input type="email" name="email" id="exampleEmail"  onChange={this.handleChangeEmail}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input type="textarea" 
  aria-label="maximum height"name="text" id="exampleText" onChange={this.handleChange} />
      </FormGroup>
      <Button
        type="submit"
        value="Submit"
        color="primary"
        id="mybutton"
        onClick={this.showMessage}
      >
        Send
      </Button>
      <Button  color="secondary" id="cancel" onClick={this.handleCancel}>Cancel</Button>
    </Form>
    </div>


    );
  }
}

Contact.propTypes = {
    env: PropTypes.object.isRequired
  };