import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const PerfilContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PerfilLink = styled(Link)`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 900;
  display: flex;
  text-decoration: none;
`

export const Logo = styled.img`
  padding: 64px 0;
`

export const Carrinho = styled.p`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 900;
  display: flex;
`
