import React from 'react';
import {
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormikUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><i class="fas fa-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control　autoComplete="off" placeholder="Search from here" aria-describedby="inputGroupPrepend"
              name="searchtext" value={this.props.value} onChange={this.props.onChange} isInvalid={false}/>
          </InputGroup>
        </Form.Group>
      </Form.Row>
    );
  }
}

export default SearchForm;
