import React,{ useState }  from "react";

import InputText from "./InputText";

import "./formStyle.css"

function Form({updateStatus}) {
   
    const [formData, setFormData] = useState({
      name: '',
      cardNumber: '',
      limit: '',
      balance:''
    });

    let validationPattern = ["^([a-zA-Z]{0,}[a-zA-Z]{0,}'?-?[a-zA-Z]{1,}?([a-zA-Z]{0,})?)","^([a-zA-Z]{0,}[a-zA-Z]{0,}'?-?[a-zA-Z]{1,}?([a-zA-Z]{0,})?)","/\b{5}\b/g"]
    
    const handleSubmit = async (eEvent) => {
        eEvent.preventDefault();
     const data = new FormData(eEvent.target);
     formData.name= data.get("name");
     formData.cardNumber = data.get("cardNumber")
     formData.limit = data.get("limit");      
      try {
          const response = await fetch('http://localhost:3000/addNewCard', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data);
          if(response.status===201){
            alert(data.message)
          }else{
            alert(data.message)
          }
          updateStatus(Date().toLocaleString());
          
        } catch (error) {
          console.error(error);
        }
    };
  
    return (
     
        <div className="divBG">
            <form onSubmit={handleSubmit}>        
                <InputText type="text"   propLabel="Full Name" pHolder="Full Name" name="name" error="Please enter the valid First and Last Name!" minLength="5" maxLength="30" validationPattern="^([a-zA-Z]{0,}\s[a-zA-Z]{0,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{0,})?)"  />
                <InputText type="text" propLabel="Card Number" pHolder="Card Number" name="cardNumber" error="Please enter the valid Card Number!"  minLength="10" maxLength="10" validationPattern={"^[0-9]*$"}/>
                <InputText type="number" propLabel="Limit" pHolder="Limit" name="limit" error="Please enter the valid limit!!" minLength="1" maxLength="5" validationPattern={"^[0-9]*$"}/>
                <button type="submit">Add</button>
            </form>
        </div>     
      
    );
  }

  export default Form;