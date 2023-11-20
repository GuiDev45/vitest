// Importa o módulo React da biblioteca "react"
import React from "react";

// Importa os componentes DateRange e Meses dos arquivos locais "./DateRange" e "./Meses" respectivamente
import DateRange from "./DateRange";
import Meses from "./Meses";

// Importa o hook useLocation do módulo "react-router-dom"
import { useLocation } from "react-router-dom";

// Define um componente funcional chamado Header
const Header = () => {
  // Utiliza o estado local para armazenar o título do cabeçalho
  const [title, setTitle] = React.useState("Resumo");

  // Obtém a localização atual usando o hook useLocation
  const location = useLocation();

  // Efeito colateral que atualiza o título com base na rota atual quando a localização muda
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);

  // Retorna o conteúdo do cabeçalho, incluindo os componentes DateRange e Meses
  return (
    <header className="mb">
      <div className="daterange mb">
        {/* Renderiza o componente DateRange */}
        <DateRange />
        {/* Renderiza um elemento <h1> com a classe "box bg-3" contendo o título dinâmico */}
        <h1 className="box bg-3">{title}</h1>
      </div>
      {/* Renderiza o componente Meses */}
      <Meses />
    </header>
  );
};

// Exporta o componente Header para ser utilizado em outras partes da aplicação
export default Header;

/*
Resumo e explicação

O código define um componente funcional chamado Header que representa o cabeçalho da aplicação.
Utiliza o hook useLocation do react-router-dom para obter informações sobre a localização (rota) atual.
Usa o estado local (title) para armazenar dinamicamente o título do cabeçalho.
Um efeito colateral (useEffect) é utilizado para monitorar mudanças na localização e ajustar o título com base na rota atual.
Renderiza os componentes DateRange e Meses no cabeçalho.
O título do cabeçalho e o título da página são dinamicamente atualizados com base na rota.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
