import { useState } from "react";
import "./App.css";
import ModalForm from "./components/Modalform";
import NavBar from "./components/Navbar";
import TableList from "./components/Tablelist";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalModel] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalModel(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
    }
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} />
      <TableList handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
      />
    </>
  );
}

export default App;
