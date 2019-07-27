import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { foo } from '../../store/foo/actions'
import { Container } from './styles'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(foo())
  }, [dispatch])

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}

export default Home
