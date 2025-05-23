import Tag from '../Tag'
import estrela from '../../assets/images/estrela-nota.png'
import Button from '../Button'
import {
  Card,
  Image,
  Descricao,
  Titulo,
  Nota,
  CardContainer,
  Infos,
  ContainerDescription,
  ContainerHead,
  ContainerNota,
  ImageNota
} from './styles'

type Props = {
  title: string
  nota: string
  description: string
  infos: string[]
  image: string
}

const Store = ({ description, image, infos, nota, title }: Props) => (
  <CardContainer>
    <Card>
      <Image src={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ContainerDescription>
        <ContainerHead>
          <Titulo>{title}</Titulo>
          <ContainerNota>
            <Nota>{nota}</Nota>
            <ImageNota src={estrela} />
          </ContainerNota>
        </ContainerHead>
        <div>
          <Descricao>{description}</Descricao>
          <Button type="link" to="/perfil">
            Saiba Mais
          </Button>
        </div>
      </ContainerDescription>
    </Card>
  </CardContainer>
)

export default Store
