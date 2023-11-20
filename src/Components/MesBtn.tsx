// Importa o módulo React da biblioteca "react"
import React from "react";

// Importa o hook useData do arquivo "../Context/DataContext"
import { useData } from "../Context/DataContext";

// Define um objeto contendo estilos CSS para o componente MesBtn
const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

// Função que retorna o nome do mês com base no número do mês (n)
function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

// Função que formata uma data para o formato "YYYY-MM-DD"
function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

// Componente funcional MesBtn que recebe um número de mês (n) como propriedade
const MesBtn = ({ n }: { n: number }) => {
  // Utiliza o hook useData para obter a função setInicio e setFinal do contexto de dados
  const { setInicio, setFinal } = useData();

  // Função que define o intervalo de datas para o mês especificado
  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    // Calcula o primeiro e o último dia do mês
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Atualiza as datas de início e final no contexto de dados
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  // Retorna um botão com estilos definidos, que ao ser clicado chama a função setMes
  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

// Exporta o componente MesBtn para ser utilizado em outras partes da aplicação
export default MesBtn;

/*
Resumo e explicação

O código define um componente funcional chamado MesBtn que representa um botão associado a um mês específico.
Utiliza o hook useData para obter as funções setInicio e setFinal do contexto de dados.
Contém funções utilitárias nomeMes para obter o nome do mês e formatDate para formatar uma data.
O botão, quando clicado, chama a função setMes, que calcula o intervalo de datas para o mês especificado e atualiza as datas no contexto de dados.
O componente é estilizado com base no objeto style que contém estilos CSS.
É exportado para ser utilizado em outras partes da aplicação.
*/
