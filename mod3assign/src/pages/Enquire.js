import React from "react";
import "./item.css";
class Enquire extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      details: "",
    };
  }

  iDChangeHandler = (event) => {
    // console.log("ID", event.target.value);
    this.setState({ ...this.state, id: event.target.value });
  };

  CourseHandler = (event) => {
    // console.log("Course", event.target.value);
    this.setState({ ...this.state, name: event.target.value });
  };

  DetailsHandler = (event) => {
    // console.log("Detals", event.target.value);
    this.setState({ ...this.state, details: event.target.value });
  };

  submitHandler = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:8900/language", {
      method: "POST",
      headers: {
        "Content-Type": "applicatopn/json",
      },
      body: JSON.stringify({
        name: "python",
        details: "javascript is a dynamic prog1",
      }),
    });
    const result = await res.json();
    console.log("RES", result);
    console.log(
      JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        details: this.state.details,
      })
    );
    console.log(res);
  };

  
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="Enquireform">
          <p>Enquirey Form</p>
          <input
            placeholder="Enter Id"
            name="id"
            onChange={this.iDChangeHandler}
          />
          <input
            placeholder="Enter your course name"
            name="name"
            onChange={this.CourseHandler}
            value={this.state.name}
          />
          <input
            placeholder="Enter course Details"
            name="details"
            onChange={this.DetailsHandler}
            value={this.state.details}
          />
          <input type="submit" value="Enquire" id="enquirebtn" />
        </form>
      </div>
    );
  }
}

export default Enquire;
