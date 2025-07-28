import React,{useState} from "react";
import {FaLaptopCode,FaRobot,FaServer} from "react-icons/fa";
import {BsPeople} from "react-icons/bs";

const skillCategories =[
  {title:"Ai & ml expertise",
    icon:<FaRobot/>,
    skills:["llms","rag","chatbots","nlp","tensorflow","pytorch"],
    color:"bg-teal-500",
  },
  {title:"Ai & ml expertise",
    icon:<FaRobot/>,
    skills:["llms","rag","chatbots","nlp","tensorflow","pytorch"],
    color:"bg-teal-500",
  },
]

export  default function About() {
  const [form,setForm]=useState({
    firstname:"",
    lastname:"",
    company:"",
    email:"",
    phone:"",
    message:"",
  });
  const handleChange=(e)=>{
    const{name,value,type,checked}=e.target;
    setForm({...form,[name]:type==="checkbox"?checked:value});
  };
    return (
        <div className="text-center text-gray-500 mt-20 text-xxl">
         About
        </div>
    )
}