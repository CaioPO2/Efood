import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import StoreList from '../../components/StoreList'

export type StoreProduct = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => (
  <>
    <Hero />
    <StoreList />
    <Footer />
  </>
)

export default Home
