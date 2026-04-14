"use client";
import { createContext, useState } from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [allCallData, setCallData] = useState([]);
  const [allTextData, setTextData] = useState([]);
  const [allVideoData, setVideoData] = useState([]);
  const [timeLineData, setTimeLineData] = useState([]);

  const manageCall = (name, id) => {
    const callDataObject = {
      id: id,
      name: name,
      icon: <FiPhoneCall className="text-xl" />,
      type: "Call",
      dateTime: new Date().toISOString(),
    };
    const newCallData = [...allCallData, callDataObject];
    setCallData(newCallData);
    const newTimeLineData = [...timeLineData, callDataObject];
    setTimeLineData(newTimeLineData);
  };
  const manageText = (name, id) => {
    const textDataObject = {
      id: id,
      name: name,
      icon: <MdOutlineTextsms className="text-xl" />,
      type: "Text",
      dateTime: new Date().toISOString(),
    };
    const newTextData = [...allTextData, textDataObject];
    setTextData(newTextData);
    const newTimeLineData = [...timeLineData, textDataObject];
    setTimeLineData(newTimeLineData);
  };
  const manageVideo = (name, id) => {
    const videoDataObject = {
      id: id,
      name: name,
      icon: <FiVideo className="text-2xl" />,
      type: "Video",
      dateTime: new Date().toISOString(),
    };
    const newVideoData = [...allVideoData, name];
    setVideoData(newVideoData);
    const newTimeLineData = [...timeLineData, videoDataObject];
    setTimeLineData(newTimeLineData);
  };
  const data = {
    allCallData,
    allTextData,
    allVideoData,
    manageCall,
    manageText,
    manageVideo,
    timeLineData,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
