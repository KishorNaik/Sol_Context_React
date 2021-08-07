import React, { Component } from "react";
import { IMovieDataContext, IMovieDataContextSetState, IMovieDataContextState, MovieDataContext } from "./MovieDataContext";

interface IMovieProviderProps{

}

interface IMovieProviderState extends IMovieDataContextState{
}

export default class MovieProvider extends Component<IMovieProviderProps,IMovieProviderState>{

    constructor(props:IMovieProviderProps){
        super(props);

        this.state={
            Name:"The Matrix"
        };   
    }

    private SetMovieState=():IMovieDataContext=>{

        let mainMovieDataContext:IMovieDataContext={
            Name:this.state.Name,
            SetMovieState:(data:IMovieDataContextState)=>{
                this.setState({
                    Name:data.Name
                });
            }
        }

        return mainMovieDataContext;

    }



    public render(){
        return (
            <React.Fragment>
                <MovieDataContext.Provider value={this.SetMovieState()}>
                    {this.props.children}
                </MovieDataContext.Provider>
            </React.Fragment>
        )
    }

}