import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import AccessDenied from "../components/access-denied";
import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useSession();

  const [content, setContent] = useState([]);
  // Fetch content from protected route

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  const info = Object.values(content);
  // get user details, token and expiry time
  const [user, expires, token] = info;

  const newUser = Object.values(user);
  // get user details
  const [name, email, picture] = newUser;

  // If no session exists, display access denied message
  if (!session) {
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
    );
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
          <main id="main-inner-content" className="group">
            <span className="context_title">
              <Image
                src={picture as string}
                alt="Profile"
                width={200}
                height={200}
              />
            </span>
          </main>

          <aside className="contact-sidebar">
            <br />

            <br />
            <p>{name as string}</p>
            <br />
            <p>{email as string}</p>
            <br />
            <br />
          </aside>
        </main>
      </>
    </Layout>
  );
}

//export const getServerSideProps = withPageAuthRequired();
