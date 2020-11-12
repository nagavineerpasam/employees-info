import React from "react";
import "./employees.css";
const employeeslist = (props) => {
   const nameslist = props.names.map((name) => {
      const empname = name.nametext;
      const captilizename = empname.charAt(0).toUpperCase() + empname.slice(1);
      return (
         <div key={name.key} className="list">
            <p>
               <input
                  className="listinput"
                  type="text"
                  id={name.key}
                  value={captilizename}
                  onChange={(e) => props.update(e.target.value, name.key)}
               />
               <span>
                  <i
                     className="fa fa-trash"
                     onClick={() => props.deletename(name.key)}
                  ></i>
               </span>
            </p>
         </div>
      );
   });

   return (
      <div className="box">
         <h1>Employees List</h1>
         <p>Click delete icon to delete</p>
         <p>Tap on name to edit</p>
         <form onSubmit={props.submitname}>
            <input
               className="inp"
               value={props.value}
               type="text"
               onChange={props.addnames}
               placeholder="add name here..."
               required
            />

            <button type="submit" className="btn btn-success">
               ADD
            </button>
         </form>
         {nameslist}
      </div>
   );
};

export default employeeslist;
