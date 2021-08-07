import React from "react";

 export interface IDataContext{
    Data?:string | undefined,
    OnChildTrigger?:(data:string)=>void
 }


export const DataContext=React.createContext<IDataContext | null>(null);