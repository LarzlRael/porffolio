
export interface Tec {
    name: string;
    imageRoute: string;
}
export interface MyProjects {
    name: string;
    urlWeb: string;
    urlImage: string;
    tecnologies: string;
}
export interface ProjectsResponse {
    _id:             string;
    projectType:     string;
    name:            string;
    urlProject:      string;
    urlImageProject: string;
    repositoryUrl:   string;
    technologies?:   string;
}
