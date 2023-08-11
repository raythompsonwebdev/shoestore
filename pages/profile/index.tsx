// import { useState, useEffect, ReactElement } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'
import AccessDenied from '../../components/access-denied'
import Head from 'next/head'
import Image from 'next/image'

const Profile = () => {

  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
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
              {session ? (
                <Image
                  // src={session.user?.image} // not included as database field yet.
                  src={'/images/placeholder.jpg'}
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
                <p>Username : {session?.user.name ?  session?.user.name as string : "username not found"}</p>
                <br />
                <p>Email :{session?.user.email ?  session?.user.email as string : "useremail not found"}</p>
<br/>
                <p>
                  <em>You must be signed in to see responses.</em>
                </p>

              </figcaption>
            </figure>
          </main>
        </>
      </Layout>
    )

}

export default Profile


