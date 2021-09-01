import React from 'react';
import { Formik, Form } from 'formik';
import PersonalDetails from './components/PersonalDetails';
import ShowroomDetails from './components/ShowroomDetails';
import Settings from './components/Settings';
import Documents from './components/Documents';
import Gallery from './components/Gallery';

import './dealer.scss';

function index() {
  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
    >
      <h6>Testing </h6>
      <Form>
        <PersonalDetails />
        <ShowroomDetails />
        <Settings />
        <Documents />
        <Gallery />
      </Form>
    </Formik>
  );
}

export default index;
