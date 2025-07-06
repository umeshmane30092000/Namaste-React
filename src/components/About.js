import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    render(){
        return (
          <div>
            <h1>About page</h1>
            {/* <User name={"Umesh mane"} /> */}
            <UserClass name={"Umesh mane Class"} location={"Mumbai class"} />
          </div>
        );
    
    }
}

export default About;