import { screen, render, act} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { getClientList } from './app/endpoints';

jest.mock('./app/endpoints', () => ({
  ...jest.requireActual<any>('./app/endpoints'),
  getClientList: jest.fn(),
}));

test('renders learn react link', () => {
  jest.mocked(getClientList).mockImplementation(() => Promise.resolve([]));
  act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  expect(screen.getByText(/Clients/i)).toBeInTheDocument();
});
