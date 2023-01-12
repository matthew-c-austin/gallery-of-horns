import React from "react";
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      numberOfFavorites: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite,
      numberOfFavorites: (prevState.isFavorite ? prevState.numberOfFavorites - 1 : prevState.numberOfFavorites + 1)
    }));
  }

  render() {
    return(
    <Card
      bg={this.state.isFavorite ? 'danger' : 'dark'}
      border={this.state.isFavorite ? 'danger' : 'dark'}
      onClick={this.handleClick}
      >
        <Card.Img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <p>{this.state.isFavorite ? `❤️ : ${this.state.numberOfFavorites}` : `🖤 : ${this.state.numberOfFavorites}`}</p>
        </Card.Body>     
      </Card>
    );
  }
}

export default HornedBeasts