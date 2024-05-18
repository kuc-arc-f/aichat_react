import {useState, useEffect}  from 'react';
import React from 'react'

import Head from '../components/Head'
import LoadBox from '../components/LoadBox';
import { marked } from 'marked';
import CrudIndex from './Home/CrudIndex';
//
let answer: string = "";
let initDisplay = false;
//
function Home() {
  const [updatetime, setUpdatetime] = useState<string>("");

  /**
  *
  * @param
  *
  * @return
  */
  const sendText = async function(){
    try {
      initDisplay = true;
      answer = "";
      setUpdatetime(new Date().toString() + String(Math.random()));
      const result = await CrudIndex.addItem();
  console.log(result);
      initDisplay = false;
      if(result) { 
        const s = marked.parse(result);      
  console.log(s);
        //@ts-ignore 
        answer = s 
      } 
      setUpdatetime(new Date().toString() + String(Math.random()));
    } catch (error) {
      initDisplay = false;
      console.error(error);
    }    
  }
  /**
  *
  * @param
  *
  * @return
  */
  const clearText = async function(){
    try {
      const input_text = document.querySelector("#input_text") as HTMLInputElement;
      if(input_text){
        input_text.value = "";
      }
    } catch (error) {
      console.error(error);
    } 
  }
  //
  return (
  <>
    {initDisplay ? (<LoadBox />) : null}
    <div className="container mx-auto my-2 px-8 bg-white">
      <h1 className="text-4xl font-bold">AI-Chat!</h1>
      <hr className="my-2"></hr>
      <div className="flex flex-row">
        <div className="flex-1 text-center p-1">
          <textarea
          className="border border-gray-400 rounded-md px-3 py-2 w-full resize-none focus:outline-none focus:border-blue-500"
          name="input_text" id="input_text" rows="3" />
        </div>
        <div className="text-center pt-1">
          <button 
          className="bg-blue-600 text-white font-bold ms-2 py-2 px-4 rounded"
          onClick={()=>sendText()}>Send</button>
          <br />
          <button 
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ms-2 mt-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={()=>clearText()}>Clear</button>
        </div>
      </div>
      <hr className="my-2" />
      answer :<br />
      {answer ? (
        <div className="bg-sky-100 p-2 rounded"
        dangerouslySetInnerHTML={{ __html: answer}} />
      ) : null}
    </div>
  </>

  )
}

export default Home;