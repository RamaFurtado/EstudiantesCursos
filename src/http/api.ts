import axios from "axios"
import { ICurso } from "../types/ICurso"

//URL de la API
const API_URL= import.meta.env.VITE_DB_URL


//Funcion para obtener la lista de cursos
export const getCursos = async() =>{
    try {
        const response = await axios.get<ICurso[]>(API_URL)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

