import type { NextPage, NextPageContext } from 'next'
import { useEffect } from "react";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import styled from "styled-components"


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  column-gap:10px;
  height:100vh;
  `
const SignoutBtn = styled.button`
  border:none;
  cursor:pointer
`
const ProfilePic = styled.img`  
  border-radius:50%;
`


const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter()
  useEffect(() => {
    console.log(status)
    if (status !== "authenticated" && status !== "loading") {
      router.push("/login")
    }
  }, [status])

  console.log(session?.user)

  return (
    <Container>
      <h1>welcome {session?.user?.name}</h1>
      <ProfilePic src={session?.user?.image} alt="profile picture"></ProfilePic>
      <SignoutBtn onClick={signOut}>
        Signout
      </SignoutBtn>
    </Container>
  )
}

export default Home
