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
          <div className="border border-solid border-black shadow-md mt-4 p-2 mx-auto rounded-2xl bg-amber-300 hover:bg-amber-700">
            <h1 className="font-bold text-2xl">About page</h1>
            {/* <User name={"Umesh mane"} /> */}
            <UserClass name={"Umesh mane Class"} location={"Mumbai class"} />
          </div>
        );
    
    }
}

export default About;