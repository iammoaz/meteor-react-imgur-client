// Import Libraries

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ImageList from './components/image-list.js';

// Create Components
class App extends Component {
   constructor(props) {
      super(props);

      this.state = { images: [] };
   }

   componentWillMount() {
      Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({images: response.data.data }));
   }

   render() {
      return (
         <div>
            <ImageList images={this.state.images} />
         </div>
      );
   }
};

// Render Component
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
});
