// Importa o componente DateInput do arquivo "./DateInput"
import DateInput from "./DateInput";

// Importa o hook useData do arquivo "../Context/DataContext"
import { useData } from "../Context/DataContext";

// Define um componente funcional chamado DateRange
const DateRange = () => {
  // Utiliza o hook useData para obter as variáveis de estado (inicio, setInicio, final, setFinal)
  const { inicio, setInicio, final, setFinal } = useData();

  // Retorna um formulário contendo dois componentes DateInput para entrada de datas
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      {/* Renderiza um componente DateInput para o início com propriedades específicas */}
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {/* Renderiza um componente DateInput para o final com propriedades específicas */}
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

// Exporta o componente DateRange para ser utilizado em outros lugares da aplicação
export default DateRange;

/*
Resumo e explicação

- O código importa o componente DateInput de um arquivo local chamado "DateInput" e o hook useData de um contexto chamado "DataContext".
- O componente DateRange utiliza o hook useData para obter informações de estado relacionadas às datas de início e final.
- O componente renderiza um formulário contendo dois componentes DateInput, um para a data de início e outro para a data final.
- Cada DateInput é configurado com propriedades específicas, como label, value, e onChange, para interagir com o contexto de dados.
- O evento onSubmit do formulário é configurado para evitar o comportamento padrão do envio do formulário (prevenção do recarregamento da página).
- O componente DateRange é exportado para ser usado em outras partes da aplicação.
*/
