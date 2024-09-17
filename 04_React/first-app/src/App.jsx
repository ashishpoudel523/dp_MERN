import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const channels = [
  {
    name: "Star Movies",
    bandwidth: "120Hz",
    id: 1,
  },
  {
    name: "Star Sports",
    bandwidth: "110Hz",
    id: 2,
  },
  {
    name: "NTV",
    bandwidth: "180Hz",
    id: 3,
  },
];

function App() {
  //its a component, not a js function
  const [activeChannel, setActiveChannel] = useState(channels[2]);

  console.log(activeChannel, "activeChannel");

  function handleChannelClick(channel) {
    setActiveChannel(channel);
  }

  return (
    <div>
      <p>Web Developer</p>
      Currrent Active Channel: {activeChannel.name}
      {channels.map((channel) => {
        return (
          <div
            className="ap"
            style={{ color: "red" }}
            onClick={() => handleChannelClick(channel)}
          >
            {channel.name}
          </div>
        );
      })}
      {/* <div onClick={handleClick}>Click to change Channel</div> */}
    </div>
  );
}

export default App;
