import { render, screen } from '@testing-library/react';
import PersonelList from '../pages/PersonelList'

test('button pagination previous', () => {
    render(<PersonelList />);

    const buttonPrev = screen.getByRole("button")
    expect(buttonPrev).toHaveTextContent("Previous")
})