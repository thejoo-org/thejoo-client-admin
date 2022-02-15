import React, { useCallback, useEffect } from 'react'
import './App.css'
import { adminClient } from './lib/clients'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout'
import { SignIn, Users } from './pages'

const App = () => {
  const fetchUsers = useCallback(async () => {
    const { data } = await adminClient.get('/users')
    console.log(data)
  }, [])
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <Routes>
      <Route path="/main" element={<MainLayout />}>
        <Route index element={<h1>hello</h1>} />
        <Route path="/main/users" element={<Users />} />
        <Route path="/main/*" element={<h1>default</h1>} />
      </Route>
      <Route path="/">
        <Route path="/auth" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
