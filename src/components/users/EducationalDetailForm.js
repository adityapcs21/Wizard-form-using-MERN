import React,{useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validation/validation';
import FormInput from '../../components/FormInput/FormInput';
import {} from '../../validation/normalize';
import axios from 'axios';


import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';

const EducationalDetailForm = (props) => {
  const onInputChange = e =>{
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [user, setUser] = useState({
    course: "",
    college: "",
    year: "", 
    percentage:"" 
    
  });
  const {course, college, year, percentage} = user;
  const { handleSubmit, previousPage } = props;
  // const onInputChange = e =>{
  //   console.log(e.target.value);
  // };
  return (
    <form onSubmit={handleSubmit}>z
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="3">
                <Field
                  name="course"
                  type="text"
                  component={FormInput}
                  label="Course *"
                  inputPlaceHolder="Enter your Course"
                  // value={course}
                   onChange={e => onInputChange(e)}
                />
              </Col>
              <Col xs="12" lg="3">
                <Field
                  name="college"
                  type="text"
                  component={FormInput}
                  label="College *"
                  inputPlaceHolder="Enter the name of Your College"
                  // value={college}
                   onChange={e => onInputChange(e)}
                />
              </Col>

              <Col xs="12" lg="3">
                <Field
                  name="year"
                  type="number"
                  component={FormInput}
                  label="Year *"
                  inputPlaceHolder="Enter year"
                  // value={year}
                   onChange={e => onInputChange(e)}
                />
              </Col>

              <Col xs="12" lg="3">
                <Field
                  name="percentage"
                  type="text"
                  component={FormInput}
                  label="Percentage/CGPA *"
                  inputPlaceHolder="Enter your percentage or CGPA"
                  // value={percentage}
                   onChange={e => onInputChange(e)}
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

EducationalDetailForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(EducationalDetailForm);