import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
      render(<Contact 
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
      
        expect(asFragment()).toMatchSnapshot();
      });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h1', () => {
    // Arrange
    const { getByTestId } = render(<Contact/>);
    // Assert  
    expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    })
  })  

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByTestId } = render(<Contact/>);
    // Assert  
    expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
  })  