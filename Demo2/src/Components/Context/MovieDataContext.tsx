import React from "react";

export interface IMovieDataContextState{
    Name?:string | undefined;
};

export interface IMovieDataContextSetState{
    SetMovieState?:(state:IMovieDataContextState)=>void
};

export type IMovieDataContext= IMovieDataContextState & IMovieDataContextSetState;

export const MovieDataContext=React.createContext<IMovieDataContext| null>(null);