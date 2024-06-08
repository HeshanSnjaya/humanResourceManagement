import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Positions = () => {
  const [positions, setPositions] = useState([
    {
      Name: "Hr Manager",
      Description: "This is manager position",
    },
    {
      Name: "Fianance Manager",
      Description: "This is manager position",
    },
    {
      Name: "It manager",
      Description: "This is manager position",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Positions" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div className="bg-[#013a63] p-3 rounded-lg text-white font-medium">
            Add New Position
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Position Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Description
                  </th>

                  <th scope="col" class="px-6 py-5">
                    action
                  </th>
                  <th scope="col" class="px-6 py-5">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {pos.Name}
                      </td>
                      <td className="px-6 py-4">{pos.Description}</td>

                      <td className="px-6 py-4">
                        <div className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md">
                          Update
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md">
                          Delete
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
