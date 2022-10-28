import { useEffect, useState } from "react";

function TablaClientes({ clienteId }) {
  const [clientes, setClientes] = useState([]);

  const obtenerClientes = async () => {
    const response = await fetch("http://localhost:3000/clientes");
    const data = await response.json();
    setClientes(data);
  };
  useEffect(() => {
    obtenerClientes();
  }, []);

  return (
    <div className="container">
      <table className="table table-hover">
        <thead className="table-success">
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} onDoubleClick={() => clienteId(cliente)}>
              <td>{cliente.dni}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaClientes;
