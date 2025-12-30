import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Header Component', () => {
  it('renders the Kinora logo', () => {
    render(<Header />);
    expect(screen.getByText('Kinora')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Kinora')).toBeInTheDocument();
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Get Started button', () => {
    render(<Header />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('has correct logo styling', () => {
    render(<Header />);
    const logo = screen.getByText('Kinora');
    expect(logo).toHaveClass('text-[#B11217]');
  });
});

