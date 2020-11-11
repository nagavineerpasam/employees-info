import React, { Component } from "react";
import Employeeslist from "./Employees/Employeeslist";

class App extends Component {
   state = {
      names: [],
      currentname: {
         nametext: "",
         key: "",
      },
   };

   inputHandler = (event) => {
      const inputname = event.target.value;
      this.setState({
         currentname: {
            nametext: inputname,
            key: Date.now(),
         },
      });
   };

   onsubmitHandler = (e) => {
      e.preventDefault();
      const newname = this.state.currentname;
      if (newname.text !== "") {
         const names = [...this.state.names, newname];

         this.setState({
            names: names,
            currentname: {
               nametext: "",
               key: "",
            },
         });
      }
   };

   deleteHandler = (key) => {
      const newnames = this.state.names.filter((name) => name.key !== key);
      this.setState({
         names: newnames,
      });
   };

   updatenameHandler = (text, key) => {
      const newnames = this.state.names;
      newnames.map((name) => {
         if (name.key === key) {
            name.nametext = text;
         }
         return name;
      });

      this.setState({
         names: newnames,
      });
   };

   render() {
      return (
         <div>
            <Employeeslist
               addnames={this.inputHandler}
               submitname={this.onsubmitHandler}
               deletename={this.deleteHandler}
               names={this.state.names}
               value={this.state.currentname.nametext}
               update={this.updatenameHandler}
            />
         </div>
      );
   }
}

export default App;
