import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate  from '../../validation/validation';
import FormInput from '../../components/FormInput/FormInput';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import {
  captialize
} from '../../validation/normalize';
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
  const [user, setUser] = useState({

    LinkedIn: "",
    GitHub: "",
    Facebook: "", 
    hobbies:""
  });
  const { LinkedIn, GitHub, Facebook, hobbies } = user;

  let history = useHistory();
  const onSubmit = async e => {

    e.preventDefault();
    console.log(e.target.value);
   
    
    await axios.post("http://localhost:4000/users", user);
    history.push("/");
  };
  
  const onInputChange = e =>{
    setUser({ ...user, [e.target.name]: e.target.value });
  };
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
                  // value={LinkedIn}
                   onChange={e => onInputChange(e)}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="GitHub"
                  type="text"
                  component={FormInput}
                  label="GitHub profile link *"
                  inputPlaceHolder="Enter GitHub profile link"
                  // value={GitHub}
                   onChange={e => onInputChange(e)}
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
                  // value= {Facebook}
                   onChange={e => onInputChange(e)}
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
                  // value={hobbies}
                   onChange={e => onInputChange(e)}
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