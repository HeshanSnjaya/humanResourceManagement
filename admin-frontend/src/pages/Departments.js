import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Departments = () => {
  const [departments, setDepartments] = useState([
    {
      Name: "Hr deparment",
      Description: "This is hr department",
      headName: "Mr. Amla Kumara",
      headEmail: "emp-002@diana.com",
    },
    {
      Name: "IT deparment",
      Description: "This is It department",
      headName: "Mr. Amla Kumara",
      headEmail: "emp-002@diana.com",
    },
    {
      Name: "Finance deparment",
      Description: "This is finance department",
      headName: "Mr. Amla Kumara",
      headEmail: "emp-002@diana.com",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Departments" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div className="bg-[#013a63] p-3 rounded-lg text-white font-medium">
            Add New Department
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Department Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department Head
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department Head Mail
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
                {departments.map((dept, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {dept.Name}
                      </td>
                      <td className="px-6 py-4">{dept.Description}</td>
                      <td className="px-6 py-4">{dept.headName}</td>
                      <td className="px-6 py-4">{dept.headEmail}</td>
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

export default Departments;
