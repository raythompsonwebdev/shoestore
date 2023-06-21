import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "../components/Layout";
import AccessDenied from "../components/access-denied";

const myComponentStyle = {
  width: "1004px",
  height: "600px",
  backgroundColor: "red",
  display: "inline-block",
  margin: "10px",


};

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] :any = useState();

  // console.log(content)

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

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
       <>
        <Head>
          <title>Protected Page</title>
          <meta name="description" content="Protected Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
     <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Protected Page</h1>
          <section id="main-inner-content" className="group">

          <h2 className="context-title">
            User
            </h2>

            <p>{content?.name}</p>
            <p>{content?.email}</p>


          </section>
          <section style={myComponentStyle}></section>
          {/* <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket> */}



        </main>
        </>
    </Layout>
  );
  // } else {
  //   return (
  //     <Layout>
  //       <>
  //         <Head>
  //           <title>Cart</title>
  //           <meta name="description" content="Contact us page" />
  //           <link rel="icon" href="/favicon.ico" />
  //         </Head>
  //         <main id="content" className="clearfix">
  //           <h1>Cart - not logged in</h1>
  //           <section style={myComponentStyle}></section>
  //         </main>
  //       </>
  //     </Layout>
  //   );
  // }
}

// export const getServerSideProps = withPageAuthRequired();
