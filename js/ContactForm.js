var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'form-elements'},
          React.createElement('form', {className: 'row contactForm'},
            React.createElement('input', {
              type: 'text',
              placeholder: 'Imię',
              value: this.props.contact.firstName,
            }),
            React.createElement('input', {
              type: 'text',
              placeholder: 'Nazwisko',
              value: this.props.contact.lastName,
            }),
            React.createElement('input', {
              type: 'email',
              placeholder: 'Email',
              value: this.props.contact.email,
            }),
            React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
          )
      )
    );
  },
});


var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
        React.createElement('div', {className: 'contacts-container'},
            React.createElement('ul', {className: 'contactsList'}, contacts)
        )
    );
  }
});
