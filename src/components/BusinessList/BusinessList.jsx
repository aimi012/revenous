import React from "react";
import "./BusinessList.css";
import Busisness from "../Business/Busisness";

class BusinessList extends React.Component {
  render() {
    return (
      <>
        <div className="BusinessList">
            {
                this.props.busisnesses.map((businiess)=> {
                    return <Busisness busisness={businiess}/>

                })
            }
        </div>
      </>
    );
  }
}

export default BusinessList;
