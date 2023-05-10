"use client";

import { ReactNode, createContext, useState } from "react";

export const TestContext = createContext({});

interface ITestProviderPros {
  children: ReactNode;
}

export default function TestProvider({ children }: ITestProviderPros) {
  const [teste, setTeste] = useState("olá");

  return (
    <TestContext.Provider value={{ teste }}>{children}</TestContext.Provider>
  );
}
