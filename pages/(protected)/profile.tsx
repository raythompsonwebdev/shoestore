import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import AccessDenied from '../../components/access-denied'
import Head from 'next/head'
import Image from 'next/image'

export default function Profile() {
  const { data: session, status } = useSession()

  const [content, setContent] = useState<any>({})


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  console.log(content)

  // If no session exists, display access denied message
  if (status === 'unauthenticated') {
    // if (!content) {
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
  } else {
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
              {content.user?.image ? (
                <Image
                  src={content?.image}
                  className="user-image"
                  alt="Profile"
                  width="200"
                  height="200"
                />
              ) : (
                <Image
                  src={'/images/placeholder.jpg'}
                  alt="Profile"
                  width="200"
                  height="200"
                />
              )}
              <figcaption id="profile-image-text">
                <p>Username : {content?.name as string}</p>
                <br />
                <p>Email :{content?.email as string}</p>
                <h1>API Example</h1>
                <p>
                  The examples below show responses from the example API
                  endpoints.
                </p>
                <p>
                  <em>You must be signed in to see responses.</em>
                </p>
                <h2>Session</h2>
                <p>/api/examples/session</p>
                <iframe src="/api/examples/session" />
                <h2>JSON Web Token</h2>
                <p>/api/examples/jwt</p>
                <iframe src="/api/examples/jwt" />
              </figcaption>
            </figure>
          </main>
        </>
      </Layout>
    )
  }
}
