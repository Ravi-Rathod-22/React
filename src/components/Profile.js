import { useEffect, useState } from "react";

const Profile = (props) => {
  const [counter, setCount] = useState(0);
  const [counter2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h2>Profile Component</h2>
      <p>{props.name}</p>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCount(counter + 1);
          setCount2(counter2 + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Profile;
