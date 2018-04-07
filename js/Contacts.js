var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,   //tutaj z App dostajemy listę contacts jako items
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id}); //jako item przesyłamy contact 
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});
