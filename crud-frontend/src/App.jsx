import { useState, useEffect } from "react";
import "./App.css";
import ModalForm from "./components/Modalform";
import NavBar from "./components/Navbar";
import TableList from "./components/TableList";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      setTableData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching clients:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpen = (mode, client = null) => {
    setModalMode(mode);
    setClientData(client);
    setIsOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (modalMode === "add") {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          formData
        );
        setTableData((prev) => [...prev, response.data]);
      } else {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          formData
        );
        setTableData((prev) =>
          prev.map((client) =>
            client.id === clientData.id ? response.data : client
          )
        );
      }
      setIsOpen(false);
    } catch (error) {
      console.error(
        `Error ${modalMode === "add" ? "adding" : "updating"} client:`,
        error
      );
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este cliente?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/clients/${id}`);
      setTableData((prev) => prev.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Error deleting client:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />

      {error && <div className="error-message">Erro: {error}</div>}

      <TableList
        tableData={tableData}
        handleOpen={handleOpen}
        handleDelete={handleDelete}
        searchTerm={searchTerm}
      />

      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
        clientData={clientData}
      />
    </>
  );
}

export default App;
