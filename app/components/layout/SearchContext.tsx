"use client";

import { createContext, useContext, useState } from "react";

type SearchContextValue = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
}

export function useGlobalSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useGlobalSearch must be used inside SearchProvider");
  return context;
}
