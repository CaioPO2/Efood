import pizza from '../../assets/images/imagem-pizza.png'
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductButton,
  Container
} from './styles'

const Product = () => (
  <ProductContainer>
    <Container>
      <ProductImage src={pizza} alt="pizza" />
      <ProductTitle>Pizza Marguerita</ProductTitle>
      <ProductInfo>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </ProductInfo>
      <ProductButton>Adicionar ao carrinho</ProductButton>
    </Container>
  </ProductContainer>
)

export default Product
