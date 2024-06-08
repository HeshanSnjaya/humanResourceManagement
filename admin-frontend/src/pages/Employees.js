import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Employees = () => {
  const [employeess, setEmployees] = useState([
    {
      userName: "emp-001",
      Name: "Saman Silva",
      Position: "finance manager",
      Department: "Finance Department",
      email: "emp-001@dian.com",
    },
    {
      userName: "emp-001",
      Name: "Saman Silva",
      Position: "finance manager",
      Department: "Finance Department",
      email: "emp-001@dian.com",
    },
    {
      userName: "emp-001",
      Name: "Saman Silva",
      Position: "finance manager",
      Department: "Finance Department",
      email: "emp-001@dian.com",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Employees" />
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    User Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Position
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Email
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
                {employeess.map((emp, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {emp.userName}
                      </td>
                      <td className="px-6 py-4">{emp.Name}</td>
                      <td className="px-6 py-4">{emp.Position}</td>
                      <td className="px-6 py-4">{emp.Department}</td>
                      <td className="px-6 py-4">{emp.email}</td>
                      <td className="px-6 py-4">
                        <div className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md">
                          View
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

export default Employees;
