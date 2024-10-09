import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }
  render() {
    console.log("Parent-Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is Namaste React Live Course Chapter 07 - Finding the path 🚀
        </p>
        {/* <ProfileFunctionalComponent name={"Ravi"} /> */}
        <Profile name={"RaviClass"} />
      </div>
    );
  }
}
export default About;
