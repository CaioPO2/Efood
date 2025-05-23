import { Link } from 'react-router-dom'

import imagemFundo from '../../assets/images/imagem-background.png'
import logo from '../../assets/images/logo.png'
import { PerfilContainer, PerfilLink, Logo, Carrinho } from './styles'

const HeroPerfil = () => (
  <PerfilContainer style={{ backgroundImage: `url(${imagemFundo})` }}>
    <div className="container">
      <PerfilLink to="/">Restaurantes</PerfilLink>
      <Link to="/">
        <Logo src={logo} alt="logo Efood" />
      </Link>
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </div>
  </PerfilContainer>
)

export default HeroPerfil
