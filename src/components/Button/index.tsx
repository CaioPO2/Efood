import { ButtonContainer, ButtonLinkContainer } from './styles'

export type Props = {
  type: 'button' | 'link'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, type, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLinkContainer to={to as string}>{children}</ButtonLinkContainer>
}

export default Button
