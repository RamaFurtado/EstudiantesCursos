import { FC } from 'react';
import { ICurso } from '../../../types/ICurso';
import styles from './CursoCard.module.css';
import { Link } from 'react-router-dom';

type Props = {
  curso: ICurso;
};

export const CursoCard: FC<Props> = ({ curso }) => {
  return (
    <div className={styles.containerCursoCard}>
      <h3>{curso.nombre}</h3>
      <p>Cantidad de estudiantes: {curso.estudiantes.length}</p>
      <Link to={`/estudiantes?curso=${curso.id}`}>Ver estudiantes</Link>
    </div>
  );
};
