import { useState } from "react";
//onSubmit
export default function ModalForm({ isOpen, onClose, mode }) {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}{" "}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}

            <label className="input input-borderes w-full my-4 flex items-center gap-2">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="grow"
              />
            </label>
            <label className="input input-borderes w-full my-4 flex items-center gap-2">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
              />
            </label>
            <label className="input input-borderes w-full my-4 flex items-center gap-2">
              Job
              <input
                value={job}
                onChange={(e) => setJob(e.target.value)}
                type="text"
                className="grow"
              />
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input input-borderes mr-4 my-4  items-center gap-2">
                Rate
                <input
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  type="number"
                  className="grow"
                />
              </label>
              <select
                value={status ? "Active" : "Inactive"}
                className="select select-borderes  mt-4 max-w-xs"
                onChange={handleStatusChange}
              >
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-sucess">
              {" "}
              {mode === "edit" ? "Save Changes" : "Add Client"}{" "}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
