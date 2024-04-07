import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import AccessDenied from '../../components/access-denied'
import Head from 'next/head'
import Image from 'next/image'

const Profile = () => {
  const { data: session, status, update } = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cookies, setCookies] = useState<any>(null)

  useEffect(() => {
    if (session !== undefined) {
      const fetchData = async () => {
        const res = await fetch('/api/helpers/cookiegetter')
        const result = await res.json()
        setCookies(result)
        return result
      }
      fetchData()
    }
  }, [session])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = { ...session }

  console.log(cookies)

  if (status === 'unauthenticated' && session === null) {
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
            {user?.image !== ' ' ? (
              <Image
                // src={user.picture} // not included as database field yet.
                src={'/images/placeholder.jpg'}
                alt="Profile"
                width="200"
                height="200"
              />
            ) : (
              <Image
                src={user.image}
                className="user-image"
                alt="Profile"
                width="200"
                height="200"
              />
            )}
            <figcaption id="profile-image-text">
              <p>
                Username :{' '}
                {user ? (user?.name as string) : 'username not found'}
              </p>
              <br />
              <p>
                Email :{user ? (user?.email as string) : 'useremail not found'}
              </p>
              <br />
              <p>
                <em>You must be signed in to see responses.</em>
              </p>
            </figcaption>
          </figure>
          {/*
           * Only trigger a session update, assuming you already updated the value server-side.
           * All `useSession().data` references will be updated.
           */}
          <button onClick={() => update()}>Edit Cookie</button>
        </main>
      </>
    </Layout>
  )
}

export default Profile
