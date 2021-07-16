import React, { Component, MouseEvent } from "react";
import { DataContext, IDataContext } from "./DataContext";



export default class Child extends Component{

    private OnChildTrigger=(event:MouseEvent,dataContext:IDataContext):void=>{
        dataContext.Data="Data from Child";
        dataContext?.OnChildTrigger!(dataContext?.Data);
        console.log(dataContext.Data);
    }

    public render(){
        return (
            <React.Fragment>
                <DataContext.Consumer>
                    {
                        (dataContext)=> dataContext && (
                            <div>
                                <h2>Child : {dataContext.Data}</h2>
                                <button className="btn btn-primary" onClick={(event:MouseEvent)=> this.OnChildTrigger(event,dataContext)}>Child Trigger</button>
                            </div>
                        )
                    }
                </DataContext.Consumer>
            </React.Fragment>
        )
    }
}