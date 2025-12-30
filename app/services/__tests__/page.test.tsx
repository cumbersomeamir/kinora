import { render, screen } from '@testing-library/react';
import ServicesPage from '../page';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Services Page', () => {
  it('renders the main heading', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('renders all service titles', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Data Entry & Data Processing')).toBeInTheDocument();
    expect(screen.getByText('Form Filling & Data Digitization')).toBeInTheDocument();
    expect(screen.getByText('Document, PDF & Image Data Conversion')).toBeInTheDocument();
    expect(screen.getByText('Database Creation & Management')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Get a Free Quote')).toBeInTheDocument();
  });
});

