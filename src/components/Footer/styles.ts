import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  background-color: ${cores.rosa};
  height: 300px;
`

export const FooterElements = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`

export const FooterLogo = styled.img`
  padding-top: 40px;
  padding-bottom: 32px;
`

export const FacebookLogo = styled.img`
  padding-left: 8px;
  padding-right: 8px;
`

export const FooterText = styled.p`
  color: ${cores.rosaEscuro};
  font-size: 10px;
  font-weight: 400;
  padding-top: 80px;
  padding-bottom: 40px;
  max-width: 480px;
  text-align: center;
`
