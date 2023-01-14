import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../css/SelectedBeast.css';

class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal
        size='lg'
        show={this.props.show}
        onHide={this.props.handleCloseSelectedBeast}
        centered
      >
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleCloseSelectedBeast}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;