
class Contact extends React.Component {

  render() {
    return (
      React.createElement('div', {className: 'row contactItem'},
        React.createElement('div', {className: 'col-md-4 img-container'},
            React.createElement('img', {
              className: 'contactImage',
              src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
            })
        ),
        React.createElement('div', {className: 'col-md-8 details-container'},
            React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
            React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
            React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
              this.props.item.email
            )
        )
      )
    );
  }
}
