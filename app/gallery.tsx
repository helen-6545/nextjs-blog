'use client';
import React from "react";
import Home from './page'
import {pics} from './page'
let state = 0








export default function gallery(props: any){

const [image, setImage] = React.useState("/pictures/craneIllustrationResized.jpg");

function Previous(){
    state=state-1
    if(state==-1){
        state=3
    }
    setImage(pics[state])
    console.log({image})
}

function Next(){
    state=state+1
    if(state==4){
        state=0;
    }
    setImage(pics[state])
    console.log({image})
    
}

    return(<div>
        
        <button onClick={Previous}>Previous</button>
        <button onClick={Next}>Next</button>

        <img src = {image}/>
        
    </div>)


}

