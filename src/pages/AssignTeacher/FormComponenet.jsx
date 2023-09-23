import React, { useState } from 'react';
import "./Assignteacher.scss";
const FormComponent = () => {
  const [formFields, setFormFields] = useState([{ name: "", email: "" ,id:""}]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    if (formFields.some((field) => field.name === "")) {
      alert("Please enter a name.");
    } else if (formFields.some((field) => field.email === "")) {
      alert("Please enter a email.");}
      else if(formFields.some((field) => field.id ==="")){
alert("Please enter the id.");
      }
     else {
      console.log(formFields);
    }
  };

 
  const addField=()=>{
    if (formFields.some((field) => field.name === "")) {
        alert("Please enter a name.");
      } else if (formFields.some((field) => field.email === "")) {
        alert("Please enter a email.");}
        else if (formFields.some((field) => field.id === "")) {
          alert("Please enter an id.");}
    else {
      //setShowPopup(false); 
      let obj={
        name:'',
        email:'',
        id:''
      }
      setFormFields([...formFields,obj]);
    }
  };

  const removeField = (index) => {
    
    
    let data = [...formFields];
    if(data.length==1)
    alert("Enroll at least one field");
    else{
    data.splice(index, 1);
    setFormFields(data);}
  };

  return (
    <div className="FormComponent">
    <h1>Input Teacher Information</h1>
      <form onSubmit={submit}>
        {formFields.map((form, index) => (
          <div className='inp' key={index}>
            <input
              name="name"
              placeholder="Name"
              onChange={(event) => handleFormChange(event, index)}
              value={form.name}
              required
            />  
        
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={(event) => handleFormChange(event, index)}
              value={form.email}
              required
            />
            <input
              name="id"
              
              placeholder="id"
              onChange={(event) => handleFormChange(event, index)}
              value={form.id}
              required
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
