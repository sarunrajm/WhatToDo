import { TextField,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
    const [task,setTask]=useState("")
    const [taskArray,setTaskArray]=useState([""])

    const getTask = (e)=>{
        setTask(e.target.value)
    }
    const handleTask = (e)=>{
        e.preventDefault()
        
        if(!task){
            alert("Please fill the form!")
        }else{
            setTaskArray([...taskArray,task])
        }

    }
    console.log(taskArray);

    const resetAll = (e)=>{
        e.preventDefault()
        setTaskArray([""])
        setTask("")
    }
    console.log(taskArray);

    

    



  return (
<>
    <div className="holder d-flex align-items-center justify-content-center">
        
        
            <div className="container">
                {/* <h1>ToDo</h1> */}
                {/* <!-- FOR DEMO PURPOSE --> */}
                <header className="text-center mb-5">
                    <h1 className="display-4">TodoTrack</h1>
                    <p className="fst-italic text-muted">Get it done.</p>
                    {/* <a className="text-primary" href="https://bootstrapious.com/" target="_blank">Bootstrapious</a> */}
                </header>
            
                
                <div className="row">
                    <div className="col-lg-5 mx-auto">
        
                        {/* <!-- CHECKBOX LIST --> */}
                        <div className="sh card rounded border-0 position-relative">
                            <div className="card-body p-5">
                            
                                <div className='m-5'>
                                <form onSubmit={(e)=>handleTask(e)} className='flex-wrap d-flex justify-content-center '>
                                    <TextField sx={{ m:0, width: '25ch' }} size="small" label="What's the plan?" color="primary" value={task || ""} onChange={(e)=>getTask(e)}/>
                                    <button size="large" type='submit' className='ms-lg-4 add' color='primary' variant="outlined">Add</button>
                                    </form>
                                </div>
                            
        
                                {/* <div className="d-flex align-items-center mb-4 pb-4 border-bottom"><i className="far fa-calendar-alt fa-3x"></i>
                                    <div className="ms-3">
                                        <h4 className="text-uppercase fw-weight-bold mb-0">Wednesday</h4>
                                        <p className="text-gray fst-italic mb-0">05 December 2020</p>
                                    </div>
                                </div> */}
                               
                                    {           
                                    taskArray.map((item,index)=>(
                                       
                                        index>0&&
                                            <div className="form-check mb-3 ms-5">
                                        <input className="form-check-input"  type="checkbox"/>
                                        <label className="form-check-label" for="flexCheck1"><span className="fst-italic pl-1">{item}</span>
                                        
                                        </label>
                                    </div>
                                       
        
                                    ))}
                                     <form onSubmit={(e)=>resetAll(e)}>
                                        <button disabled={!task?true:false}  type='submit'  color='primary' size="large" variant="outlined" className='reset1'>Reset
                                        </button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    {/* footer */}

    <footer class="text-center text-dark">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
      </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3">
    <p>Copyright &copy; 2023. All Rights Reserved.</p>  </div>
  {/* <!-- Copyright --> */}
</footer>
    
    
</>
     );
}

export default App;
