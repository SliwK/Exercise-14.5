class ContactForm extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        contacts: contacts,
        firstName: "",
        lastName: "",
        email: ""
      };
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.addContact = this.addContact.bind(this);
    }

    changeFirstName (event) {
      this.setState({firstName: event.target.value});
    }

    changeLastName (event) {
      this.setState({lastName: event.target.value});
    }

    changeEmail (event) {
      this.setState({email: event.target.value});
    }

    addContact(event){
      event.preventDefault();
      const newContact = {
        id: Math.floor((Math.random()*100)+1),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email

      };

      console.log(this);

      this.setState(previousList => ({
        contacts: previousList.contacts.concat(newContact),
        firstName: "",
        lastName: "",
        email: ""
      })
      );
    }


    render() {
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
    }
}
