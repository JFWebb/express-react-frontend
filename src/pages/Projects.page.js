import {useState, useEffect} from 'react';

function ProjectsPage(props) {
    // create state to hold projects
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");

        const data = await response.json();

        setProjects(data);
    }

    useEffect(() => {
        getProjectsData();
    }, []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} width="200px"/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>;
}

export default ProjectsPage;