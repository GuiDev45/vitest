// Importa o módulo React da biblioteca "react"
import React from "react";

// Define uma função customizada useFetch que aceita um tipo genérico T e uma URL com opções
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  // Utiliza o hook useState para gerenciar o estado do dado, do carregamento e de erro
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Cria uma referência mutable para as opções de requisição
  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  // Utiliza o hook useEffect para realizar a lógica de requisição
  React.useEffect(() => {
    // Cria um controlador de aborto para cancelar a requisição se necessário
    const controller = new AbortController();
    const { signal } = controller;

    // Define uma função assíncrona fetchData para realizar a requisição
    const fetchData = async () => {
      // Inicia o estado de carregamento e reseta os estados de dado e erro
      setLoading(true);
      setData(null);

      try {
        // Realiza a requisição usando fetch, considerando as opções e o sinal de aborto
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });

        // Lança um erro se a resposta não for bem-sucedida
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        // Converte a resposta para JSON e atualiza o estado de dado se o sinal não foi abortado
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        // Atualiza o estado de erro se o sinal não foi abortado e ocorreu um erro
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        // Atualiza o estado de carregamento para false se o sinal não foi abortado
        if (!signal.aborted) setLoading(false);
      }
    };

    // Chama a função fetchData ao montar o componente
    fetchData();

    // Retorna uma função de limpeza que aborta a requisição ao desmontar o componente
    return () => {
      controller.abort();
    };
  }, [url]);

  // Retorna um objeto contendo o dado, o estado de carregamento e o erro
  return { data, loading, error };
}

// Exporta a função useFetch para ser utilizada em outros componentes
export default useFetch;

/*
Resumo e explicação

O código define uma função useFetch que utiliza os hooks useState e useEffect para realizar requisições HTTP.
A função retorna um objeto contendo o dado (data), o estado de carregamento (loading) e o erro (error).
Utiliza um controlador de aborto para cancelar a requisição caso o componente seja desmontado antes da conclusão.
A função fetchData é assíncrona e realiza a requisição usando o fetch, tratando a resposta e atualizando os estados correspondentes.
O hook useEffect é utilizado para chamar fetchData quando o componente é montado e abortar a requisição quando o componente é desmontado.
A função é exportada para ser utilizada em outros componentes que necessitem de lógica de requisição.
*/
