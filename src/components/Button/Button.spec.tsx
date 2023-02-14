import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render in primary colour and medium size by default', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
