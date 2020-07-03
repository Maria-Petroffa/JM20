import React from 'react';

import { useFormik } from 'formik';

import { InputItem } from './InputItem';
import { Password } from './password';
import { SkillsList } from './skillsList';
import { AcceptTerms } from './acceptTerms';
import { Submit } from './submit';
import { Form, ErrorMessage } from './style';
import { BasicFormSchema } from './validateForm';

import { request } from '../service/service';

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
    onSubmit: (values) => request(values),
    validationSchema: BasicFormSchema,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <InputItem
          id="name"
          labelName="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
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
        <InputItem
          id="email"
          labelName="Email Address"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <InputItem
          id="website"
          labelName="Website"
          onChange={formik.handleChange}
          value={formik.values.website}
          type="text"
        />
        {formik.touched.website && formik.errors.website ? (
          <ErrorMessage>{formik.errors.website}</ErrorMessage>
        ) : null}
        <InputItem
          id="age"
          labelName="Age"
          onChange={formik.handleChange}
          value={formik.values.age}
          type="text"
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
