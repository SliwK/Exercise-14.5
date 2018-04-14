var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired, //to dostaje z App - to element contactForm
    addContact: React.PropTypes.func.isRequired,  //to z App
  },


  onChange: function(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

//    console.log(this);
  },


  onSubmit: function(event) {
    event.preventDefault();
    this.props.addContact({firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email});
  },

  render: function() {
    return (
      React.createElement('div', {className: 'form-elements'},
          React.createElement('form', {onSubmit: this.onSubmit, className: 'row contactForm'},
              React.createElement('input', {
                type: 'text',
                placeholder: 'Imię',
                name: 'firstName',
                value: this.firstName,
                onChange: this.onChange,
              }),
              React.createElement('input', {
                type: 'text',
                placeholder: 'Nazwisko',
                name: 'lastName',
                value: this.lastName,
                onChange: this.onChange,
              }),
              React.createElement('input', {
                type: 'email',
                placeholder: 'Email',
                name: 'email',
                value: this.email,
                onChange: this.onChange,
              }),
              React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
          )
      )
    );
  },
});
