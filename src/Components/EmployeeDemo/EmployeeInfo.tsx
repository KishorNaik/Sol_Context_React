import React, { Component } from "react";
import { EmployeeContext } from "./EmployeeContext";
import EmployeeLocation from "./EmployeeLocation";



export default class EmployeeInfo extends Component{

    public render(){
        return (
            <React.Fragment>
                <h3>Employee Info</h3>
                
                <EmployeeContext.Consumer>
                    {
                        (employeeContext)=> employeeContext && (
                            <div>
                                <h5>Id : {employeeContext?.EmployeeData?.Id!}</h5>
                                <h5>Name : {employeeContext?.EmployeeData?.Name!}</h5>

                                {/* <EmployeeLocation></EmployeeLocation> // Nested Component also applicable */} 
                            </div>
                        )
                    }
                </EmployeeContext.Consumer>
            </React.Fragment>
        )
    }
}