import { useEffect, useState } from "react";
import Input from "./components/Input";
import TEst from "./components/test";

function App() {
  const [fields, setFields] = useState({
    nom : "",
    prenom : "",
    age : 0,
    check : false
  })
  const handleChange = (e) => {

    const nom_ = e.target.name;
    setFields({
      ...fields,
      [nom_] : e.target.type === "checkbox" ? e.target.checked : e.target.value
    });

  }
  const handleSubmit = (e) => {
    fetch("http://192.168.43.5:5000/register", {
      method: "POST",
      body: JSON.stringify(fields),
      headers : {
        "Content-type" : "application/json"
      }
    })
    .then(data => data.json())
    .then(res => console.log(res))
    .catch((e) =>{
      console.log('error',e)
    })
  }

  const style = {
    width: "100%", 
  height: "30px", 
  marginBottom: "20px",  
  borderRadius: "5px"}
  return (
    <div>
        <Input type="text" name="nom" 
        style={{width: "100%", 
        height: "30px", 
        marginBottom: "20px",  
        borderRadius: "5px"}} 
        value={fields.nom} handleChange={handleChange} />
        <Input type="text" name="prenom" 
        style={{...style}} value={fields.prenom} handleChange={handleChange} />
        <Input type="number" name="age" style={{...style}} value={fields.age} handleChange={handleChange} />
        <Input type="checkbox" name="check" value={fields.check} handleChange={handleChange} />
        <Input type="button" name="btn" style={{...style,fontSize: "20px",color: "white",backgroundColor: "dodgerblue", border: "1px solid dodgerblue", borderRadius: "5px", marginTop: "20px"}} value={"submit"} handleSubmit = {handleSubmit} handleChange={handleSubmit} />
        {JSON.stringify(fields)}
    </div>
  );
}

export default App;
