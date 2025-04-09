import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CursosScreen } from './components/screens/CursosScreen/CursosScreen';
import { EstudiantesScreen } from './components/screens/EstudiantesScreen/EstudiantesScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cursos" />} />
        <Route path="/cursos" element={<CursosScreen />} />
        <Route path="/estudiantes" element={<EstudiantesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
