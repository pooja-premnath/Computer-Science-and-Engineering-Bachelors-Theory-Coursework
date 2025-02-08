import {useState} from 'react';
import axios from 'axios';



export default function App(){
const [studentDetails, setStudentDetails]=useState({
  id:0,
  name:''
})


const [record,setRecord]=useState({id:0,name:''});

const [allRecords,setAllRecords]=useState([]);

const [favorites, addFavorites]=useState([]);

const handleChanges= (e)=>{
  const {name,value}=e.target;
  setStudentDetails((prevState)=>({
    ...prevState,
    [name]:value
  }))
}


const fetchChanges= (e)=>{
  const {name,value}=e.target;
  setRecord((prevState)=>({
    ...prevState,
    [name]:value
  }))
}

const insertRecord=()=>{
  axios.post("http://localhost:3001/insert",studentDetails)
  .then((response)=>{
    setStudentDetails({
      id:0,
      name:''
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}


const updateRecord=()=>{
  axios.post("http://localhost:3001/update",studentDetails)
  .then((response)=>{
    setStudentDetails({
      id:0,
      name:''
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}


const deleteRecord=()=>{
  axios.post(`http://localhost:3001/delete?id=${studentDetails.id}`)
  .then((response)=>{
    setStudentDetails({
      id:0,
      name:''
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}

const fetchRecord=()=>{
  axios.get(`http://localhost:3001/fetch?id=${record.id}`)
  .then((response)=>{
    if (response.data){
    setRecord(response.data);
    }

    else{
      setRecord({id:0, name: "Record Not Found"})
    }
  })
  .catch((err)=>{
    console.log(err)
  })
}


const displayAll=()=>{
  axios.get("http://localhost:3001/display")
  .then((response)=>{
    console.log(response)
    setAllRecords(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

return(
  <div>
  <h1>Insert , Update and Delete Student Details</h1>
  <input type="text" name="id" value={studentDetails.id} onChange={handleChanges} placeholder="Enter student id"/>
  <input type="text" name="name" value={studentDetails.name} onChange={handleChanges} placeholder="Enter student name"/>
  <button type="submit" onClick={insertRecord}>Insert</button>
  <button type="submit" onClick={updateRecord}>Update</button>
  <button type="submit" onClick={deleteRecord}>Update</button>


  <br></br>
  <br></br>
  <br></br>
  <h1>Fetch Student Details</h1>
  <input type="text" name="id" value={record.id} onChange={fetchChanges} placeholder="Enter student id"/>
  <button type="submit" onClick={fetchRecord}>Fetch</button>
  <h3>{record.id !== 0 ? record.id : "Record not found"}</h3>
  <h3>{record.id !== 0 ? record.name : ""}</h3>




  <br></br>
  <br></br>
  <br></br>
  <h1>Show all Student Details</h1>
  <button type="submit" onClick={displayAll}>Display</button>
  {allRecords.map((mapVar)=>{
    return(
      <div>
        <ul>
          <li>Id: {mapVar.id}</li>
          <li>Name: {mapVar.name}</li>
          <br></br>
        </ul>
      </div>
    )
  })}


<br></br>
  <br></br>
  <br></br>
  <h1>Add Records to Favorites</h1>
  {allRecords.map((mapVar)=>{
    return(
      <div>
        <ul>
          <li>Id: {mapVar.id}</li>
          <li>Name: {mapVar.name}</li>
          <button onClick={addFavorites}>Add to Favorites</button>
          <br></br>
        </ul>
      </div>
    )
  })}
  </div>
)

}