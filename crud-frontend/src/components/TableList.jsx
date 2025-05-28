export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Jonh Doe",
      email: "Jong.Doe@gmail.com",
      job: "Cooker",
      rate: "100",
      isactive: true,
    },
    {
      id: 2,
      name: "Jonh1 Doe",
      email: "Jong1.Doe@gmail.com",
      job: "Cooker1",
      rate: "101",
      isactive: true,
    },
    {
      id: 3,
      name: "Jonh2 Doe",
      email: "Jong2.Doe@gmail.com",
      job: "Cooker2",
      rate: "102",
      isactive: false,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}
            {clients.map((client) => (
              <tr>
                <th>{client.id}</th>
                <th>{client.name}</th>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive
                        ? `btn-primary`
                        : `btn-outline btn-primary`
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOpen("edit")}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
