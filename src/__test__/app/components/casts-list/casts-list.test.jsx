import { render, screen, waitFor } from '@testing-library/react';
import CastsList from '../../../../app/components/casts-list/casts-list';

describe('CastsList tests', () => {
  test('renders the casts table name column', () => {
    render(<CastsList />);
    return waitFor(() => {
      expect(screen.getByText(/Name/i)).toBeInTheDocument();
    });
  });

  test('renders the casts table vehicles column', () => {
    render(<CastsList />);
    return waitFor(() => {
      expect(screen.getByText(/Vehicles/i)).toBeInTheDocument();
    });
  });
});
