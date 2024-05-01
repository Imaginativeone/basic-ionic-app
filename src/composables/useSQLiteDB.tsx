import { useState } from 'react'

const useSQLiteDB = () => {

  const [ initialized, setInitialized ] = useState<boolean>(false)

  const performSQLAction = async () => {}

  return {
    initialized,
    performSQLAction
  }
}

export default useSQLiteDB
