import { serverAPI } from '../api/server';
import { ProjectsResponse } from '../interfaces/tec.interface';


export const getAllProjects = async (): Promise<ProjectsResponse[]> => {
    const { data } = await serverAPI.get<ProjectsResponse[]>(`/projects`);
    return data;
}

export const getAllProjectsByType = async (type: string): Promise<ProjectsResponse[]> => {
    const { data } = await serverAPI.get<ProjectsResponse[]>(`/projects/${type}`);
    return data;
}