import React from 'react';

import { useFormik } from 'formik';

import axios from 'axios';
import { Name } from './input/name';
import { Password } from './input/password';
import { Email } from './input/email';
import { Website } from './input/website';
import { Age } from './input/age';
import { SkillsList } from './input/skillsList';
import { AcceptTerms } from './input/acceptTerms';
import { Submit } from './input/submit';

import { Form, ErrorMessage } from './style';
import { BasicFormSchema } from './validateform';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      repeatPassword: '',
      email: '',
      website: '',
      age: '',
      skills: [],
      acceptTerms: '',
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/sign-up', values).then((response) => {
        response.data === 'error'
          ? alert('Этот адрес уже занят')
          : alert('Регистрация прошла успешно');
      });
    },
    validationSchema: BasicFormSchema,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Name
          id="name"
          labelName="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
        <Password
          id="password"
          labelName="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Password
          id="repeatPassword"
          labelName="Repeat Password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <ErrorMessage>{formik.errors.repeatPassword}</ErrorMessage>
        ) : null}
        <Email
          id="email"
          labelName="Email Address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <Website
          id="website"
          labelName="Website"
          onChange={formik.handleChange}
          value={formik.values.website}
        />
        {formik.touched.website && formik.errors.website ? (
          <ErrorMessage>{formik.errors.website}</ErrorMessage>
        ) : null}
        <Age
          id="age"
          labelName="Age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <ErrorMessage>{formik.errors.age}</ErrorMessage>
        ) : null}
        {SkillsList(
          formik.handleChange,
          formik.values.skills,
          formik.setFieldValue,
        )}
        <AcceptTerms
          id="acceptTerms"
          labelName="Accept Terms"
          onChange={formik.handleChange}
          checked={formik.values.acceptTerms}
        />
        {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
          <ErrorMessage>{formik.errors.acceptTerms}</ErrorMessage>
        ) : null}
        <Submit labelName="Submit" />
      </Form>
    </>
  );
};

export default SignupForm;
