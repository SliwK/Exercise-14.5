
class Contacts extends React.Component {

  render() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
        React.createElement('div', {className: 'contacts-container'},
            React.createElement('ul', {className: 'contactsList'}, contacts)
        )
    );
  }
}
