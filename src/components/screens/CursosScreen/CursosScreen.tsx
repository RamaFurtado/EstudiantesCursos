import { useEffect, useState } from 'react';
import { getCursos } from '../../../http/api';
import { CursoCard } from '../../UI/CursoCard/CursoCard';
import { ICurso } from '../../../types/ICurso';
import styles from './CursosScreen.module.css';

export const CursosScreen = () => {
  // Guardamos la lista de cursos en un estado
  const [cursos, setCursos] = useState<ICurso[]>([]);

  // Obtenemos la lista de cursos de la API
  const handleGetCursos = async () => {
    const response = await getCursos();
    if (response) setCursos(response);
  };

  
  useEffect(() => {
    handleGetCursos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de cursos</h1>
      <div className={styles.grid}>
        {cursos.map((curso) => (
          <CursoCard key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
};
