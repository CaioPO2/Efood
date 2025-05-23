import Product from '../Product'
import { List, ProductListContainer } from './styles'

const ProductList = () => (
  <ProductListContainer>
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </ProductListContainer>
)

export default ProductList
