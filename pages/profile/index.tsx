import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import AccessDenied from '../../components/access-denied'
import Head from 'next/head'
import Image from 'next/image'
// import { verifyJwt } from '../../lib/jwt'

const Profile = () => {
  const { data: session, status, update } = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = { ...session }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [token, setToken] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [ validLoggedIn, setvalidLoggedIn ] = useState<any>(' ')

  useEffect(() => {
    if (session !== undefined) {
      const fetchData = async () => {
        const res = await fetch('/api/helpers/getToken')
        const result = await res.json()
        // const tell = verifyJwt(`${result}`)
        // setvalidLoggedIn(tell)
        setToken(result)

        return result
      }
      fetchData()
    }
  }, [session])

  if (token) {
    console.log('Raw Token ', token)
  } else {
    console.log('No Raw Token Found ', token)
  }

  console.log('User Token ', user)

  if (status === 'unauthenticated' && !user) {
    return (
      <Layout>
        <>
          <Head>
            <title>Access Denied</title>
            <meta name="description" content="Access Denied" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AccessDenied />
        </>
      </Layout>
    )
  }
  return (
    <Layout>
      <>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Contact us page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Profile</h1>
          <br />
          <figure id="profile-image">
            {user?.picture === ' ' ? (
              <Image
                src={'/images/placeholder.jpg'} // not included as database field yet.
                className="user-image"
                alt="Profile"
                width="200"
                height="200"
              />
            ) : (
              <Image
                src={user?.picture}
                className="user-image"
                alt="Profile"
                width="200"
                height="200"
              />
            )}
            <figcaption id="profile-image-text">
              <h3 className="profile-image-text-title">Username</h3>
              <p>{user ? (user.name as string) : 'username not found'}</p>
              <h3 className="profile-image-text-title">Email</h3>
              <p>{user ? (user.email as string) : 'useremail not found'}</p>
              <br />
              <p>
                <em>You must be signed in to see responses.</em>
              </p>
              <br />
              <button className="product-page-btn" onClick={() => update()}>
                Update Session
              </button>
            </figcaption>
          </figure>
          {/*
           * Only trigger a session update, assuming you already updated the value server-side.
           * All `useSession().data` references will be updated.
           */}
        </main>
      </>
    </Layout>
  )
}

export default Profile
