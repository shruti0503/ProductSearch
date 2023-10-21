import React, { useState, useEffect, useContext } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { DataContext } from "./DataProvider"; // Import the DataContext

const TextToSpeech = ({Text}) => {
  const [isPaused, setIsPaused] = useState(false);
  //const { Text } = useContext(DataContext);
  const synth = window.speechSynthesis; // Initialize the speechSynthesis object once

  const handlePlay = () => {
    console.log("before:",Text);
    const u = new SpeechSynthesisUtterance(Text);
    console.log(Text)

    if (isPaused) {
      synth.resume();
    }

    synth.speak(u);
    setIsPaused(false);
  };

  return (
    <div>
      <button onClick={handlePlay}>{isPaused ? <></> : <VolumeUpIcon />} </button>
    </div>
  );
};

export default TextToSpeech;
