import React, { Component, useContext } from "react";
import  { Route, Redirect } from 'react-router-dom';
import Context from "../context";

const Private = ({component: Component, ...rest}) => {
    const {token} = useContext(Context);



    return (
        <Route>
            {... rest}
            render={() => token 
            ? <Component {...rest}></Component>
            : <Redirect to="/index"></Redirect>
            }
        </Route>
    )

}



export default Private;