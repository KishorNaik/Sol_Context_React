import React, { Component } from "react";
import EmployeeChangeButton from "./EmployeeChangeButton";
import { EmployeeContext, IEmployeeContext } from "./EmployeeContext";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeLocation from "./EmployeeLocation";
import EmployeeSalary from "./EmployeeSalary";

interface IEmployeeProps{

}

interface IEmployeeState extends IEmployeeContext{
   
}

export default class Employee extends Component<IEmployeeProps,IEmployeeState>{

    constructor(props:IEmployeeProps){
        super(props);

        this.state={
            EmployeeData:{
                Id:101,
                Name:"Kishor Naik",
                Location:"Mumbai",
                Salary:1000
            },
            ChangeEmployeeInfo:{
                // ChangeInfo:():void=>{
                //     console.log("Change info");
                // }
                ChangeInfo:this.ChangeEmployeeInfo
            }            
        };
    }

    private ChangeEmployeeInfo=():void=>{
       this.setState((prevState)=>({
           EmployeeData:{
               Id:102,
               Name:prevState?.EmployeeData?.Name,
               Location:prevState?.EmployeeData?.Location,
               Salary:prevState?.EmployeeData?.Salary
           }
       }));
    }

    public render(){
        return (
            <React.Fragment>
                <h2>Employee Component</h2>

                <EmployeeContext.Provider value={this.state}>
                    <EmployeeInfo></EmployeeInfo>
                    <EmployeeLocation></EmployeeLocation>
                    <EmployeeSalary></EmployeeSalary>
                    <EmployeeChangeButton></EmployeeChangeButton>
                </EmployeeContext.Provider>

            </React.Fragment>
        )
    }
}