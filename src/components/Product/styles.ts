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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .container {
    max-width: 1024px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
`

export const Image = styled.img`
  max-width: 280px;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 900;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  max-width: 656px;
  width: 100%;
`

export const ImageFechar = styled.img`
  position: relative;
  top: 8px;
  left: 1000px;
  max-width: 16px;
`
