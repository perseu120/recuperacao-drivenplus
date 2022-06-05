import TelaCadastro from "./component/telaCadastro/TelaCadastro.js";
import TelaLogin from "./component/telaLogin/TelaLogin.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./component/contexts/UseContext.js";
import EscolhaPlano from "./component/escolhaPlano/EscolhaPlano.js"
import AssinarPlano from "./component/assinarPlano/AssinarPlano.js";
import TelaInicial from "./component/telaInicial/TelaInicial.js";
import { useState } from "react";
function App() {

  const [token, setToken] = useState(null);
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const [dadosPlano, setDadosPlano] = useState(null);

  return (
    <div className="App">

      <UserContext.Provider value={{ token, setToken, dadosUsuario, setDadosUsuario, dadosPlano, setDadosPlano }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/sign-up" element={<TelaCadastro />} />
            <Route path="/subscriptions" element={<EscolhaPlano />} />
            <Route path="/subscriptions/:id" element={<AssinarPlano />} />
            <Route path="/home" element={<TelaInicial />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
