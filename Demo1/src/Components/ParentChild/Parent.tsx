import React, { Component, MouseEvent } from "react";
import Child from "./Child";
import { DataContext } from "./DataContext";

interface IParentPropsParameter{

}

interface IParentState{
    ParentData?:string | undefined
}

export default class Parent extends Component<IParentPropsParameter,IParentState>{

    constructor(props:IParentPropsParameter){
        super(props);

        this.state={
            ParentData:"Data from Parent (Default)"
        };
    }

    private OnParentTrigger=(event:MouseEvent):void=>{
        this.setState({
            ParentData: 'Data from Parent'
        });
    }

    public render(){
        return (
            <React.Fragment>
                <DataContext.Provider value={
                    {
                        Data:this.state.ParentData,
                        OnChildTrigger:(data:string):void=>{
                            this.setState({
                                ParentData:data
                            });
                        }
                    }
                }>
                    <h3>Parent: {this.state.ParentData}</h3>
                    <button className="btn btn-secondary" onClick={this.OnParentTrigger}>Parent Trigger</button>
                    <Child></Child>

                </DataContext.Provider>
            </React.Fragment>
        )
    }

}