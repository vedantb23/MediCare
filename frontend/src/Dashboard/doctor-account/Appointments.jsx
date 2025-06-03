import React from 'react'

const Appointments = ({appointments}) => {
    return (
        <>
            <div className="h-[20px]"></div>
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-6 ">
                Name
              </th>
              <th scope="col" className="px-3 py-6 ">
                Gender
              </th>{" "}
              <th scope="col" className="px-3 py-6 ">
                Payment
              </th>{" "}
              <th scope="col" className="px-3 py-6 ">
                Price
              </th>{" "}
              <th scope="col" className="px-3 py-6 ">
                Booked On
              </th>
            </tr>
                </thead>
                
                <tbody>
                    {
                        appointments?.map(item => {
                            <tr key={item._id}>
                              <th
                                scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                              >
                                <img
                                  src={item.user.photo}
                                  className="w-10 h-10 rounded-full"
                                  alt=""
                                />
                                <div className="pl-3">
                                  <div className="text-base font-semibold ">
                                    {item.user.name}
                                  </div>
                                  <div className="text-normal text-gray-500 ">
                                    {item.user.email}
                                  </div>
                                </div>
                              </th>
                              <td className="px-6 py-4 ">{item.user.gender}</td>
                              <td className="px-6 py-4 ">
                                {item.isPaid && (
                                  <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 ">
                                      PAID
                                    </div>
                                  </div>
                                )}
                                {!item.isPaid && (
                                  <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 ">
                                      UNPAID
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td className="px-6 py-4 ">{item.ticketPrice}</td>
                              <td className="px-6 py-4 ">{item.createdAt}</td>
                            </tr>;
                        })
                    }
                </tbody>
        </table>
      </>
    );
}

export default Appointments
