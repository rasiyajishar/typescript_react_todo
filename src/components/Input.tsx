type Input={
   inputValue:string;  
  setInputvalue:React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({inputValue,setInputvalue}:Input) => {
  return (
    <input type='text' value={inputValue}
    onChange={(event)=>setInputvalue(event.target.value)}  className='w-full p-2 rounded-sm mb-2  bg-slate-400'/>
  )
}

export default Input
