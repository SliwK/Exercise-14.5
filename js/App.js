// app.js
var App = React.createClass({


  getInitialState(){
      return{
        contacts: contacts,
      };
  },
/*  //przenioslem to do contactForm

  addContact(event){
    event.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.vaue;
    let email = this.refs.email.value;
    let id = Math.floor((Math.random()*100)+1);

    console.log(this.refs.firstName.value);

    this.setState({
      contacts: [...this.state.contacts, {id, firstName, lastName, email}]
    });
  },
*/


  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});
