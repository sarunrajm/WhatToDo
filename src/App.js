import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const getTask = (e) => {
    setTask(e.target.value);
  }

  const handleTask = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please fill the form!");
    } else {
      if (editIndex !== -1) {

        const updatedTaskArray = [...taskArray];
        updatedTaskArray[editIndex] = task;
        setTaskArray(updatedTaskArray);
        setEditIndex(-1); 
      } else {
        setTaskArray([...taskArray, task]);
      }
      setTask("");
    }
  }

  const resetAll = (e) => {
    e.preventDefault();
    setTaskArray([]);
    setTask("");
    setEditIndex(-1); 
  }

  return (
    <>
      <div className="holder d-flex align-items-center justify-content-center">
        <div className="container">
          <header className="text-center mb-5">
            <h1 className="display-4">TodoTrack</h1>
            <p className="fst-italic text-muted">Get it done.</p>
          </header>

          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="sh card rounded border-1 position-relative">
                <div className="card-body p-5">
                  <div className='m-5'>
                    <form onSubmit={(e) => handleTask(e)} className='flex-wrap d-flex justify-content-center '>
                      <TextField sx={{ m: 0, width: '25ch' }} size="small" label="What's the plan?" color="primary" value={task} onChange={(e) => getTask(e)} />
                      {editIndex !== -1 ? (
                        <Button
                          className='ms-3 invisible-button'
                          color='primary'
                          size="small"
                          variant="outlined"
                          onClick={(e) => handleTask(e)}
                        >
                          Update
                        </Button>
                      ) : (
                        <Button size="large" type='submit' className='ms-lg-4 add' color='primary' variant="outlined">Add</Button>
                      )}
                    </form>
                  </div>
                  {taskArray.map((item, index) => (
                    <div className="form-check mb-3 ms-5" key={index}>
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        {editIndex === index ? (
                          <>
                            <TextField
                              sx={{ m: 0, width: '25ch' }}
                              size="small"
                              color="primary"
                              value={task}
                              onChange={(e) => getTask(e)}
                            />
                            <Button
                              className='ms-3'
                              color='primary'
                              size="small"
                              variant="outlined"
                              onClick={(e) => handleTask(e)}
                            >
                              Update
                            </Button>
                          </>
                        ) : (
                          <span className="fst-italic pl-1">{item}</span>
                        )}
                        {editIndex !== index && (
                          <>
                            <Button
                              className='editbtn m-1 ms-5'
                              color='primary'
                              size="small"
                              variant="outlined"
                              onClick={() => setEditIndex(index)}
                            >
                              Edit
                            </Button>
                            <Button
                              className='ms-3'
                              color='secondary'
                              size="small"
                              variant="outlined"
                              onClick={() => {
                                const updatedTaskArray = [...taskArray];
                                updatedTaskArray.splice(index, 1);
                                setTaskArray(updatedTaskArray);
                              }}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </label>
                    </div>
                  ))}
                  <form onSubmit={(e) => resetAll(e)}>
                    <Button disabled={!taskArray.length} type='submit' color='primary' size="large" variant="outlined" className='reset1'>Reset</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-dark">
        <div className="container p-4 pb-0"></div>
        <div className="text-center p-3">
          <p>Copyright &copy; 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
