import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
})

test('renders header text', () => {

  const heading  = screen.getByRole('heading', { name: /toast exercise/i});
  expect(heading).toBeInTheDocument();
});


test('creates a single toast', async () => {

  const submissionButton = screen.getByTestId('submission-button')
  submissionButton.click()

  const alertsList = await screen.findAllByTestId('alert')
  expect(alertsList.length).toBe(1)
})

test('creates a three toasts', async () => {

  const submissionButton = screen.getByTestId('submission-button')
  submissionButton.click()
  submissionButton.click()
  submissionButton.click()

  const alertsList = await screen.findAllByTestId('alert')
  expect(alertsList.length).toBe(3)
})

test('can dismiss an alert', async() => {
  const submissionButton = screen.getByTestId('submission-button')
  submissionButton.click()

  screen.getByTestId("dismiss-button").click()
  const alertsList = await screen.queryAllByTestId('alert')
  expect(alertsList.length).toBe(0)
})

test('like button will dismiss an alert', async() => {
  const submissionButton = screen.getByTestId('submission-button')
  submissionButton.click()

  screen.getByTestId("like-button").click()
  const alertsList = await screen.queryAllByTestId('alert')
  expect(alertsList.length).toBe(0)
})