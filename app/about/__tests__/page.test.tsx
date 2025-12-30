import { render, screen } from '@testing-library/react';
import AboutPage from '../page';

describe('About Page', () => {
  it('renders the main heading', () => {
    render(<AboutPage />);
    expect(screen.getByText('About Kinora')).toBeInTheDocument();
  });

  it('renders section headings', () => {
    render(<AboutPage />);
    const headings = screen.getAllByText('Who We Are');
    expect(headings.length).toBeGreaterThan(0);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText('Our Expertise')).toBeInTheDocument();
  });

  it('contains company description', () => {
    render(<AboutPage />);
    const descriptions = screen.getAllByText(/professional data entry and information services company/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });
});

