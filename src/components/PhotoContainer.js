import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import apiKey from '../config';
import Photo from './Photo';
import NotFound from './NotFound';


function PhotoContainer(props) {

    //Get query from URL params
    const {query}  = useParams();

    //Initiate images state
    const [images, setImages] = useState([]);
    //Initiate loading state
    const [loading, setLoading] = useState([true]);
    
    // if the query state doesn't match the URL param, update the Query state to the param
    // and update page Title
    if(props.query !== query){
        props.updateQuery(query);
        document.title = `Photos of ${query}`;
    }   

    //Get images from Flickr every time the query in the url is updated
    useEffect(()=>{
        async function fetchData(){
            if(props.query!== undefined){
                const apiURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&extras=url_m&tags=${props.query}&per_page=24&format=json&nojsoncallback=1`;
                const req = await axios.get(apiURL);
                //Update image state to returned images
                setImages(req.data.photos.photo)
                //Update loading state since results were return
                setLoading(false);
            }
        }
            fetchData()
    }, [props.query]);

    // check if there are resulting images otherwise render Page Not Found Component
    const checkIfResults = ()=>{
        //if page is loading
        if(loading){
            return <h2>Loading...</h2> 
        }
        //if there are image results
        else if(props.query && images.length> 0 ){
            console.log(props.query);
            //Iterate over returned images and render Photo component for each
            return images.map(image => <Photo key= {image.id} url= {image.url_m} alt={image.title}/>)
        }
        else{
            return <NotFound />
        }
    }

    return (
        
        <div className="photo-container">
        
        <h2>You Searched For: {query}</h2>
        
            <ul>
                { checkIfResults() }
            </ul>

        
        </div>
    )
}

export default PhotoContainer
