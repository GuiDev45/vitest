// Importa o módulo React da biblioteca "react"
import React from "react";

// Define um objeto contendo estilos CSS para o componente Loading
const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s infinite", // Adiciona uma animação chamada "spin" de 1 segundo, repetida infinitamente
};

// Define um componente funcional chamado Loading
const Loading = () => {
  // Retorna um elemento <div> com os estilos definidos para criar um efeito de carregamento
  return (
    <div style={style}>
      {/* Define estilos de animação usando uma tag <style> */}
      <style>
        {`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};

// Exporta o componente Loading para ser utilizado em outras partes da aplicação
export default Loading;

/*
Resumo e explicação

O código define um componente funcional chamado Loading que representa um indicador de carregamento.
Utiliza estilos CSS, armazenados em um objeto style, para criar a aparência do indicador de carregamento.
Adiciona uma animação chamada "spin" que faz a div girar 360 graus continuamente, criando um efeito visual de carregamento.
Os estilos de animação são definidos dentro de uma tag <style> diretamente no JSX.
O componente é exportado para ser utilizado em outras partes da aplicação.
*/
