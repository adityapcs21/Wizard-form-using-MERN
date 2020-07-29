import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate  from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  captialize
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';

const NomineeDetailsForm
 = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="LinkedIn"
                  type="text"
                  component={FormInput}
                  label="LinkedIn profile link *"
                  inputPlaceHolder="Enter LinkedIn profile links"
                  
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="GitHub"
                  type="text"
                  component={FormInput}
                  label="GitHub profile link *"
                  inputPlaceHolder="Enter GitHub profile link"
                  
                />
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="12" lg="6">
                <Field
                  name="Facebook"
                  type="text"
                  component={FormInput}
                  label="Facebook Profile *"
                  inputPlaceHolder="Enter Facebook Profile link"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="hobbies"
                  type="text"
                  component={FormInput}
                  label="Hobbies"
                  inputPlaceHolder="Enter your Hobbies"
                  normalize={captialize}
                  
                />
              </Col>
            </FormGroup>
            <br />


          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}} disabled={pristine || submitting}>
               Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

NomineeDetailsForm
.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NomineeDetailsForm
  );
