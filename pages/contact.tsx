import Head from 'next/head'
import Layout from '../components/Layout'
import ContactForm from '../components/contactForm'

export default function Contact() {
  return (
    <Layout>
      <>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Contact us page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Contact Us</h1>

          <p className="main-content-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            explicabo, ab expedita rem temporibus repellendus eum, omnis,
            distinctio est ipsum vel voluptate perspiciatis, quis earum
            accusantium unde nisi quas. Voluptatum.
          </p>
          <br />
          <br />

          <section id="contact-form-section">
            <ContactForm />
          </section>

          <aside className="contact-sidebar">
            <h2 className="contact-sidebar-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </h2>
            <p className="contact-sidebar-text">
              Morbi vel rutrum ante. Vivamus adipiscing tincidunt purus at
              adipiscing. Proin orci metus, gravida in cursus et, egestas in
              leo. Suspendisse potenti. Vivamus congue sapien nec velit
              adipiscing a tincidunt massa porta.
            </p>
            <h2 className="contact-sidebar-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </h2>
            <p className="contact-sidebar-text">
              Nulla quis urna nisl. Nulla dolor magna, pretium ac elementum nec,
              tristique eu sem. Sed lectus arcu, ultrices at mattis id,
              elementum in nisl. Sed condimentum adipiscing urna, id venenatis
              ante placerat vel.
            </p>
            <h2 className="contact-sidebar-header">
              Integer pellentesque lorem quis libero consectetur ac egestas
              magna tincidunt.
            </h2>
            <p className="contact-sidebar-text">
              Vivamus sit amet ipsum a neque elementum imperdiet vitae nec
              velit. Cras id diam sapien. Phasellus malesuada congue est, eget
              vulputate est dignissim vitae. Ut faucibus dapibus sollicitudin.
              Vestibulum vitae purus et leo vulputate ultrices eget vel odio.
            </p>
            <h2 className="contact-sidebar-header">
              Sed sagittis aliquet risus tempor varius.
            </h2>
            <p className="contact-sidebar-text">
              Integer eget dui vel tortor fermentum tincidunt. Nullam vitae odio
              nec lorem porttitor tristique porta id sapien. Mauris ornare leo
              at mi tempor eget tincidunt nulla auctor. Fusce adipiscing lacinia
              erat nec molestie. Aenean diam justo, faucibus et feugiat non,
              viverra ac turpis.
            </p>
          </aside>
        </main>
      </>
    </Layout>
  )
}
