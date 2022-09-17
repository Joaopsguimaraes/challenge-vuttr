import { Route, Routes } from 'react-router-dom';

import { Default } from '../layout';
import { CreateTool } from '../pages/CreateTool';
import { Home } from '../pages/Home';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTool />} />
        <Route path="/view/:id" element={<CreateTool />} />
        <Route path="/edit/:id" element={<CreateTool />} />
      </Route>
    </Routes>
  );
}
