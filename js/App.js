// app.js
class App extends React.Component {

  render() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {forms: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
}
