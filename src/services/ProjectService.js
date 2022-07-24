import { projects } from "../__mocks__/projects";
import { validateInputs } from "../components/utilities/validation";
import projectStatuses from "src/constants/projectStatuses";

/**
 * @class ProjectService
 */
export default class ProjectService{
    
/**
 * @function createProject - This function creates a new project row and appends to Project Table
 * @param {Object} projectObject - This is a project object that will be appended in Project Table
 * @return {Object}  - This function returns created project itself 
 * @throw  {Error} 
 * @async
 */
    async createProject(projectObject){
        
        if( Object.values(projectObject).every ( x => x) && !validateInputs( projectObject ) ){
            if(!Object.values(projectObject).includes('status')){
                projectObject.status = projectStatuses.NEXT
                projectObject.progress = 0
            }
             projects.push(projectObject);
                return projectObject;
        }
        else {
            throw new Error("Invalid Properties");
        }
    }

/**
 * @function updateProject - This function updates existing project's value or values
 * @param {Object} projectObject - This is a project in Project Table that will be updated with incoming object 
 * @param {Object} newObjectVal - This is new project value of existing project in Project Table that will be replaced with old value
 * @async
 */
    async updateProject(projectObject , newObjectVal){
        if( Object.values(projectObject).every ( x => x) ){

            projects.forEach( project => {
                
                if(project.id === newObjectVal.id) {
                    project.project_name = newObjectVal.project_name;
                    project.project_name = newObjectVal.project_name;
                    projects.status = newObjectVal.status
                }
                console.log("projects UPDATE:",projects)
            })

        }       
    }
/**
 * @function deleteProject - This function removes project or projects from table
 * @param {Array} projectsArray - This array contains ids that will be removed from table
 * @async 
 */
    async deleteProject( projectsArray ){
        if(projectsArray && projectsArray.length > 0){

            let ids ;
            let indexOfDelete; 
            
            projectsArray.forEach( projectId => {
                ids = projects.map( project => project.id);
                indexOfDelete = ids.indexOf(projectId);
                projects.splice(indexOfDelete , 1)
            })
            
        }   
        else{
            alert("There is not selected projects to delete")
        }
    }

/**
 * @function checkById - This function controls that project id exists or not.
 * @param {Number} projectId - This is an id of project  
 * @returns {Boolean} - This project id exists or not
 * @async
 */
    async checkById(projectId){
        try{
            let parsedProjectId = parseInt(projectId );
            if(!parsedProjectId){
                let value = projects.find( project => project.id === projectId)
                console.log("value: ",value)
                return value;
            }
        }
        catch(error){
            console.log("Error in ProjectService.checkById() :",error);
        }
        

    }

    /**
 * @function byId - This function returns project that has projectId which is specified in parameter.
 * @param {Number} projectId - This is an id of project  
 * @returns {Object} - Project Object
 * @async
 */
     async byId(projectId){
        let project = projects.find( project => project.id === projectId)
        console.log("project in byid",project);
        
        return project ;
        
    }
}