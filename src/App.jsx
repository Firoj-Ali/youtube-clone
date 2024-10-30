import { useState, useEffect } from "react";
import HomePage from "./components/VideosPage";
import channelInfo from "./service/channel";
import ChannelPage from "./components/ChannelPage";


function App() {
  const [channel, setChannel] = useState(null);


  useEffect(() => {
    const loadChannel = async () => {
      const response = await channelInfo();
      setChannel(response);

    };
    loadChannel();
  }, []);

  const profilePic = channel?.info?.snippet?.thumbnails?.high?.url;

  return (
    <>
      <div className="bg-stone-950 w-full absolute text-white font-sans">

       
        <ChannelPage channel={channel}/>
        <div className="mt-10 px-10">
          <HomePage profilePic={profilePic} />
        </div>
      </div>
    </>
  );
}

export default App;
