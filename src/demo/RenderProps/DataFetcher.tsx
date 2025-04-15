import { useEffect, useState } from "react";

type TDataFetcherProps<T> = {
  url: string;
  children: (props: {
    data: any;
    loading: boolean;
    error: string | null;
  }) => React.ReactNode;
};
function DataFetcher<T>({ url, children }: TDataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erreur réseau");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return children({data, loading, error});
}

export default DataFetcher;
