import { useEffect, useState } from 'react'

import { SQLiteDBConnection } from '@capacitor-community/sqlite'
import useSQLiteDB from '../composables/useSQLiteDB'

type SQLitem = {
  id: number
  name: string
}

const Home = () => {

  // SQLite DB Hook
  const { initialized, performSQLAction } = useSQLiteDB()

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
