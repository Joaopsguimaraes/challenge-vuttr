import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './setup/routes';

export function App() {
  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          position: 'top-right',
          success: {
            style: {
              padding: '10px 20px',
              width: 320,
              background: '#22c55e',
              fontSize: '1rem',
              color: '#22222'
            }
          },
          error: {
            style: {
              padding: '10px 20px',
              width: 320,
              background: '#EF4444',
              color: '#222222',
              fontSize: '1rem'
            }
          }
        }}
      />
      <AppRouter />
    </BrowserRouter>
  );
}