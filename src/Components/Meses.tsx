// Importa o componente MesBtn do arquivo local "./MesBtn"
import MesBtn from "./MesBtn";

// Define um componente funcional chamado Meses
const Meses = () => {
  // Retorna um elemento <div> contendo quatro botões MesBtn com diferentes valores de propriedade (n)
  return (
    <div className="flex">
      {/* Renderiza um componente MesBtn para representar o mês atual menos 3 */}
      <MesBtn n={-3} />
      {/* Renderiza um componente MesBtn para representar o mês atual menos 2 */}
      <MesBtn n={-2} />
      {/* Renderiza um componente MesBtn para representar o mês atual menos 1 */}
      <MesBtn n={-1} />
      {/* Renderiza um componente MesBtn para representar o mês atual */}
      <MesBtn n={0} />
    </div>
  );
};

// Exporta o componente Meses para ser utilizado em outras partes da aplicação
export default Meses;

/*
Resumo e explicação

O código define um componente funcional chamado Meses que representa um conjunto de botões associados a meses específicos.
Importa o componente MesBtn do arquivo local "./MesBtn".
Renderiza quatro instâncias do componente MesBtn com diferentes valores de propriedade n para representar os meses atual, anterior e os dois meses anteriores.
O componente é encapsulado em um elemento <div> com a classe "flex".
É exportado para ser utilizado em outras partes da aplicação.
*/
