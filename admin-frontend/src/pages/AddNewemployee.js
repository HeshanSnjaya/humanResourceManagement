import React, { useState } from "react";
import Welcome from "../components/Welcome";
import TextBox from "../components/TextBox";
import QualificationForm from "../components/qualification/QualificationForm";
import ExpereinceForm from "../components/experience/ExpereinceForm";

const AddNewemployee = () => {
  const [quliAdd, setquliAdd] = useState(false);
  const [expAdd, setExpAdd] = useState(false);

  const handleQualiClick = () => {
    setquliAdd(true);
  };

  const handleQualiCloseClick = () => {
    setquliAdd(false);
  };

  const handleEXPClick = () => {
    setExpAdd(true);
  };

  const handleeXPCloseClick = () => {
    setExpAdd(false);
  };

  const [employee, setemployee] = useState({
    firstName: "Lakmini",
    LastName: "Theekshana",
    fullName: "Lakmini theekshan",
    gender: "female",
    personalMail: "lakmini@gmail.com",
    mobileNumber: "077-8707845",
    userName: "Lakmini",
    workMail: "lakmini@diana.lk",
    contractType: "Permenant",
    department: "Human resources",
    position: "Manager",
    salary: 100000,
    startDate: "2024-03-05",
    epfNum: "1325-344-565",
    dob: "1999-03-8",
    marialStatus: "single",
    address: "143/1, Samapath Uyana, Kirbathgoda",
    spouseName: "",
    fatherName: "Amal Karunarathne",
    motherName: "jayani karunathne",
    emergencyNum: "077-5804567",
  });
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-6">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Register Employee" />
        {/* Add new employee */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Add New Employee
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:w-[96.4%]">
            {/* cell 1 */}
            <div className="grid grid-col-1 gap-y-2 ">
              <div className="text-black text-md font-semibold px-5 py-4">
                Basic Information
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">First Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Last Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Full Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Gender</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Personal E-mail</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mobile Number</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
            {/* cell 2 */}
            <div className="grid grid-col-1 gap-y-2">
              <div className="flex flex-row px-5 gap-x-[20%] mt-11">
                <div className="w-[140px]">User Name</div>

                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Work Email</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Contract Type</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Department</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Position</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Salary</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
            {/* cell 3*/}
            <div className="grid grid-col-1 gap-y-2 ">
              <div className="text-black text-md font-semibold px-5 py-4">
                Work Information
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">User Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Official E-mail</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Contract Type</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Department</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Position</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mobile Number</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
            {/* cell 4*/}
            <div className="grid grid-col-1 gap-y-2 ">
              <div className="flex flex-row px-5 gap-x-[20%] mt-11">
                <div className="w-[140px]">Password</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Confirm password</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Start Date</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Basic Salary</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">EPF Number</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
            {/* cell 5*/}
            <div className="grid grid-col-1 gap-y-2 ">
              <div className="text-black text-md font-semibold px-5 py-4">
                Personal Information
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Date of birth</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Address</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Fathers Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Home phone no.</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
            {/* cell 6*/}
            <div className="grid grid-col-1 gap-y-2 ">
              <div className="flex flex-row px-5 gap-x-[20%] mt-11">
                <div className="w-[140px]">marital Status</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">spouse’s name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mothers Name</div>
                <div>
                  <TextBox />
                </div>
              </div>
              <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mobile phone no.</div>
                <div>
                  <TextBox />
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end">
            <div className="bg-[#013a63] p-2 rounded-lg text-white font-medium">
              Submit
            </div>
          </div>
        </div>
        {/* Qualification */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Qualification
              </div>
            </div>
          </div>
          <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end mb-5">
            <div
              className="bg-[#013a63] p-2 rounded-lg text-white font-medium"
              onClick={handleQualiClick}
            >
              Add Qualification
            </div>
          </div>
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Course
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Institute
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Marks
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Complication Year
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {leaves.map((appliedLeaves, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appliedLeaves.Type}
                      </td>
                      <td className="px-6 py-4">{appliedLeaves.From}</td>
                      <td className="px-6 py-4">{appliedLeaves.To}</td>
                      <td className="px-6 py-4">{appliedLeaves.NoOfDays}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            appliedLeaves.Status === "Pending"
                              ? "bg-[#facc96]"
                              : appliedLeaves.Status === "Approved"
                              ? "bg-[#bbf2b2]"
                              : appliedLeaves.Status === "Rejected"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {appliedLeaves.Status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody> */}
            </table>
            {quliAdd && (
              <QualificationForm closeModal={handleQualiCloseClick} />
            )}
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Experience
              </div>
            </div>
          </div>
          <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end mb-5">
            <div
              className="bg-[#013a63] p-2 rounded-lg text-white font-medium"
              onClick={handleEXPClick}
            >
              Add Experience
            </div>
          </div>
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Previous Company
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Designation
                  </th>
                  <th scope="col" class="px-6 py-5">
                    From
                  </th>
                  <th scope="col" class="px-6 py-5">
                    To
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {leaves.map((appliedLeaves, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appliedLeaves.Type}
                      </td>
                      <td className="px-6 py-4">{appliedLeaves.From}</td>
                      <td className="px-6 py-4">{appliedLeaves.To}</td>
                      <td className="px-6 py-4">{appliedLeaves.NoOfDays}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            appliedLeaves.Status === "Pending"
                              ? "bg-[#facc96]"
                              : appliedLeaves.Status === "Approved"
                              ? "bg-[#bbf2b2]"
                              : appliedLeaves.Status === "Rejected"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {appliedLeaves.Status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody> */}
            </table>
            {expAdd && <ExpereinceForm closeModal={handleeXPCloseClick} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewemployee;
