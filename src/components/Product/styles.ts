import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  background-color: ${cores.rosaEscuro};
  max-width: 320px;
  width: 100%;
  margin-bottom: 32px;
`

export const Container = styled.div`
  padding: 6px;
`

export const ProductImage = styled.img`
  width: 100%;
`

export const ProductButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  border: none;
  height: 24px;
`

export const ProductTitle = styled.h2`
  color: ${cores.rosa};
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const ProductInfo = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
  padding-bottom: 8px;
`
