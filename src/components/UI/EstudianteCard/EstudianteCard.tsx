import { IEstudiante } from '../../../types/IEstudiante';
import styles from './EstudianteCard.module.css';

type Props = {
  estudiante: IEstudiante;
};

export const EstudianteCard = ({ estudiante }: Props) => {
  return (
    <li className={styles.card}>
      <span className={styles.nombre}>{estudiante.nombre}</span>
      <span className={styles.edad}>{estudiante.edad} años</span>
    </li>
  );
};
