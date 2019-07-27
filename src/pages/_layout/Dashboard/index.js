import React from 'react'
import Header from '../../../components/Header'
import { Wrapper } from './styles'

function Dashboard({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default Dashboard
