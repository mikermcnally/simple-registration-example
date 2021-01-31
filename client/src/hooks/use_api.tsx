import React, { useState, useContext, createContext, useEffect } from "react";
import Fetcher from "../util/fetcher";
import { JSONSchema7 } from "json-schema";

interface IApiContext {
  schemas: { [key: string]: JSONSchema7 } | null;
  fetcher: Fetcher;
}

const ApiContext = createContext({} as IApiContext);

export function ProvideApi({ children }: { children: JSX.Element }) {
  const api = useProvideApi();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export const useApi = () => {
  return useContext(ApiContext);
};

function useProvideApi(): IApiContext {
  const fetcher = new Fetcher('localhost');

  const [schemas, setSchemas] = useState<{ [key: string]: JSONSchema7 } | null>(
    null,
  );

  useEffect(() => {
    if (schemas === null) {
      fetcher.get("/schemas").then((response) => setSchemas(response.schemas));
    }
  }, [fetcher, schemas]);

  return {
    schemas,
    fetcher,
  };
}
