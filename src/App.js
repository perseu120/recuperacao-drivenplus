import TelaCadastro from "./component/telaCadastro/TelaCadastro.js";
import TelaLogin from "./component/telaLogin/TelaLogin.js";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Plano from "./component/plano/Plano.js";
import AssinarPlano from "./component/assinarPlano/AssinarPlano.js";
import TelaInicial from "./component/telaInicial/TelaInicial.js";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin/>} />
          <Route path="/sign-up" element={<TelaCadastro/>} />
          <Route path="/plano" element={<TelaInicial/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
