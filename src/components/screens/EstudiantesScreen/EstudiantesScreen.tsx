import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IEstudiante } from '../../../types/IEstudiante';
import { ICurso } from '../../../types/ICurso';
import axios from 'axios';
import styles from './EstudiantesScreen.module.css';
import { EstudianteCard } from '../../UI/EstudianteCard/EstudianteCard';

export const EstudiantesScreen = () => {
  //Obtenemos los parametros de la URL
  const [searchParams] = useSearchParams();
  const cursoId = searchParams.get('curso');
  //Guardamos los estudiantes
  const [estudiantes, setEstudiantes] = useState<IEstudiante[] | null>(null);
  const [cursoNombre, setCursoNombre] = useState<string | null>(null);
//Cargamos los datos
  useEffect(() => {
    if (cursoId) {
      axios
        .get<ICurso>(`http://localhost:3000/cursos/${cursoId}`)
        .then((res) => {
          setEstudiantes(res.data.estudiantes);
          setCursoNombre(res.data.nombre);
        })
        .catch(() => {
          setEstudiantes(null);
          setCursoNombre(null);
        });
    }
  }, [cursoId]);

  if (!cursoId) {
    return <p>⚠️ No se seleccionó ningún curso. Volvé a la lista.</p>;
  }
//Agregado de carga de estudiantes
  if (estudiantes === null) {
    return <p>Cargando estudiantes...</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Estudiantes del curso: {cursoNombre}</h2>
      <ul className={styles.list}>
        {estudiantes.map((e) => (
            <EstudianteCard key={e.id} estudiante={e} />
        ))}
      </ul>
    </div>
  );
};
