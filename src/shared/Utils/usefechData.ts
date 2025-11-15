import { useState, useEffect } from "react";
import { supaBase } from "../../api/supabase/clienst";

type Filters = {
  [key: string]: string | number | boolean;
};

const usefechData = <T>(tableName: string, filters?: Filters) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      let query = supaBase.from(tableName).select("*");

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            query = query.eq(key, value);
          }
        });
      }

      const { data: fetchedData, error: fetchError } = await query;

      if (fetchError) {
        throw new Error(fetchError.message || `Fallo al cargar ${tableName}`);
      }

      setData(fetchedData);
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tableName) {
      fetchData();
    }
  }, [tableName, JSON.stringify(filters)]);

  return { data, isLoading, error, refresh: fetchData };
};

export default usefechData;
