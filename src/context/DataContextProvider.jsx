"use client";
import { createContext, useState } from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { toast } from "react-toastify";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [timeLineData, setTimeLineData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const manageCall = (name, id) => {
    toast.success('Call logged successfully!', {
      icon: <FiPhoneCall className="text-2xl" />,
    });

    const callDataObject = {
      id: id,
      name: name,
      icon: <FiPhoneCall className="text-2xl" />,
      type: "Call",
      dateTime: new Date().toISOString(),
    };
    const newTimeLineData = [...timeLineData, callDataObject];
    setTimeLineData(newTimeLineData);
    setFilteredData(newTimeLineData);
  };
  const manageText = (name, id) => {
    toast.success('Text logged successfully!', {
      icon: <MdOutlineTextsms className="text-2xl" />,
    });
    const textDataObject = {
      id: id,
      name: name,
      icon: <MdOutlineTextsms className="text-2xl" />,
      type: "Text",
      dateTime: new Date().toISOString(),
    };
    const newTimeLineData = [...timeLineData, textDataObject];
    setTimeLineData(newTimeLineData);
    setFilteredData(newTimeLineData);
  };
  const manageVideo = (name, id) => {
    toast.success('Video logged successfully!', {
      icon: <FiVideo className="text-2xl" />,
    });
    const videoDataObject = {
      id: id,
      name: name,
      icon: <FiVideo className="text-2xl" />,
      type: "Video",
      dateTime: new Date().toISOString(),
    };
    const newTimeLineData = [...timeLineData, videoDataObject];
    setTimeLineData(newTimeLineData);
    setFilteredData(newTimeLineData);
  };

  const manageFilter = (type) => {
    if (type === "All") {
      setFilteredData(timeLineData);
    } else {
      const filteredData = timeLineData.filter((item) => item.type === type);
      setFilteredData(filteredData);
    }
  };
  const manageSort = (sortType) => {
      if (sortType === "Newest") {
        const sortedData = [...filteredData].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
        setFilteredData(sortedData);
      } else if (sortType === "Oldest") {
        const sortedData = [...filteredData].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        setFilteredData(sortedData);
      } else {
        setFilteredData(filteredData);
      }

      // const sortedData = [...filteredData].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
      // setFilteredData(sortedData);

  };


  const data = {
    manageCall,
    manageText,
    manageVideo,
    timeLineData,
    filteredData,
    manageFilter,
    manageSort,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
