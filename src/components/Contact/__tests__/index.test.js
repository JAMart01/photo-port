import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";



afterEach(cleanup);

describe('ContactForm component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)

        expect(asFragment()).toMatchSnapshot();
    });

    it('has Contact Me in h1 element', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('h1')).toHaveTextContent('Contact Me')
    });

    it('button has Submit text content', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    });

});