import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log("Child - Constructor");
  }

  async componentDidMount() {
    console.log("Child - ComponentDidMount");
    const data = await fetch("https://api.github.com/users/Ravi-Rathod-22");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Child - Render");
    const { userInfo } = this.state;
    return (
      <div>
        <h2>Profile Class Component</h2>
        <img src={userInfo.avatar_url} />
        <p>Name : {userInfo.name}</p>
        <p>Location : {userInfo.location}</p>
      </div>
    );
  }
}

export default Profile;
