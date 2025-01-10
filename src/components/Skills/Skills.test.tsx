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

  it('通常時、ログインボタンが表示されている', () => {
    render(<Skills skills={skills} />);
    const loginElement = screen.getByRole('button', {
      name: 'ログイン',
    });
    expect(loginElement).toBeInTheDocument();
  });

  it('1500ms秒後、ログアウトボタンが表示される', async () => {
    render(<Skills skills={skills} />);
    const logoutElement = await screen.findByRole(
      'button',
      {
        name: 'ログアウト',
      },
      {
        timeout: 2000,
      }
    );
    expect(logoutElement).toBeInTheDocument();
  });
});
