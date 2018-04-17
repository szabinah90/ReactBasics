import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      title: 'Welcome'
    };
  }

  changeTitle (title) {
    this.setState({title: title});
  }
  render () {
    /* demonstration for state: state was Shepard
    in the constructor: this.state = {name: 'Shepard'};
    setTimeout(() => {
      this.setState({name: 'Garrus'});
    }, 2000);
    */
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
export default Layout;
