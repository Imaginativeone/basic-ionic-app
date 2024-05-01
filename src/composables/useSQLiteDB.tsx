import { useState } from 'react'

const useSQLiteDB = () => {

  const [ initialized, setInitialized ] = useState<boolean>(false)

  const performSQLAction = async (databaseFunction:any) => {}

  return {
    initialized,
    performSQLAction
  }
}

export default useSQLiteDB
