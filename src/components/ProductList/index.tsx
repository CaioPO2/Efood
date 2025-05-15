import Product from '../Product'
import { List, Container } from './styles'
import sushi from '../../assets/images/imagem-sushi.png'
import macarrao from '../../assets/images/imagem-macarrao.png'

const ProductList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          image={sushi}
          title="Hioki Sushi"
          nota="4.9"
          infos={['Destaque da semana', 'japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <Product
          image={macarrao}
          title="La Dolce Vita Trattoria"
          nota="4.6"
          infos={['italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          image={macarrao}
          title="La Dolce Vita Trattoria"
          nota="4.6"
          infos={['italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          image={macarrao}
          title="La Dolce Vita Trattoria"
          nota="4.6"
          infos={['italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          image={macarrao}
          title="La Dolce Vita Trattoria"
          nota="4.6"
          infos={['italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
        <Product
          image={macarrao}
          title="La Dolce Vita Trattoria"
          nota="4.6"
          infos={['italiana']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
