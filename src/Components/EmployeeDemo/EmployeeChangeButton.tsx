import React, { Component, MouseEvent } from "react";
import { EmployeeContext, IEmployeeContext } from "./EmployeeContext";

export default class EmployeeChangeButton extends Component{


    private ChangeEmployeeInfo=(event:MouseEvent, employeeContext:IEmployeeContext):void=>{
        console.log("Click");
        employeeContext?.ChangeEmployeeInfo?.ChangeInfo();
    }

    public render(){
        return (
            <React.Fragment>

                <EmployeeContext.Consumer>
                    {
                        (employeeContext)=> employeeContext && (
                            <div>
                                <button className="btn btn-primary" onClick={(event:MouseEvent)=> this.ChangeEmployeeInfo(event,employeeContext)}>Change Info</button>
                            </div>
                        )
                    }
                </EmployeeContext.Consumer>

                
            </React.Fragment>
        )
    }
}