import React, { Component } from 'react';
import axios from 'axios';
import './ContactUs.css';

class Contactus extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        firstnameError: '',
        emailError: '',
        messageError: '',
        sent: false
    }

    // handle inputs
    handleFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    
    valid() { 
      
        if (!this.state.firstname) {
            this.setState(
                { firstnameError: "Please fill in the name field." }
            )
        }   
        if (!this.state.email.includes("@")) {
            this.setState({ emailError: "Invalid email." })
        }
        if (!this.state.message) {
            this.setState({ messageError: "Message field must not be empty." })
            return false;
        }
     
        return true;
    }

    formSubmit = (e) => {
        let data;
        e.preventDefault();
        const isValid = this.valid();
        if (isValid) {
            
            data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                message: this.state.message
            }

            axios.post('/api/form', data)
                .then(res => {
                    this.setState({
                        sent: true,
                    }, this.resetForm())
                })
                .catch(() => {
                    console.log('message not sent');
                })
        }
    }
        // reseting initial data
        resetForm = () => {
            this.setState({
                firstname: '',
                firstnameError: '',
                lastname: '',
                email: '',
                emailError: '',
                message: '',
                messageError:''
            })

            setTimeout(() => {
                this.setState({
                    sent: false
                })
            }, 2000)
        }

    render() { 
        return (
            <div className="cu-bg">
            <div className=" cu-container"><h2>Contact Us</h2>
                <form onSubmit={this.formSubmit}>
                    <div className="singleItem">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" className="firstname" placeholder="First Name"
                            value={this.state.firstname}
                                onChange={this.handleFirstName}
                        />
                    </div>
                        <div style={{ fontSize: 12, color: "white" }}>{this.state.firstnameError}</div>

                    <div className="singleItem">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" className="lastname" placeholder="Last Name"
                        value={this.state.lastname}
                            onChange={this.handleLastName}
                        />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="name" placeholder="Email" 
                        value={this.state.email}
                            onChange={this.handleEmail}/>
                    </div>
                    <div style={{ fontSize: 12, color: "white" }}>{this.state.emailError}</div>
                    <div className="textArea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="Message"
                        value={this.state.message}
                            onChange={this.handleMessage}
                            ></textarea>
                             <div style={{ fontSize: 12, color: "white" }}>{this.state.messageError}</div>
                    </div>
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                    <div className="btn">
                            <button type="submit" >Submit</button>
                    </div>
                </form>

                </div>
                </div>
        );
    }
}

export default Contactus;