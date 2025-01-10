import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'JavaScript', 'CSS'];
  it('ul 要素が表示される', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('それぞれのリストが表示される', () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(skills.length);
  });
});
