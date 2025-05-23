import BannerImg from '../../assets/images/imagem-fundo-perfil.png'
import { BannerContainer, StoreType, StoreTitle } from './styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <StoreType>Italiana</StoreType>
      <StoreTitle>La Dolce Vita Trattoria</StoreTitle>
    </div>
  </BannerContainer>
)

export default Banner
