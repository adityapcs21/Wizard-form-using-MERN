const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'firstName Required';
  }  else if ( values.firstname && !/^([a-zA-Z]{3,10})$/i.test(values.firstname)){
    errors.firstname = "first name  must be between 3-10 character";
  }

  if (!values.lastname) {
    errors.lastname = 'lastName Required';
  }  else if ( values.lastname && !/^([a-zA-Z]{3,10})$/i.test(values.lastname)){
    errors.lastname = "first name  must be between 3-10 character";
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if ( values.email && !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
    errors.email = "Invalid email adddress";
  }

  if (!values.phone) {
    errors.phone = 'MobileNumber Required';
  } else if (values.phone && !/^([6-9]\d{9})$/i.test(values.phone)) {
    errors.phone = 'Invalid mobile number, must be 10 digits';
  }

  if (!values.address) {
    errors.address = 'Address Required';
  }

  if (!values.course) {
    errors.course = 'Course name Required';
  }

  if (!values.college) {
    errors.college = 'college name Required';
  }

  if (!values.year) {
    errors.year = 'select year Required';
  }

  if (!values.percentage) {
    errors.percentage = 'Percentage/CGPA Required';
  }

  if (!values.companyName) {
    errors.companyName = 'Company name Required';
  }

  if (!values.from) {
    errors.from = 'Date of joining Required';
  }

  if (!values.to) {
    errors.to = 'Date of leaving the company Required';
  }

  if (!values.designation) {
    errors.designation = 'Designation Required';
  }

  if (!values.LinkedIn) {
    errors.LinkedIn = 'LinkedIn profile link Required';
  }

  if (!values.GitHub) {
    errors.GitHub = 'GitHub profile link Required';
  }

  if (!values.Facebook) {
    errors.Facebook = 'Facebook profile link Required';
  }

  return errors;
};

export default validate;
