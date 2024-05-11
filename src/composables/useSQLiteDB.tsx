import { useEffect, useRef, useState } from "react";
import {
  SQLiteDBConnection,
  SQLiteConnection,
  CapacitorSQLite,
} from "@capacitor-community/sqlite";

const useSQLiteDB = () => {
  const db = useRef<SQLiteDBConnection>()
  const sqlite = useRef<SQLiteConnection>()
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    
    const initializeDB = async () => {

      if (sqlite.current) return

      sqlite.current = new SQLiteConnection(CapacitorSQLite)
      const ret = await sqlite.current.checkConnectionsConsistency()
      const isConn = (await sqlite.current.isConnection("db_vite", false)).result

      if (ret.result && isConn) {}
    }

  }, [])

  const performSQLAction = async (databaseFunction: any) => {};

  return {
    initialized,
    performSQLAction,
  };
};

export default useSQLiteDB;
