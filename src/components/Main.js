import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornFilter from './HornFilter';

class Main extends React.Component {
  render() {
    return(
      <main>
        <HornFilter
          updateHornedBeastData={this.props.updateHornedBeastData} />
        <div className='card-gallery'>
          {this.props.data.map((beast) => (
            <HornedBeasts
              handleShowSelectedBeast={this.props.handleShowSelectedBeast}
              key={beast._id} {...beast}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
