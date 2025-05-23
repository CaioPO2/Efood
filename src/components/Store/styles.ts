import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLinkContainer } from '../Button/styles'

export const CardContainer = styled.div`
  padding-bottom: 48px;
`

export const Card = styled.div`
  background-color: #fff;
  position: relative;
`

export const Image = styled.img`
  max-width: 470px;
  width: 100%;
`

export const Titulo = styled.h3`
  display: block;
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 700;
  padding-top: 8px;
  padding-left: 8px;
`

export const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`

export const ContainerNota = styled.div`
  display: flex;
`

export const Nota = styled.p`
  color: ${cores.rosaEscuro};
  font-size: 18px;
  font-weight: 700;
  padding-right: 8px;
  padding-top: 8px;
`

export const ImageNota = styled.img`
  padding-right: 6px;
  padding-top: 6px;
`

export const Descricao = styled.p`
  color: ${cores.rosaEscuro};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-left: 8px;
  padding-bottom: 16px;
`

export const ContainerDescription = styled.div`
  border: 1px solid ${cores.rosaEscuro};
  width: 100%;
  height: 180px;

  ${ButtonLinkContainer} {
    padding: 6px;
    margin: 8px 8px;
  }

  ${TagContainer} {
    padding-left: 8px;
  }
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`
