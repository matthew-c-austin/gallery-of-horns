import React from 'react';
import data from '../data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showSelectedBeast: false,
      selectedBeastTitle: '',
      selectedBeastImg: '',
      selectedBeastDescription: ''
    };
  }

  handleShowSelectedBeast = (title, img_URL, description) => {
    this.setState({
      showSelectedBeast: true,
      selectedBeastTitle: title,
      selectedBeastImg: img_URL,
      selectedBeastDescription: description
    });
  };

  handleCloseSelectedBeast = () => {
    this.setState({
      showSelectedBeast: false,
    });
  };

  render(){
    return(
      <>
        <Header />
        <Main
          data={data}
          handleShowSelectedBeast={this.handleShowSelectedBeast}/>
        <Footer />
        <SelectedBeast
          show={this.state.showSelectedBeast}
          title={this.state.selectedBeastTitle}
          image_url={this.state.selectedBeastImg}
          description={this.state.selectedBeastDescription}
          handleCloseSelectedBeast={this.handleCloseSelectedBeast}
        />
      </>
    );
  }
}

export default App;
