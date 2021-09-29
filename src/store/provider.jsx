import React, { Children, useState } from 'react';
import Context from './context';


const Provider = ({Children}) => {

    const [token, setToken] = useState('token');

    return (
        <Context.Provider>
            {token,setToken}
            {Children}
        </Context.Provider>
    )
}

export default Provider;