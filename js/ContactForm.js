var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired, //to dostaje z App - to element contactForm
    addContact: React.PropTypes.func.isRequired,  //to z App
  },


  onSubmit: function(e) {
    e.preventDefault();
    this.props.addContact({});
  },

  render: function() {
    return (
      React.createElement('div', {className: 'form-elements'},
          React.createElement('form', {onSubmit: this.onSubmit, className: 'row contactForm'},
              React.createElement('input', {
                type: 'text',
                placeholder: 'Imię',
                ref: 'firstName',
                value: this.props.contact.firstName,
              }),
              React.createElement('input', {
                type: 'text',
                placeholder: 'Nazwisko',
                ref: 'lastName',
                value: this.props.contact.lastName,
              }),
              React.createElement('input', {
                type: 'email',
                placeholder: 'Email',
                ref: 'email',
                value: this.props.contact.email,
              }),
              React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
          )
      )
    );
  },
});
