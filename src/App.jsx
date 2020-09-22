import React, { Component } from 'react'

class FirstOne extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45rem"
                  height="45rem"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}
class Cat extends Component {
  render() {
    return (
      <article>
        <figure>
          <a href={this.props.link}>
            <img
              src={this.props.image}
              width="400"
              height="400"
              alt={this.props.name}
            />
          </a>
        </figure>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.link}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorLink}>
              <img
                src={this.props.authorImage}
                width="24"
                height="24"
                alt={this.props.authorName}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <FirstOne />

        <main>
          <Cat
            name="Terracottocat"
            link="https://octodex.github.com//terracottocat/"
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            number="149"
            authorLink="https://github.com/chubbmo"
            authorImage="https://github.com/chubbmo.png"
            authorName="chubbmo"
          />

          <Cat
            name="Sentrytocat"
            link="https://octodex.github.com//sentrytocat/"
            image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            number="143"
            authorLink="https://github.com/cameronmcefee"
            authorImage="https://github.com/cameronmcefee.png"
            authorName="cameronfoxly"
          />

          <Cat
            name=" boxertocat"
            link="https://octodex.github.com//boxertocat/"
            image="https://octodex.github.com//images/boxertocat_octodex.jpg"
            number="141"
            authorLink="https://github.com/rubyjazzy"
            authorImage="https://github.com/rubyjazzy.png"
            authorName="rubyjazzy"
          />

          <Cat
            name="Suftocat"
            link="https://octodex.github.com//suftocat/"
            image="https://octodex.github.com//images/surftocat.png"
            number="140"
            authorLink="https://github.com/jeejkang"
            authorImagine="https://github.com/jeejkang.png"
            authorName="jeejkang"
          />

          <Cat
            name="Scubaocat"
            link="https://octodex.github.com//scubatocat/"
            image="https://octodex.github.com//images/scubatocat.png"
            number="138"
            authorLink="https://github.com/cameronfoxly"
            authorImage="https://github.com/cameronfoxly.png"
            authorName="cameronfoxly"
          />

          <Cat
            name="Dinotocat"
            link="https://octodex.github.com//dinotocat/"
            image="https://octodex.github.com//images/dinotocat.png"
            number="130"
            authorLink="https://github.com/kimestoesta"
            authorImage="https://github.com/kimestoesta.png"
            authorName="kimestoesta"
          />

          <Cat
            name="Spidertocat"
            link="https://octodex.github.com//spidertocat/"
            image="https://octodex.github.com//images/spidertocat.png"
            number="88"
            authorLink="https://github.com/jeejkang"
            authorImage="https://github.com/jeejkang.png"
            authorName="jeejkang"
          />

          <Cat
            link="https://octodex.github.com//minertocat/"
            image="https://octodex.github.com//images/minertocat.png"
            name="Spidertocat"
            number="88"
            authorLink="https://github.com/jeejkang"
            authorImage="https://github.com/jeejkang.png"
            authorName="jeejkang"
          />

          <Cat
            link="https://octodex.github.com//gracehoppertocat/"
            image="https://octodex.github.com//images/gracehoppertocat.jpg"
            number="88"
            authorLink="https://github.com/jeejkang"
            authorImage="https://github.com/jeejkang.png"
            AuthorName="jeejkang"
          />

          <Cat
            link="https://octodex.github.com//snowoctocat/"
            image="https://octodex.github.com//images/snowoctocat.png"
            name="Snowoctocat"
            number="88"
            authorLink="https://github.com/cameronmcefee"
            authorImage="https://github.com/cameronmcefee.png"
            authorName="jeejkang"
          />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
