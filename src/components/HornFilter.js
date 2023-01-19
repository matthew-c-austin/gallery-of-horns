import React from 'react';
import Form from 'react-bootstrap/Form';
import '../css/HornFilter.css';

class HornFilter extends React.Component {
  render() {
    return(
      <div className='d-flex justify-content-center mb-5'>
        <Form>
          <Form.Label>Select the number of horns you want to see!</Form.Label>
          <Form.Select size='lg' onChange={this.props.updateHornedBeastData}>
            <option value="Any">Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Select>
        </Form>
      </div>
    );
  }
}

export default HornFilter;
