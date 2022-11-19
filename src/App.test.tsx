import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
test('Render App', () => {
  render(<App />);

  const applicationHeading = screen.getByTestId("task-list-heading");
  const addItemsHeading = screen.getByTestId("add-items-heading");
  const containerApp = screen.getByTestId("container-app");

  expect(applicationHeading).toBeVisible();
  expect(addItemsHeading).toBeVisible();
  expect(containerApp).toBeVisible();


});


