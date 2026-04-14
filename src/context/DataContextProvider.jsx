'use client'
import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [allCallData, setCallData] = useState([])
  const [allTextData, setTextData] = useState([])
  const [allVideoData, setVideoData] = useState([])

  const manageCall = (friendInfo) => {
    const newCallData = [...allCallData, friendInfo]
    setCallData(newCallData)
  }
  const manageText = (friendInfo) => {
    const newTextData = [...allTextData, friendInfo]
    setTextData(newTextData)
  }
  const manageVideo = (friendInfo) => {
    const newVideoData = [...allVideoData, friendInfo]
    setVideoData(newVideoData)
  }
  const data = {
    allCallData,
    allTextData,
    allVideoData,
    manageCall,
    manageText,
    manageVideo
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
