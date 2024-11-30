import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import  './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  </StrictMode>
);
