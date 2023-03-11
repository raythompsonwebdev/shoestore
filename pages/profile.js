//import React from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Layout from "../components/Layout";
// import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  console.log(user.sub);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <Layout>
        <>
          <Head>
            <title>Contact Us</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="content" className="clearfix">
            <h1>Profile</h1>
            <br />

            <main id="main-inner-content" className="group">
              <span className="context_title">
                <h2>{user.name}</h2>
                <h3>{JSON.stringify(user, null, 2)}</h3>
                {/* <Image
                  src={user.picture}
                  alt="Profile"
                  width="100"
                  height="100"
                /> */}
              </span>
            </main>

            <aside className="contact-sidebar">
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi
                vel rutrum ante
              </p>
              <br />
              <p>
                Vivamus adipiscing tincidunt purus at adipiscing Proin orci
                metus, gravida in cursus et, egestas Suspendisse potenti
              </p>
              <br />
              <p>
                Vivamus congue sapien nec velit adipiscing a tincidunt Lorem
                ipsum dolor sit amet, consectetur adipiscing elit Nulla quis
                urna nisl
              </p>
              <br />
              <p>
                Nulla dolor magna, pretium ac elementum nec, tristique Sed
                lectus arcu, ultrices at mattis id, elementum in nisl Sed
                condimentum adipiscing urna, id venenatis ante
              </p>
              <br />
            </aside>
          </main>
        </>
      </Layout>
    )
  );
}

export const getServerSideProps = withPageAuthRequired();
