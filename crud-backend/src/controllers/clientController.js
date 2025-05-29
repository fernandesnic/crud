import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.erros("Error fetching clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClients(clientData);
    res.status(200).json(newClient);
  } catch (err) {
    console.erros("Error adding clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateClients = async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;
    const updatedClient = await clientService.updateClients(
      clientId,
      clientData
    );
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (err) {
    console.error("Error updating clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleted = await clientService.deleteClient(clientId);
    if (!deleted) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json();
  } catch (err) {
    console.error("Error deleting clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const searchClients = async (req, res) => {
  try {
    const searcTerm = req.query.q;
    const clients = await clientService.searchClients(searcTerm);
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error searching clients", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
