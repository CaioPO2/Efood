import { useEffect, useState } from 'react'

import Button from '../Button'
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductButton,
  Container,
  Modal,
  ModalContent,
  Image,
  ImageFechar,
  Title,
  Descricao
} from './styles'

import fechar from '../../assets/images/fechar.png'
import { StoreProduct } from '../../pages/Home'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [produtos, setProdutos] = useState<StoreProduct[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  if (!produtos) {
    return <div>Carregando ...</div>
  }

  return (
    <>
      {produtos.map(produto => (
          <ProductContainer key={produto.id}>
          <Container>
            {produto.cardapio.map(item => (
              <ProductImage src={item.foto} alt="pizza" />
              <ProductTitle>{item.nome}</ProductTitle>
              <ProductInfo>{item.descricao}</ProductInfo>
              <ProductButton onClick={() => setModalEstaAberto(true)}>
                Saiba Mais
              </ProductButton>
            ))}
          </Container>
        </ProductContainer>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent className="container">
            <div>
              <Image src={produtos?.cardapio.foto} alt="imagem pizza" />
            </div>
            <div>
              <Title>{produtos?.cardapio.nome}</Title>
              <ImageFechar
                onClick={() => setModalEstaAberto(false)}
                src={fechar}
                alt="clique para fechar"
              />
              <Descricao>{produtos?.cardapio.descricao}</Descricao>
              <Descricao>{produtos?.cardapio.porcao}</Descricao>
              <Button type="button">
                Adicionar ao carrinho: {formataPreco(produtos?.cardapio.preco)}
              </Button>
            </div>
          </ModalContent>
          <div
            onClick={() => setModalEstaAberto(false)}
            className="overlay"
          ></div>
        </Modal>
      ))}
    </>
  )
}

export default Product
