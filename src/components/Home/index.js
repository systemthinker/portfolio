import React from "react";

export default function Home() {
  return (
    // <div>
    //   <h1>test</h1>
    // </div>
    <div>
      <div class="container header">
        <div class="row" data-aos="fade-left">
          <div class="col-1"></div>
          <div class="col-5">
            <h1>Hello There!</h1>
          </div>
          <div class="col"></div>
        </div>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-7">
            <h2>
              I'm <span class="name">Robbert van den Outenaar</span>, a full
              stack software engineer focused on great customer interfaces &amp;
              experiences{" "}
            </h2>
          </div>
          <div class="col"></div>
        </div>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-7">
            <h3>
              <span>contact me</span>&nbsp;
              <span>
                <i class="fas fa-arrow-alt-circle-right fa-sm"></i>
              </span>{" "}
              &nbsp;
              <span>
                <a href="mailto:robbertoutenaar@gmail.com">
                  robbertoutenaar@gmail.com
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="container backgroundSection section">
        <div class="row" data-aos="fade-left">
          <div class="col-1"></div>
          <div class="col-md-2">
            <div class="sectionTitle ">Background </div>
          </div>
          <div class="col-md-6 fadeIn">
            <p>
              I'm currently working in a small and great team as an IT
              professional for <a href="https://www.baza.nl">Baza</a>, where I
              edit the website and build applications for automatisation. I
              recently graduated from{" "}
              <a href="https://www.codaisseur.com">Codaisseur</a> as a fullstack
              developer.
            </p>
            <p>
              As a developer, I enjoy building applications that are scalable
              and efficient while providing great user experiences. Making
              people happy with great applications gives me a lot of joy!
            </p>
            <p>
              When I'm not in front of a computer screen, I'm probably going out
              in Amsterdam, traveling to different parts of the world, or biking
              across the beautiful Dutch landscapes.
            </p>
          </div>

          <div class="col-md-auto"></div>
        </div>
      </div>
      <div class="skillsSection container section">
        <div class="row" data-aos="fade-left">
          <div class="col-1"></div>
          <div class="col-md-2">
            <div class="sectionTitle ">Skills </div>
          </div>
          <div class="col-md-2">
            <div class="label">LANGUAGES</div>
            <ul>
              <li>JavaScript (ES6)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </div>
          <div class="col-md-2">
            <div class="label">FRAMEWORKS & METHODOLOGIES</div>
            <ul>
              <li>React</li>
              <li>Laravel</li>
              <li>Scrum</li>
              <li>Agile</li>
            </ul>
          </div>
          <div class="col-md-2">
            <div class="label">TOOLS</div>
            <ul>
              <li>Git & Github</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>

          <div class="col-md-auto"></div>
        </div>
      </div>
      <div class="experienceSection container section">
        <div class="row" data-aos="fade-left">
          <div class="col-1"></div>
          <div class="col-md-2">
            <div class="sectionTitle">Experience </div>
          </div>
          <div class="col-md-6">
            <div class="companyAndTime d-flex justify-content-between">
              <div class="company">Baza House of Seeds</div>
              <div class="time">July 2020 - current</div>
            </div>

            <div class="position">IT Professional</div>

            <div class="companyAndTime d-flex justify-content-between">
              <div class="company">Codaisseur</div>
              <div class="time">March 2020 - July 2020</div>
            </div>

            <div class="position">Webdevelopment</div>

            <div class="companyAndTime d-flex justify-content-between">
              <div class="company">Robidus</div>
              <div class="time">Dec 2018 - Dec 2019</div>
            </div>

            <div class="position">Absenteeism consultant</div>

            <div class="companyAndTime d-flex justify-content-between">
              <div class="company">Reaal</div>
              <div class="time">Sep 2016 - Nov 2018</div>
            </div>

            <div class="position">Customer Service Representative</div>

            <div class="companyAndTime d-flex justify-content-between">
              <div class="company">Professional Poker Player</div>
              <div class="time">Nov 2008 - Nov 2018</div>
            </div>

            <div class="position">Self employed Poker Player.</div>
          </div>
        </div>
      </div>
      <div class="viewResume container section">
        <div class="row" data-aos="fade-left">
          <div class="col-2"></div>

          <div class="col-md-8">
            <a
              class="sectionTitle"
              href="https://cvonline.me/@robbert"
              style={{ textDecoration: "none", color: "#0086b3" }}
            >
              View my resume &nbsp &nbsp
              <i
                style={{ textDecoration: "none" }}
                class="fas fa-file-download"
              ></i>
            </a>
          </div>
          <div class="col-md-auto"></div>
        </div>
      </div>
      <div class="Projects container section">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-2">
            <div class="sectionTitle">Projects </div>
          </div>
        </div>
      </div>{" "}
      */
      <footer class="footer">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-auto"></div>
            <div class="col-md-8">
              <div class="footerLinks d-flex justify-content-between">
                <a
                  href="https://www.linkedin.com/in/robbert-van-den-outenaar-79a23611/"
                  target="_blank"
                >
                  LinkedIN &nbsp<i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/systemthinker" target="_blank">
                  Github &nbsp<i class="fab fa-github"></i>
                </a>
                <a href="mailto:robbertoutenaar@gmail.com" target="_blank">
                  Email &nbsp<i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div class="col-md-auto"></div>
          </div>
        </div>
      </footer>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
}
