import Head from "next/head";
import Layout from "../components/Layout";

export default function Faqs() {
  return (
    <Layout>
      <>
        <Head>
          <title>Faqs</title>
          <meta name="description" content="Faqs page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">FAQ</h1>
          <br />

          <section id="main-inner-content" className="group">
            <h2 className="main-inner-content-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              rutrum ante.
            </h2>

            <p className="main-content-text">
              Vivamus adipiscing tincidunt purus at adipiscing. Proin orci
              metus, gravida in cursus et, egestas in leo. Suspendisse potenti.
              Vivamus congue sapien nec velit adipiscing a tincidunt massa
              porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla quis urna nisl. Nulla dolor magna, pretium ac elementum nec,
              tristique eu sem. Sed lectus arcu, ultrices at mattis id,
              elementum in nisl. Sed condimentum adipiscing urna, id venenatis
              ante placerat vel.
            </p>

            <h3 className="context-title">
              {" "}
              Integer pellentesque lorem quis libero consectetur ac egestas
              magna tincidunt.
            </h3>

            <p className="main-content-text">
              Vivamus sit amet ipsum a neque elementum imperdiet vitae nec
              velit. Cras id diam sapien. Phasellus malesuada congue est, eget
              vulputate est dignissim vitae. Ut faucibus dapibus sollicitudin.
              Vestibulum vitae purus et leo vulputate ultrices eget vel odio.
              Sed sagittis aliquet risus tempor varius. Integer eget dui vel
              tortor fermentum tincidunt. Nullam vitae odio nec lorem porttitor
              tristique porta id sapien. Mauris ornare leo at mi tempor eget
              tincidunt nulla auctor. Fusce adipiscing lacinia erat nec
              molestie. Aenean diam justo, faucibus et feugiat non, viverra ac
              turpis.
            </p>

            <h3 className="context-title">
              Curabitur pellentesque facilisis volutpat.Vivamus vel lacus orci.
              Mauris semper sapien ut massa scelerisque consequat non eu justo.
            </h3>

            <p className="main-content-text">
              Morbi non massa lectus. Nullam ac leo in dolor pharetra bibendum
              at sit amet felis. Nam justo lacus, rhoncus vel viverra quis,
              dictum eu tortor. Curabitur nunc neque, adipiscing ac suscipit at,
              cursus ac diam. Aliquam erat volutpat. Integer convallis consequat
              facilisis. Suspendisse justo eros, egestas dignissim ultricies
              vel, ullamcorper quis lectus. Donec nisi orci, placerat eget
              interdum vel, vehicula a massa. Quisque nunc nulla, hendrerit et
              porttitor ac, pulvinar nec risus. Donec congue mattis porttitor.
              In id urna a ligula lobortis luctus. Quisque sit amet ligula at
              arcu bibendum cursus. Vestibulum volutpat suscipit iaculis.
            </p>
          </section>

          <aside className="contact-sidebar">
            <p className="contact-sidebar-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi vel
              rutrum ante
            </p>

            <p className="contact-sidebar-text">
              Vivamus adipiscing tincidunt purus at adipiscing Proin orci metus,
              gravida in cursus et, egestas Suspendisse potenti
            </p>

            <p className="contact-sidebar-text">
              Vivamus congue sapien nec velit adipiscing a tincidunt Lorem ipsum
              dolor sit amet, consectetur adipiscing elit Nulla quis urna nisl
            </p>

            <p className="contact-sidebar-text">
              Nulla dolor magna, pretium ac elementum nec, tristique Sed lectus
              arcu, ultrices at mattis id, elementum in nisl Sed condimentum
              adipiscing urna, id venenatis ante
            </p>
          </aside>
        </main>
      </>
    </Layout>
  );
}
