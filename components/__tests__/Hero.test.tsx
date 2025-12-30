import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText('Empowering Your Data Entry Success')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Reliable • Accurate • Secure/)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Get a Free Quote')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('has correct link hrefs', () => {
    render(<Hero />);
    const quoteLink = screen.getByText('Get a Free Quote').closest('a');
    const learnLink = screen.getByText('Learn More').closest('a');
    expect(quoteLink).toHaveAttribute('href', '/contact');
    expect(learnLink).toHaveAttribute('href', '/about');
  });
});

