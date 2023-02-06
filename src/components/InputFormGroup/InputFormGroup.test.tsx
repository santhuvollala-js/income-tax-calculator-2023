import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputFormGroup from './InputFormGroup';

describe('<InputFormGroup />', () => {
  test('it should mount', () => {
    render(<InputFormGroup name={''} />);
    
    const inputFormGroup = screen.getByTestId('InputFormGroup');

    expect(inputFormGroup).toBeInTheDocument();
  });
});