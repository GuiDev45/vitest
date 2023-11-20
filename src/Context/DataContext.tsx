// Importa o módulo React da biblioteca "react"
import React from "react";

// Importa o hook useFetch do arquivo "../Hooks/useFetch"
import useFetch from "../Hooks/useFetch";

// Cria um contexto chamado DataContext e define seu tipo como DataContext ou null
const DataContext = React.createContext<IDataContext | null>(null);

// Cria um hook customizado useData que utiliza o contexto DataContext
export const useData = () => {
  // Obtém o contexto DataContext
  const context = React.useContext(DataContext);
  // Lança um erro se o contexto não estiver disponível
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  // Retorna o contexto
  return context;
};

// Função utilitária que obtém a data de n dias atrás
function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

// Componente DataContextProvider que provê o contexto DataContext para seus componentes filhos
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  // Utiliza o hook useState para gerenciar as datas de início e final
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate(0));

  // Utiliza o hook useFetch para obter dados de vendas com base nas datas de início e final
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  // Renderiza o componente DataContext.Provider, provendo valores específicos para o contexto
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {/* Renderiza os componentes filhos dentro do contexto */}
      {children}
    </DataContext.Provider>
  );
};

/*
Resumo e explicação

O código define um contexto chamado DataContext que é utilizado para compartilhar dados entre componentes.
Cria um hook personalizado chamado useData que utiliza o contexto DataContext para fornecer acesso aos dados.
A função utilitária getDate é usada para obter uma data de n dias atrás.
O componente DataContextProvider é responsável por fornecer os dados do contexto aos seus componentes filhos.
Utiliza o hook useFetch para obter dados de vendas a partir de uma API com base nas datas de início e final.
Utiliza o hook useState para gerenciar as datas de início e final.
Os valores relevantes (dados, loading, erro, datas de início e final) são fornecidos como valores do contexto DataContext.Provider.
O componente é estilizado com o hook useState e é exportado para ser utilizado em outras partes da aplicação.
*/
