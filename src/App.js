import React from 'react';
import './App.css';

import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {console.log(data, 'success submit')};
  console.log(errors);
  return (
    <div className="App container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flexWrapper">
          <input
            type="text"
            placeholder="Full name"
            name="Fullname"
            ref={register({ required: true, maxLength: 80 })}
          />
          <span className="errors">
            {errors.Fullname && 'Name is required'}
          </span>
        </div>
        <div className="flexWrapper">
          <input
            type="text"
            placeholder="Email"
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {errors.Email && 'Email is required and needs to be valid'}
          </span>
        </div>
        <div className="flexWrapper">
          <input
            type="tel"
            placeholder="Mobile number"
            name="Mobilenumber"
            ref={register({ required: true, minLength: 6, maxLength: 12 })}
          />
          <span className="errors">
            {' '}
            {errors.Mobilenumber &&
              'Number is required and needs to be more than 6 character'}
          </span>
        </div>
        <div className="flexWrapper">
          <label>
            <input
              name="Gender"
              type="radio"
              value="Male"
              ref={register({ required: true })}
            />
            Male
          </label>
          <label>
            <input
              name="Gender"
              type="radio"
              value=" Female"
              ref={register({ required: true })}
            />
            Female
          </label>
          <label>
            <input
              name="Gender"
              type="radio"
              value=" Prefer not to say"
              ref={register({ required: true })}
            />
            Prefer not to say
          </label>
        </div>
        <span className="errors"> {errors.Gender && 'Please select one'}</span>
        <div className="flex">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
