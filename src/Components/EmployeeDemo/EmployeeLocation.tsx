import React, { Component } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default class EmployeeLocation extends Component{

    public render(){
        return (
            <React.Fragment>
                 <h3>Employee Location</h3>
                <EmployeeContext.Consumer>
                    {
                        (employeeContext)=> employeeContext && (

                            <div>
                                <h5>Location : {employeeContext?.EmployeeData?.Location!}</h5>
                            </div>

                        )
                    }
                </EmployeeContext.Consumer>
            </React.Fragment>
        )
    }

}