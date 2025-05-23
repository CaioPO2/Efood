import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-logo.png'
import instagram from '../../assets/images/instagram-logo.png'
import twitter from '../../assets/images/twitter-logo.png'

import {
  ContainerFooter,
  FooterText,
  FooterLogo,
  FacebookLogo,
  FooterElements
} from './styles'

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <FooterElements>
        <FooterLogo src={logo} alt="logo" />
      </FooterElements>
      <FooterElements>
        <img src={instagram} alt="logo-instagram" />
        <FacebookLogo src={facebook} alt="logo-facebook" />
        <img src={twitter} alt="logo-twitter" />
      </FooterElements>
      <FooterElements>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </FooterText>
      </FooterElements>
    </div>
  </ContainerFooter>
)

export default Footer
