import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Employee = () => {
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

  const [experience, setExperience] = useState({
    previuosCompany: "ABC Company Pvt(Ltd)",
    duration: "2021 - 2022",
    designation: "UI / UX Engineer",
  });

  const [qualification, setQualification] = useState({
    qualifications: "Bcs. Information Technology (Special in SE)",
    university: "University of Wayamba",
    duration: "2020 - 2024",
    score: "2.8",
  });

  //   useEffect(() => {
  //     const fetchBooks = async () => {
  //         const books = await getBooks();
  //         setBooksArray(books);
  //     };

  //     fetchBooks();
  // }, []);

  // useEffect(() => {
  //     console.log("This is books array passed ", BooksArray);
  // }, [BooksArray]);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-10">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Employee Info" />

        <div className="emp-details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[177vh] md:h-[100px] mt-10 rounded-t-xl"></div>
          <div className="flex flex-col bg-white pl-10 pt-5 md:w-[177vh] md:h-[96vh] rounded-b-xl">
            <div className="flex flex-row gap-x-16">
              <div className="flex flex-col w-[46%] h-64 bg-red-400">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Basic Information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">First Name</div>
                    <div>:</div>
                    <div>{employee.firstName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Last Name</div>
                    <div>:</div>
                    <div>{employee.LastName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Full Name</div>
                    <div>:</div>
                    <div>{employee.fullName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Gender</div>
                    <div>:</div>
                    <div>{employee.gender}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Personal E-mail</div>
                    <div>:</div>
                    <div>{employee.personalMail}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Mobile Number</div>
                    <div>:</div>
                    <div>{employee.mobileNumber}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[46%] h-64 bg-red-400">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Work information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">User Name</div>
                    <div>:</div>
                    <div>{employee.userName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Work Email</div>
                    <div>:</div>
                    <div>{employee.workMail}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Contract Type</div>
                    <div>:</div>
                    <div>{employee.contractType}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Department</div>
                    <div>:</div>
                    <div>{employee.department}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Position</div>
                    <div>:</div>
                    <div>{employee.position}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Salary</div>
                    <div>:</div>
                    <div>{employee.salary}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 mt-5">
              <div className="flex flex-col w-[46%] h-[22rem] bg-red-400">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Personal information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Date of Birth</div>
                    <div>:</div>
                    <div>{employee.dob}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Marital status</div>
                    <div>:</div>
                    <div>{employee.marialStatus}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Address</div>
                    <div>:</div>
                    <div className="w-[150px]">{employee.address}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Spouse Name</div>
                    <div>:</div>
                    <div>{employee.spouseName ? employee.spouseName : "-"}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Father Name</div>
                    <div>:</div>
                    <div>{employee.fatherName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Mother Name</div>
                    <div>:</div>
                    <div>{employee.motherName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Emergency Contact</div>
                    <div>:</div>
                    <div>{employee.emergencyNum}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">EPF Number</div>
                    <div>:</div>
                    <div>{employee.epfNum}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="emp-details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[177vh] md:h-[100px] mt-10 rounded-t-xl"></div>
          <div className="flex bg-white pl-10 pt-5 md:w-[177vh] md:h-[15vh] rounded-b-xl"></div>
        </div>
        <div className="emp-details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[177vh] md:h-[100px] mt-10 rounded-t-xl"></div>
          <div className="flex bg-white pl-10 pt-5 md:w-[177vh] md:h-[15vh] rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
