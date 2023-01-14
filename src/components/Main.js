import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
  render() {
    return(
      <main>
        {this.props.data.map((beast) => (
          <HornedBeasts 
            handleShowSelectedBeast={this.props.handleShowSelectedBeast}
            key={beast._id} {...beast}
          />
        ))}
      </main>
    );
  }
}

export default Main;
