import React, { useRef, useState } from 'react';
import Button from '../Button/Button';

import './Form.css'

const isEmpty = (value: string | undefined) => {
    if (!value) return true;
    else return value.trim().length === 0;
}

const Form = (props: any) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const birthInput = useRef<HTMLInputElement>(null);
  const firstCrimeInput = useRef<HTMLInputElement>(null);
  const coopInput = useRef<HTMLInputElement>(null);
  const genderSelect = useRef<HTMLSelectElement>(null);

  const [inputsValidity, setInputsValidity] = useState({
    firstName: true,
    lastName: true,
    birthdate: true
  });

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const enteredName = nameInput?.current?.value;
    const enteredLastName = lastNameInput?.current?.value;
    const enteredBirthday = birthInput?.current?.value;
    const enteredFirstCrime = firstCrimeInput?.current?.checked ? true : false;
    const enteredCoop = coopInput?.current?.value === 'on' ? true : false;
    const enteredGender = genderSelect?.current?.value;

    const nameIsValid = !isEmpty(enteredName);
    const lastNameIsValid = !isEmpty(enteredLastName);
    const birthdateIsValid = !isEmpty(enteredBirthday);

    setInputsValidity({
        firstName: nameIsValid,
        lastName: lastNameIsValid,
        birthdate: birthdateIsValid
      });
  
      const formIsValid = nameIsValid && lastNameIsValid && birthdateIsValid;
  
      if (!formIsValid) {
        return;
      }

      props.onSubmit({
        firstName: enteredName,
        lastName: enteredLastName,
        birthdate: enteredBirthday,
        gender: enteredGender,
        firstCrime: enteredFirstCrime,
        cooperation: enteredCoop
    });
  }

  const handleCancelForm = (e: any) => {
    e.preventDefault();
    props.onClose();
  }

  return (
    <section className="input-form">
      <form onSubmit={handleSubmitForm}>
        <div className="row">
          <div className="block">
            <label htmlFor="first-name">First name: </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={nameInput}
            />
            {!inputsValidity.firstName && <p className="error-msg">Enter first name</p>}
          </div>
          <div className="block">
            <label htmlFor="last-name">Last name: </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              ref={lastNameInput}
            />
            {!inputsValidity.lastName && <p className="error-msg">Enter last name</p>}
          </div>
        </div>
        <div className="row">
          <div className="block">
            <label htmlFor="birthday">Date of birth: </label>
            <input type="date" id="birthday" ref={birthInput} />
            {!inputsValidity.birthdate && <p className="error-msg">Enter birthdate</p>}
          </div>
          <div className="block">
            <label htmlFor="gender">Gender: </label>
            <select id="gender" ref={genderSelect}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="block">
            <label htmlFor="is-first">Is it criminal's first crime?</label>
            <input type="checkbox" id="is-first" ref={firstCrimeInput} />
          </div>
          <div className="block">
            <label htmlFor="is-cooperative">
              Is criminal ready to cooperate with police?
            </label>
            <input type="checkbox" id="is-cooperative" ref={coopInput}/>
          </div>
        </div>
        <div className="row">
          <Button text="Submit" style="dark-btn" type="submit" />
          <Button
            text="Cancel"
            style="light-btn"
            type="reset"
            onAction={handleCancelForm}
          />
        </div>
      </form>
    </section>
  )
}

export default Form
