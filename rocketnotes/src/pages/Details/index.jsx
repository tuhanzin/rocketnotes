import { Container } from "./styles"
import { Button } from "../../components/button"

export function Details() {
  return(
    <Container>
    <h1>hello world!</h1>
    <Button title="Entrar" loading/>
    <Button title="Cadastrar"/>
    <Button title="Voltar"/>
    </Container>
  )
}