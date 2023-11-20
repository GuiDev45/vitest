// Importa os módulos BrowserRouter, Route, Routes da biblioteca "react-router-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importa os componentes Header, Sidenav do diretório "./Components"
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";

// Importa o componente DataContextProvider do diretório "./Context/DataContext"
import { DataContextProvider } from "./Context/DataContext";

// Importa os componentes Resumo, Vendas, Venda do diretório "./Pages"
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";

// Importa o arquivo de estilo "./Style.css"
import "./Style.css";

// Define um componente funcional chamado App
function App() {
  return (
    // Utiliza o BrowserRouter para criar um contexto de navegação baseado em roteamento
    <BrowserRouter>
      {/* Utiliza o DataContextProvider para prover o contexto de dados para a aplicação */}
      <DataContextProvider>
        {/* Renderiza a estrutura principal da aplicação */}
        <div className="container">
          {/* Renderiza o componente Sidenav para a navegação lateral */}
          <Sidenav />
          {/* Renderiza a seção principal da aplicação */}
          <main>
            {/* Renderiza o componente Header para o cabeçalho da página */}
            <Header />
            {/* Utiliza o componente Routes para definir as rotas da aplicação */}
            <Routes>
              {/* Define a rota para a página de Resumo */}
              <Route path="/" element={<Resumo />} />
              {/* Define a rota para a página de Vendas */}
              <Route path="/vendas" element={<Vendas />} />
              {/* Define a rota dinâmica para a página de detalhes da Venda */}
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

// Exporta o componente App para ser utilizado como ponto de entrada da aplicação
export default App;

/*
O código define o componente principal da aplicação chamado App.
Utiliza o BrowserRouter para criar um contexto de navegação baseado em roteamento.
Utiliza o DataContextProvider para prover o contexto de dados para a aplicação.
Renderiza a estrutura principal da aplicação, incluindo o Sidenav (navegação lateral), o Header (cabeçalho) e o conteúdo principal (main).
Utiliza o Routes para definir as rotas da aplicação.
Define rotas para as páginas de "Resumo", "Vendas", e detalhes de "Venda" usando o componente Route.
As páginas são renderizadas como elementos JSX correspondentes.
O componente App é exportado para ser utilizado como ponto de entrada da aplicação.
*/
