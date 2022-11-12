import React from "react";
import ItemNmes from "./Item";
class List extends React.Component {
  render() {
    return (

      <>
      {this.props.courses.map((item)=>(
          <ItemNmes courses={item} />
          
      ))}

      </>
    );
  }
}
export default List;
