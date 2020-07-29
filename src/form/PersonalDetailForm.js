import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import {
  mobile,
  captialize,
  email
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';


const GeneralForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>

          <FormGroup row>
            <Col xs="12" lg="6">
              <Field
                name="firstname"
                type="text"
                component={FormInput}
                label="First name *"
                inputPlaceHolder="Enter First Name"
                normalize={captialize}
              />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="lastname"
                  type="text"
                  component={FormInput}
                  label="Last Name *"
                  inputPlaceHolder="Enter Last name"
                  normalize={captialize}
                />
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="email"
                  type="text"
                  component={FormInput}
                  label="Email *"
                  inputPlaceHolder="Enter your Email Id"
                  normalize={email}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="phone"
                  type="text"
                  component={FormInput}
                  label="Phone No *"
                  inputPlaceHolder="+91"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="address"
                  type="textarea"
                  component={FormInput}
                  label="Current Address *"
                  inputPlaceHolder="Enter your Current Address"
                  
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="address"
                  type="textarea"
                  component={FormInput}
                  label="Permanent Address *"
                  inputPlaceHolder="Enter your Permanent Address"
                  
                />
              </Col>
            </FormGroup>

            <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <label htmlFor="file-input">
                      Upload Employee photo
                    </label>
                  </Col>
                  <Col xs="12" md="9">
                    <input
                      type="file"
                      id="file-input"
                      name="image"
                      accept="image/*"
                    />
                  </Col>
                </FormGroup>
              </Col>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
               Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(GeneralForm);
