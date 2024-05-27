import React from 'react';
import { render, screen,  } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should render input field', () => {
    render(
      <Input
        label='Test Label'
        type='text'
        name='test'
        handleChange={() => {}}
        defaultValue=''
        disabled={false}
      />
    );

    const inputField = screen.getByTestId('input-test');
    expect(inputField).toBeInTheDocument();

  });
});
