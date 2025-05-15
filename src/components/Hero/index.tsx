import logo from '../../assets/images/logo.png'
import imagemFundo from '../../assets/images/imagem-background.png'
import { HeroContainer, LogoContainer, TituloContainer, Titulo } from './styles'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${imagemFundo})` }}>
    <LogoContainer>
      <img src={logo} alt="logo Efood" />
    </LogoContainer>
    <TituloContainer>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </TituloContainer>
  </HeroContainer>
)

export default Hero
