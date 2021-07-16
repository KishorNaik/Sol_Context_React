import React, { Component } from "react";
import { EmployeeContext } from "./EmployeeContext";

export default class EmployeeSalary extends Component{

    public render(){
        return (
            <React.Fragment>
                <h3>Employee Salary</h3>
                <EmployeeContext.Consumer>
                    {
                        (employeeContext)=> employeeContext && (
                            <div>
                                <h5>Salary : {employeeContext?.EmployeeData?.Salary!}</h5>
                            </div>
                        )
                    }
                </EmployeeContext.Consumer>
            </React.Fragment>
        )
    }
}