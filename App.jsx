import React from 'react'
import{useState} from 'react'
import axios from 'axios'
import {LoaderCircle} from 'lucide-react'
function App() {
const [textInput, setTextInput]=useState("")
const [selectValue, setSelectValue]=useState("")
const [result,setresult]=useState("")
const [loading,setloading]=useState(false)

console.log(textInput);
console.log(selectValue);

const handleTextTranslation=async()=>{
  setloading(true)
  try{
const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': 'fdb983d7c3msh539e400f145fc29p190030jsne273674e81ec',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: '${textInput}',
    source: 'en',
    target: '${selectValue}',
    format: 'text'
  }
};
const responce=await axious.request(options);
setloading(false)
console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText);
setresult(response?.data?.data?.translations?.[Number(0)]?.translatedText)

  }
  catch(error){
    setloading(false)
    console.log(error?.data);
  }
}
  return (
    <div className='h-screen w-screen bg-amber-50'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <h1 className='text-3xl font-bold'>
          English Translator
        </h1>

        <div className='flex items-center justify-center flex-col gap-2  rounded-'>
          <textarea name="input-text" className='bg-white h-30 w-70 text-lg px-2 py-2 border-2 rounded-3xl '
          onChange={(e)=> setTextInput(e.target.value)}/>
          <textarea name="input-text" className='bg-white h-30 w-70 text-lg px-2 py-2 border-2 rounded-3xl'
          value={result} readOnly/>
        </div>
        <div>
          <label htmlFor="options" className='font-bold'>CONVERTED INTO:  </label>
          <select name="value" className='bg-yellow-900 text-white px-2 py-1 rounded-lg cursor-pointer'
          onChange={(e) => setSelectValue(e.target.value)}>
            <option value="1">select</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="bn">Bengali</option>
            <option value="te">telgu</option>
            <option value="gr">Gujarati</option>
          </select>
        </div>
      
          <button className='cursor-pointer bg-slate-400 rounded-lg text-slate-200  px-2 py-2 font-bold flex items-center justify-center'
          onClick={handleTextTranslation}>
         {
          loading? (<LoaderCircle className='animate-spin'/>): "TRANSLATE"
         }
          </button>
      
      </div>
    </div>
  )
}

export default App