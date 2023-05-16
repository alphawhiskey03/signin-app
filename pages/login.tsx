import styled from "styled-components"
import { useSession, signIn, signOut } from "next-auth/react"


const Container = styled.div`
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;

`

const Button = styled.button`
  outline:none;
  border:none;
  cursor:pointer;
`
const Login = () => {

  const { data: session, status } = useSession()

  return (
    <Container>
      <h1>Sigin options</h1>
      <Button onClick={() => signIn("github", {
        redirect: false,
        callbackUrl: "/"
      })} > Singin with github</Button>
    </Container >
  )

}
export default Login