
import React from 'react';
import { render } from '@testing-library/react';
import PostTitle from '../components/post-title';

test('Encontrar um elemento por class do contentful', () => {
  const { getByTestClass } = render(<PostTitle />);
  
  const elements = document.querySelectorAll('.text-6xl');

  expect(elements.length).toBeGreaterThan(0); 
});