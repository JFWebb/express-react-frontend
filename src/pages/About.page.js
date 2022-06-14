import {useState, useEffect} from 'react';

function AboutPage(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null);

    //  create function to make the API call
    const getAboutData = async () => {

        // make api call and get response
        const response = await fetch(props.URL + 'about');

        // turn response into javascript object
        const data = await response.json();

        // set the baout state to the data
        setAbout(data);
    }

    // make initial call for the data inside a useEffect so it only happens once on intial load
    useEffect(() => {
        getAboutData();
        // eslint-disable-next-line 
    }, []);

    // define ternary that will return JSX once loaded 
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    // if data loades, return loaded, other wise send text that says loading
    return about ? loaded() : <h1>Loading</h1>;

}

export default AboutPage