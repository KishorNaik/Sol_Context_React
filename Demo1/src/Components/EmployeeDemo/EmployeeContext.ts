import React from "react";

 interface IEmployeeData{
    Id?:number|undefined;
    Name?:string | undefined;
    Location?:string | undefined;
    Salary?:number | undefined;
}

interface IEmployeeChangeInfo{
    ChangeInfo:()=>void;
}

export interface IEmployeeContext{
    EmployeeData?:IEmployeeData | undefined;
    ChangeEmployeeInfo?:IEmployeeChangeInfo | undefined
}


export const EmployeeContext=React.createContext<IEmployeeContext | null>(null);