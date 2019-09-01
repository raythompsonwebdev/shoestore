import React from "react";


class Contact extends React.Component {
  render() {
    return (
        <main id="content" class="clearfix" role="main">

        <h1>Contact Us</h1>

        <br/>

        <p class="context">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem explicabo, ab expedita rem temporibus repellendus eum, omnis, distinctio est ipsum vel voluptate perspiciatis, quis earum accusantium unde nisi quas. Voluptatum.</p>


        <section id="stylized" class="myform">

            <form  id="form" method="" action="">
                <ul>
                    <li>
                        <label for="name">Name:&#32; </label>
                        <input type="text" name="name" id="name" pattern="[a-z A-Z]" required  />
                    </li>
                    <li>
                        <label for="email">E-mail:&#32; </label>
                        <input type="email" name="email" id="email" required />
                    </li>
                    <li>
                        <label for="message">Message:&#32; </label>
                        <textarea name="message" id="message" cols="35" rows="15"></textarea>

                        <input type="hidden" name="anti_spam" id="anti_spam" value="" />
                        <a href="https://www.dom" title="" > </a>
                    </li>
                    <li>
                        <label for="submit"></label>
                        <input type="submit" value="Send" id="submit" name="submit" />
                    </li>
				</ul>

            </form>

        </section>

        <aside class="text_boxa">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
            <p>Morbi vel rutrum ante. Vivamus adipiscing tincidunt purus at adipiscing. Proin orci metus, gravida in cursus et, egestas in leo. Suspendisse potenti. Vivamus congue sapien nec velit adipiscing a tincidunt massa porta.</p>
            <br/>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h1>
            <p>Nulla quis urna nisl. Nulla dolor magna, pretium ac elementum nec, tristique eu sem. Sed lectus arcu, ultrices at mattis id, elementum in nisl. Sed condimentum adipiscing urna, id venenatis ante placerat vel.</p>
            <br/>
            <h1>Integer pellentesque lorem quis libero consectetur ac egestas magna tincidunt.</h1>
            <p>Vivamus sit amet ipsum a neque elementum imperdiet vitae nec velit. Cras id diam sapien. Phasellus malesuada congue est, eget vulputate est dignissim vitae. Ut faucibus dapibus sollicitudin. Vestibulum vitae purus et leo vulputate ultrices eget vel odio.</p>
            <br/>
            <h1>Sed sagittis aliquet risus tempor varius.</h1>
            <p>Integer eget dui vel tortor fermentum tincidunt. Nullam vitae odio nec lorem porttitor tristique porta id sapien. Mauris ornare leo at mi tempor eget tincidunt nulla auctor. Fusce adipiscing lacinia erat nec molestie. Aenean diam justo, faucibus et feugiat non, viverra ac turpis.</p>
            <br/>
        </aside>
	</main>  
      );
  }
}

export default Contact;
