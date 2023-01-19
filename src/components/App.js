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
      hornedBeastData: data,
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

  updateHornedBeastData = (e) => {
    e.preventDefault();
    const numberOfHorns = e.target.value;
    let updatedHornedBeastData = [];

    if (numberOfHorns === 'Any') {
      updatedHornedBeastData = data;
    } else {
      updatedHornedBeastData = data.filter(beast => beast.horns === Number(numberOfHorns));
    }

    this.setState({
      hornedBeastData: updatedHornedBeastData
    });
  };

  render(){
    return(
      <>
        <Header />
        <Main
          data={this.state.hornedBeastData}
          handleShowSelectedBeast={this.handleShowSelectedBeast}
          updateHornedBeastData={this.updateHornedBeastData}/>
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
