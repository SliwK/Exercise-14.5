var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,

  },

  getInitialState () {
    return {
      addContact: this.addContact,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
  },

  changeFirstName (event) {
    this.setState({firstName: event.target.value});
  },

  changeLastName (event) {
    this.setState({lastName: event.target.value});
  },

  changeEmail (event) {
    this.setState({email: event.target.value});
  },

//dodałem tutaj bo tu przynajmniej widzę w logach że coś dziła... :(
  addContact(event){
    event.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.vaue;
    let email = this.refs.email.value;
    let id = Math.floor((Math.random()*100)+1);

    console.log(this);

    this.setState({
      contacts: this.state.contacts.concat({id, firstName, lastName, email})
    });

    this.refs.firstName.value = "";
    this.refs.lastName.vaue = "";
    this.refs.email.value = "";
  },


  render: function() {
    return (
      React.createElement('div', {className: 'form-elements'},
          React.createElement('form', {onSubmit: this.addContact, className: 'row contactForm'},
            React.createElement('input', {
              type: 'text',
              placeholder: 'Imię',
              ref: "firstName",
              value: this.state.firstName,
              onChange: this.changeFirstName,
            }),
            React.createElement('input', {
              type: 'text',
              placeholder: 'Nazwisko',
              ref: "lastName",
              value: this.state.lastName,
              onChange: this.changeLastName,
            }),
            React.createElement('input', {
              type: 'email',
              placeholder: 'Email',
              ref: "email",
              value: this.state.email,
              onChange: this.changeEmail,
            }),
            React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
          )
      )
    );
  },
});
