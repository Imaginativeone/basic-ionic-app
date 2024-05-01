import { useEffect, useState } from 'react'

import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'
import useSQLiteDB from '../composables/useSQLiteDB'

import './Home.css'

type SQLitem = {
  id: number
  name: string
}

const Home = () => {

  const [items, setItems] = useState<Array<SQLitem>>()

  // SQLite DB Hook
  const { initialized, performSQLAction } = useSQLiteDB()

  useEffect(() => {
    loadData()
  }, [initialized])

  const loadData = async () => {
    try {
      console.log('Data is being loaded here...');

      // query the database
      performSQLAction(async (db: SQLiteDBConnection | undefined) => {
        const selectionResponse = await db?.query(`SELECT * FROM test`)
        if (selectionResponse) {
          setItems(selectionResponse.values)
        }
      })
    }
    catch (error) {
      console.log('Error loading data:', error)
      alert((error as Error).message)
      setItems([])
    }
  }

  return (
    <div className='homepage'>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
