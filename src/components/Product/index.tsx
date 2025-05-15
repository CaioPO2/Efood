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

const Product = ({ description, image, infos, nota, title }: Props) => (
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
        <Descricao>{description}</Descricao>
        <Button type="link">Saiba Mais</Button>
      </ContainerDescription>
    </Card>
  </CardContainer>
)

export default Product
