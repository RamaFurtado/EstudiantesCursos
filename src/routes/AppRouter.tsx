import { Routes, Route, Navigate } from 'react-router-dom';
import { CursosScreen } from '../components/screens/CursosScreen/CursosScreen';
import { EstudiantesScreen } from '../components/screens/EstudiantesScreen/EstudiantesScreen';


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirección desde raíz a /cursos */}
      <Route path="/" element={<Navigate to="/cursos" />} />

      {/* Rutas principales */}
      <Route path="/cursos" element={<CursosScreen />} />
      <Route path="/estudiantes" element={<EstudiantesScreen />} />
    </Routes>
  );
};
