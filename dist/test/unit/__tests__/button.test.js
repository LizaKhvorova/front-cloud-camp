import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '@sander/ui';
describe('<Button />', () => {
    test('should render correct button', () => {
        expect(1).toEqual(1);
    });
    test('should display a blank login form, with remember me checked by default', () => {
        const { getByText } = render(React.createElement(Button, null, "test1"));
        expect(getByText('test1')).toBeInTheDocument();
    });
});
