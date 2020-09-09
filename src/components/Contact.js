import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,Typography,TextareaAutosize} from '@material-ui/core/';
import '../css/Contact.css';
import {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class Contact extends Component {
  state = {
    Message: 'hjg',
    sender:'jhggj',
    formSubmitted: false
  };

  

  handleCancel = this.handleCancel.bind(this);
  handleChangeMessage = this.handleChangeMessage.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChangeEmail = this.handleChangeEmail.bind(this);

  handleCancel() {
    console.log("uhfkrug");
    console.log(this.state.Message);
    this.setState({
      Message:'',
      sender:''
    });
  }

  handleChangeMessage(event) {
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
    console.log(this.state.formSubmitted)
  }


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
     
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {

    
    const notify=()=>{
      console.log(this.state.formEmailSent)
      if(this.state.formEmailSent){
      toast("Message sent successfully!",{
        
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       
      });
    }}

    return (
      <div className="Contact" id="contactme" >
        <Typography component="h1" variant="h4" className="heading">
          Get in Touch !
        </Typography>
        <form onSubmit={this.handleSubmit} className="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            onChange={this.handleChangeEmail}
            autoComplete="email"
          />
          <TextField
            multiline
            variant="outlined"
            aria-label="maximum height"
            margin="normal"
            required
            onChange={this.handleChangeMessage}
            label="Message"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="my_button"
            onClick={notify}
          >
            Send
          </Button>
          <ToastContainer />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleCancel}
            id="my_button"
          >
            Cancel
          </Button>
          </form>
          </div>

    );
  }
}

Contact.propTypes = {
    env: PropTypes.object.isRequired
  };