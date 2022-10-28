import TablaClientes from "./components/TablaClientes";

function App() {
  return (
    <div className="container">
      <TablaClientes clienteId={(valor) => console.log(valor)} />
    </div>
  );
}
export default App;
