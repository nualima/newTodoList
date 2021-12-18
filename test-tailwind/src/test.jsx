import React, { useState } from "react";
import './App.css';
export default function CardTemplate(props) {

var sectionStyle = {
  //backgroundImage: "url('PageTheme.jpg')", 
};



    return (
        <div className="bgi h-screen w-screen flex flex-col justify-center">
            <div 
               
                className="pl-8 bg-slate-200 shadow-xl ring-2 ring-gray-900/5 h-3/6 w-6/12 left-1/2 translate-x-1/2  bg-center bg-no-repeat bg-contain bg-book"
            >
                <img src={`${process.env.PUBLIC_URL}/blocNote.png`} alt="" class="absolute " width="100" />

                <div className=" ml-28 mt-8 text-align: left; font-mono text-3xl ">Todo-List</div>
            </div>
        </div>


    );

} 
