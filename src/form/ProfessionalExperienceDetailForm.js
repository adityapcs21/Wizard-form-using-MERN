import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  upper, captialize
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';

const ProfessionalExperienceDetailForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="3">
                <Field
                  name="companyName"
                  type="text"
                  component={FormInput}
                  label="Company Name *"
                  inputPlaceHolder="Enter Name of your company"
                  normalize={upper}
                />
              </Col>
              <Col xs="12" lg="3">
                <Field
                  name="from"
                  type="date"
                  component={FormInput}
                  label="Date *"
                  
                />
              </Col>

              <Col xs="12" lg="3">
                <Field
                  name="to"
                  type="date"
                  component={FormInput}
                  label="TO *"
                  
                />
              </Col>

              <Col xs="12" lg="3">
                <Field
                  name="designation"
                  type="text"
                  component={FormInput}
                  label="Designation *"
                  inputPlaceHolder="Enter your Designation"
                  normalize={captialize}
                  
                />
              </Col>

            </FormGroup>
   

          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
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

ProfessionalExperienceDetailForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(ProfessionalExperienceDetailForm);
