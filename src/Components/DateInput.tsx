// Importa o módulo React da biblioteca "react"
import React from "react";

// Define um objeto contendo estilos CSS comuns para serem compartilhados
// em diferentes partes do componente
const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

// Define um objeto contendo estilos CSS específicos para o rótulo (label)
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle, // Combina os estilos gerais com os estilos específicos para rótulo
};

// Define um objeto contendo estilos CSS específicos para o campo de entrada (input)
const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle, // Combina os estilos gerais com os estilos específicos para campo de entrada
};

// Define um componente funcional chamado DateInput, que aceita propriedades
// (props) desestruturadas, incluindo uma propriedade 'label' do tipo string
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    // Renderiza um elemento <div> contendo um rótulo (label) e um campo de entrada (input)
    <div>
      {/* Renderiza o rótulo (label) com o estilo labelStyle e uma associação ao campo de entrada pelo id */}
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      {/* Renderiza o campo de entrada (input) do tipo 'date' com o estilo inputStyle e as propriedades repassadas */}
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

// Exporta o componente DateInput para ser utilizado em outros lugares da aplicação
export default DateInput;

/*
Resumo e explicação

- O código define um componente React chamado DateInput que consiste em um rótulo (label) e um campo de entrada (input) do tipo "date".
- São definidos estilos CSS para o componente, divididos em estilos gerais (generalStyle), estilos específicos para rótulo (labelStyle), e estilos específicos   para campo de entrada (inputStyle).
- O componente aceita uma propriedade label e utiliza essa propriedade para associar o rótulo ao campo de entrada pelo atributo htmlFor.
- Os estilos são aplicados aos elementos HTML usando a propriedade style.
- O componente DateInput é exportado para que possa ser usado em outras partes da aplicação.
*/
