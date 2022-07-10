import React from 'react';

const CountPoblation = ({location}) => {
    return (
        <div className='containerCountPoblation'>
                  {location.residents?.length === 0 && "No one lives in this dimension"}

        </div>
    );
};

export default CountPoblation;