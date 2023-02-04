import React,{ useState }  from 'react'
import './Form.css'

const feeStructure = {
  "Exam Fee": {
    INDIAN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 100,
        },
      },
    },
    NRI: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
    SAARC: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
  },
  "Application Fee": {
    INDIAN: {
      ALL_COURSES: {
        UG: {
          amount: 200,
        },
        "UG-DIPLOMA": {
          amount: 300,
        },
        PG: {
          amount: 500,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        UG: {
          amount: 400,
        },
        "UG-DIPLOMA": {
          amount: 400,
        },
        PG: {
          amount: 700,
        },
      },
    },
  },
};


const Form = () => {
  const [total,setTotal]=useState(0)
  const [selectedFees, setSelectedFees] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [level, setLevel] = useState(false)
  const [course, setCourse] = useState(false)
  const [resetForm,setResetForm]=useState(false)

  const options1 = ['Exam Fee', 'Application Fee'];
  const options2 = ['INDIAN', 'FOREIGN', 'NRI','SAARC'];
  const options3 = ['Medical', 'Dental', 'Ayurveda'];
  const options4 = ['UG', 'PG', 'UG-DIPLOMA'];

 const handleChangeFees = (event) => {
    setResetForm(true) 
    setSelectedFees(event.target.value);
  };
    const handleChangeNationality = (event) => {
    setResetForm(true) 
    setSelectedNationality(event.target.value);
  };
    const handleChangeCourses = (event) => {
    setResetForm(true) 
    setSelectedCourse(event.target.value);
  };
    const handleChangeLevel = (event) => {
    setResetForm(true) 
    setSelectedLevel(event.target.value);
    };
    const totalFees = () => {
        const filterFee = feeStructure[selectedFees]
        const filterNationality = filterFee[selectedNationality]
        const filterCourses = filterNationality["ALL_COURSES"]
        let filterLevel
        if (selectedFees === 'Application Fee') {
            filterLevel=filterCourses[selectedLevel]  
        }
        else {
             filterLevel=filterCourses["ALL_LEVEL"] 
        }
         setTotal(filterLevel["amount"])
        
        setResetForm(false)
        
       
     
 }
    if (selectedCourse && selectedFees && selectedNationality && selectedLevel && resetForm) {
       totalFees()
     }

    return (
      
    <div className='fees-form' >
      <div style={{"alignItems":"center"}}>
         <h3>Fees Form</h3>
      <select
        id="dropdown1"
        value={selectedFees}
        onChange={handleChangeFees}
        >
        <option value="">Fees</option>
        {options1.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <br />

      <select
        id="dropdown2"
        value={selectedNationality}
        onChange={handleChangeNationality}
        >
          <option value="">Nationality</option>
        {options2.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
        <br />
        <input type="checkbox" onClick={()=>setCourse((prev)=>!prev)} />
        <label >ALL_COURSES</label>
        <br />
        <br />
  
      <select
        id="dropdown3"
        value={selectedCourse}
        onChange={handleChangeCourses}
        disabled={!course}>
        <option value="">Courses</option>
        {options3.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
        <br />
       <input type="checkbox" onClick={()=>setLevel((prev)=>!prev)} />
        <label > ALL_LEVEL</label>
        <br />
        <br />
      <select
        id="dropdown4"
        value={selectedLevel}
        onChange={handleChangeLevel}
        disabled={!level}>   <option value="">Level</option>
          {options4.map((option) => (
         
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </select>
        <br />
        <br />
                <label>Total: <span style={{"color":"red"}}>{total }</span></label>
      </div>
    
    </div>
  );
  
}

export default Form