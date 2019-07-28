import React from 'react'
import Header from '../../../components/Header'
import { Wrapper, Container } from './styles'

function Dashboard({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Dashboard
