import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputForm from './InputForm';

describe('<InputForm />', () => {
  test('it should mount', () => {
    render(<InputForm />);
    
    const inputForm = screen.getByTestId('InputForm');

    expect(inputForm).toBeInTheDocument();
  });
});