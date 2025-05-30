import { useState } from "react";

export default function TableList({
  handleOpen,
  tableData,
  handleDelete,
  searchTerm,
}) {
  const [error] = useState(null);

  const filteredData = tableData.filter((client) => {
    const term = searchTerm.toLowerCase();
    return (
      client.name.toLowerCase().includes(term) ||
      client.email.toLowerCase().includes(term) ||
      client.job?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="overflow-x-auto mt-10">
      {error && <div className="alert alert-error mb-4">{error}</div>}

      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((client) => (
            <tr key={client.id} className="hover">
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <span
                  className={`badge ${
                    client.isactive ? "badge-primary" : "badge-outline"
                  }`}
                >
                  {client.isactive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="flex gap-2">
                <button
                  onClick={() => handleOpen("edit", client)}
                  className="btn btn-sm btn-secondary"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(client.id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
