import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import AccessDenied from "../components/access-denied";
import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  const { data: session, status } = useSession();

  const [content, setContent] = useState<any>({});
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

  const { name, email, image } = content;

  // If no session exists, display access denied message
  if (status === "unauthenticated") {
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
          <figure id="profile-image">
            {image ? (
              <Image
                src={image}
                className="user-image"
                alt="Profile"
                width={200}
                height={200}
              />
            ) : (
              <Image
                src={"/images/placeholder.jpg"}
                alt="Profile"
                width={200}
                height={200}
              />
            )}
            {/* <Image src={image} alt="Profile" width={200} height={200} /> */}
            <figcaption id="profile-image-text">
              <p>Username : {name as string}</p>
              <br />
              <p>Email :{email as string}</p>
            </figcaption>
          </figure>
        </main>
      </>
    </Layout>
  );
}
