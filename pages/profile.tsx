//import React from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Layout>
        <>
          <Head>
            <title>Contact Us</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="main-content" className="clearfix">
            <h1 id="main-content-title">Profile</h1>
            <br />

            <main id="main-inner-content" className="group">
              <span className="context_title">
                <Image
                  src={`${user.picture}`}
                  alt="Profile"
                  width="50"
                  height="50"
                />
              </span>
            </main>

            <aside className="contact-sidebar">
              <br />
              <p>{user.name}</p>
              <br />
              <p>{user.nickname}</p>
              <br />
              <p>{user.updated_at}</p>
              <br />
              <p>{user.email}</p>
              <br />
            </aside>
          </main>
        </>
      </Layout>
    );
  }
}

export const getServerSideProps = withPageAuthRequired();
