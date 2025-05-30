import { useEffect, useState } from "react";

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  onSubmit,
  clientData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
    rate: "",
    isactive: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleStatusChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      isactive: e.target.value === "Active",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        ...formData,
        rate: Number(formData.rate),
      });
      onClose();
    } catch (err) {
      console.error(
        `Error ${mode === "edit" ? "updating" : "adding"} client`,
        err
      );
    }
  };

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setFormData({
        name: clientData.name,
        email: clientData.email,
        job: clientData.job,
        rate: clientData.rate,
        isactive: clientData.isactive,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        job: "",
        rate: "",
        isactive: false,
      });
    }
  }, [mode, clientData]);

  if (!isOpen) return null;

  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === "edit" ? "Edit Client" : "Add New Client"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Job</span>
              </div>
              <input
                name="job"
                value={formData.job}
                onChange={handleChange}
                type="text"
                className="input input-bordered w-full"
              />
            </label>

            <div className="flex gap-4">
              <label className="form-control flex-1">
                <div className="label">
                  <span className="label-text">Rate</span>
                </div>
                <input
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  type="number"
                  className="input input-bordered w-full"
                  min="0"
                  step="0.01"
                />
              </label>

              <label className="form-control flex-1">
                <div className="label">
                  <span className="label-text">Status</span>
                </div>
                <select
                  value={formData.isactive ? "Active" : "Inactive"}
                  onChange={handleStatusChange}
                  className="select select-bordered w-full"
                >
                  <option value="Inactive">Inactive</option>
                  <option value="Active">Active</option>
                </select>
              </label>
            </div>
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
