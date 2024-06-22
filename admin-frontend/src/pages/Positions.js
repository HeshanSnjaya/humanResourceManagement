import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import PositionForm from "../components/positions/PositionForm";
import UpdatePosition from "../components/positions/UpdatePosition";
import { getAllPositions } from "../Services/PositionsAPi";

const Positions = () => {
  const [posAdd, setPosAdd] = useState(false);
  const [posUpdate, setPosUpdate] = useState(false);

  const handleAddClick = () => {
    setPosAdd(true);
  };

  const handleAddCloseClick = () => {
    setPosAdd(false);
  };

  const handleUpdateClick = () => {
    setPosUpdate(true);
  };

  const handleUpdateCloseClick = () => {
    setPosUpdate(false);
  };

  const [positions, setPositions] = useState();

  useEffect(() => {
    const fetchPositions = async () => {
      const fetched = await getAllPositions();
      setPositions(fetched);
    };

    fetchPositions();
  }, []);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Positions" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleAddClick}
          >
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
                {positions !== undefined ? (
                  positions.map((pos, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {pos.positionName}
                        </td>
                        <td className="px-6 py-4">{pos.description}</td>

                        <td className="px-6 py-4">
                          <div
                            className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md"
                            onClick={handleUpdateClick}
                          >
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
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500 font-bold"
                    >
                      Currently no positions
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {posAdd && <PositionForm closeModal={handleAddCloseClick} />}
            {posUpdate && (
              <UpdatePosition closeModal={handleUpdateCloseClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
