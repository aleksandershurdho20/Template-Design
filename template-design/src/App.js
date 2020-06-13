import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SubFooter from "./components/subfooter/SubFooter";
import Form from "./components/form/form";
import team from "./img/team-viewer.png";
import demo from "./img/demodesk.png";
import urban from "./img/urban-sport.png";
import loyalty from "./img/Loyalty.png";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="subfoot-body">
          <div className="body">
            <Form formTitle="Let us get to know your better" projectTitle="Tell us a bit more about your project"
            projectInteresting="What of marketing are you interested in?" projectBudget="What your moonthley badget look file?"
            />
          </div>
          <SubFooter title="Get in touch" description="Want to see how zengrowth can help you and your team?
             well listen to your story and propose a data-driven growth,
            plan with channel that fit across your customer journey " informationOne="Predictible lead generation"
            informationTwo="Rapid marketing Experimentation" informationThree="Lower Customer acquisition cost"
            informationFour="Increase marketing dbi" clientTitle="Trusted growth partner for hyper-growt companies"
            />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
