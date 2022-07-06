import { render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// additional tests
const validator = require('email-validator');

test('Correct email format validates', () => {
  let email = "test@mail.com"
  expect(validator.validate(email)).toEqual(true)
})

test('email without @ does not validate', () =>{
  let email = "test.com"
  expect(validator.validate(email)).not.toEqual(true)
})

test('email without .com does not validate', () =>{
  let email = "test@mail"
  expect(validator.validate(email)).not.toEqual(true)
})

const RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8}/;

test('password requires uppercase', () => {
  let password = "qwerty@1"
  expect(RegExp.test(password)).toEqual(false)
})

test('password requires lowercase', () => {
  let password = "QWERTY@1"
  expect(RegExp.test(password)).toEqual(false)
})

test('password requires special characters', () => {
  let password = "qwertYQ1"
  expect(RegExp.test(password)).toEqual(false)
})

test('password requires Numbers', () => {
  let password = "qwertYQ@"
  expect(RegExp.test(password)).toEqual(false)
})

test('password minimum Length is 8', () => {
  let password = "qwert@"
  expect(RegExp.test(password)).toEqual(false)
})

test('password must not be empty', () => {
  let password = " "
  expect(RegExp.test(password)).toEqual(false)
})