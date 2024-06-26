import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Announcements = () => {
  const [announcement, setAnnouncement] = useState([
    {
      Title: "Cricket Match",
      Content: "Annual crickt match",
    },
    {
      Title: "Blood Donation Camp",
      Content: "Annual blood donation camp",
    },
    {
      Title: "Annual Piritha",
      Content: "Annual Piritha",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Announcements" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div className="bg-[#013a63] p-3 rounded-lg text-white font-medium">
            Add Announcement
          </div>
        </div>
        {/* notice map */}
        {announcement.map((announ, key) => {
          return (
            <div
              id={key}
              className="flex flex-col md:w-[96.4%] mt-[25px] bg-[#d7e7fa] min-h-[220px] px-5 pb-4 rounded-md"
            >
              <h1 className="text-sky-900 font-bold">{announ.Title}</h1>
              <div className="bg-white mt-4 rounded-md w-full min-h-[100px] p-4">
                {announ.Content}
              </div>
              <div className="flex flex-row mt-4 justify-end gap-x-5">
                <div className="bg-[#497cc9] py-2 px-5 rounded-lg text-white font-medium">
                  Edit
                </div>
                <div className="bg-[#ed1b24] py-2 px-5 rounded-lg text-white font-medium">
                  Delete
                </div>
              </div>
            </div>
            // commnet
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
