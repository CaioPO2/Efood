import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
`

export const ButtonLinkContainer = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`
