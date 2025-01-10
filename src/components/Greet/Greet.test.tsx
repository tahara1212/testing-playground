import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

describe('挨拶コンポーネントのテスト', () => {
  it('挨拶が正常にレンダリングされる', () => {
    render(<Greet />);
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument();
  });

  it('挨拶と名前が正常にレンダリングされる', () => {
    render(<Greet name="tahara" />);
    const testElement = screen.getByText(/hello tahara/i);
    expect(testElement).toBeInTheDocument();
  });
});
