import axios from 'axios';
import React from 'react';
import Personaje from './ResidentInfo';

const ResidentList = ({location}) => {
    
    return (
    
        <div className='ResidentList'>
            {location?.residents?.map((url)=>(
                <Personaje url={url} key={url}/>
            ))}
            
        </div>
        
    );
};

export default ResidentList;