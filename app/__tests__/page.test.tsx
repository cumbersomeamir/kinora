import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock all components
jest.mock('@/components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Component</div>;
  };
});

jest.mock('@/components/AboutSection', () => {
  return function MockAboutSection() {
    return <div data-testid="about">About Section</div>;
  };
});

jest.mock('@/components/ServicesSection', () => {
  return function MockServicesSection() {
    return <div data-testid="services">Services Section</div>;
  };
});

jest.mock('@/components/ProcessSection', () => {
  return function MockProcessSection() {
    return <div data-testid="process">Process Section</div>;
  };
});

jest.mock('@/components/WhyChooseSection', () => {
  return function MockWhyChooseSection() {
    return <div data-testid="why-choose">Why Choose Section</div>;
  };
});

jest.mock('@/components/SecuritySection', () => {
  return function MockSecuritySection() {
    return <div data-testid="security">Security Section</div>;
  };
});

jest.mock('@/components/TestimonialsSection', () => {
  return function MockTestimonialsSection() {
    return <div data-testid="testimonials">Testimonials Section</div>;
  };
});

jest.mock('@/components/ContactSection', () => {
  return function MockContactSection() {
    return <div data-testid="contact">Contact Section</div>;
  };
});

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
    expect(screen.getByTestId('process')).toBeInTheDocument();
    expect(screen.getByTestId('why-choose')).toBeInTheDocument();
    expect(screen.getByTestId('security')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });
});


