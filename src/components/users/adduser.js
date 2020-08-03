import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import GeneralForm from './PersonalDetailForm';
import EducationalDetailForm from './EducationalDetailForm';
import NomineeDetailsForm from './NomineeDetailsForm';
import ProfessionalExperienceDetailForm from './ProfessionalExperienceDetailForm';

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Personal Details'},
        {title: 'Educational details'},
        {title: 'Professional experience details'},
        {title: 'Social and Hobbies'}
      ],


    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onInputChange = e =>{
    console.log(e.target.value);
  };

  render() {

    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    // Edited from heere!
    // const {firstname,lastname,email,phone,address,course,college,year,percentage,companyName,from,to,designation,LinkedIn,GitHub,Facebook,hobbies}=user;

    return (
      <Card>
        <Stepper steps={ steps } activeStep={ page } />
        {page === 0 && <GeneralForm onSubmit={this.nextPage} />}
        {page === 1 && (
          <EducationalDetailForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <ProfessionalExperienceDetailForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <NomineeDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <NomineeDetailsForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
