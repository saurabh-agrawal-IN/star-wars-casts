import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ActionBar from '../../../../app/components/action-bar/action-bar';
import AppContextProvider from '../../../../app/common/context/app-context-provider';

describe('Searchbar tests', () => {
  test('should search when something typed in Searchbar', () => {
    render(
      <AppContextProvider>
        <ActionBar />
      </AppContextProvider>
    );
    const textInput = screen.getByRole('textbox');
    fireEvent.change(textInput, {
      target: { value: 'Beru' },
    });
    return waitFor(() => {
      expect(textInput.value).toBe('Beru');
    });
  });
});
