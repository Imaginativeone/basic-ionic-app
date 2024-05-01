import { useEffect, useState } from 'react'

import { SQLiteDBConnection } from '@capacitor-community/sqlite'
import useSQLiteDB from '../composables/useSQLiteDB'

import './Home.css'

type SQLitem = {
  id: number
  name: string
}

const Home = () => {

  // SQLite DB Hook
  const { initialized, performSQLAction } = useSQLiteDB()

  useEffect(() => {
    loadData()
  }, [initialized])

  const loadData = async () => {
    try {
      console.log('Data is being loaded here...');
    }
    catch (e) {
      console.log('Error loading data:', e)
    }
  }

  return (
    <div className='homepage'>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
