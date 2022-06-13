import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import SettingsPage from './components/pages/SettingsPage';

import './App.scss';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
