import React, { Component } from "react";
import { IMovieDataContext, IMovieDataContextState, MovieDataContext } from "../Context/MovieDataContext";


export default class Movie extends Component{

   private ChangeStateButtonHandler=(dataContext:IMovieDataContext):void=>{
        dataContext?.SetMovieState!({
            Name:"Sapcejam"
        });
   }

    public render(){
        return (
            <React.Fragment>
                <MovieDataContext.Consumer>
                    {
                        (datacontext)=> datacontext && (
                            <React.Fragment>
                                <div>
                                    <span>Movie Name : {datacontext.Name}</span>
                                    <button className="btn btn-dark" onClick={()=> this.ChangeStateButtonHandler(datacontext)}>Change State</button>
                                </div>
                            </React.Fragment>
                        )
                    }
                </MovieDataContext.Consumer>
            </React.Fragment>
        )
    }

}