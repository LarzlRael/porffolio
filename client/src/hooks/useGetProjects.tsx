import { useState, useEffect } from 'react';
import { ProjectsResponse } from '../interfaces/tec.interface';
import { getAllProjects, getAllProjectsByType } from '../services/projectsServices';


export const useGetProjects = () => {

    const [projectsState, seTprojectsState] = useState<ProjectsResponse[]>();
    const loadProjects = async () => {
        const data = await getAllProjects();
        seTprojectsState(data);
    }

    useEffect(() => {
        loadProjects();
    }, [])

    return { projectsState }
}

export const useGetProjectsByType = (type: string = 'web') => {

    const [projectsStateByType, seTprojectsState] = useState<ProjectsResponse[]>();
    const loadProjects = async () => {
        const data = await getAllProjectsByType(type);
        let arrayConvert = data.map((item) => {

            const splitString = item.urlImageProject.split('upload/');

            let resizeImage = `${splitString[0]}upload/c_scale,w_300/${splitString[1]}`
            return { ...item, urlImageProject: resizeImage, }
        });
        /* console.log(newArray); */

        /* console.log(data);resizeImage */
        seTprojectsState(arrayConvert);
    }

    useEffect(() => {
        loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { projectsStateByType }
}
