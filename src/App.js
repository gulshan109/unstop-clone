import React from "react";
import Header from "./component/Header";
import Section from "./component/Section";
import "./index.css";
import Learn from "./images/learn.png";
import Practice from "./images/practice.png";
import Mentorship from "./images/mentorship.png";
import Compete from "./images/compete.png";
import Jobs from "./images/jobs.png";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      linkData: [
        { image: Learn, link: "Learn" },
        { image: Practice, link: "Practice" },
        { image: Mentorship, link: "Mentorship" },
        { image: Compete, link: "Compete" },
        { image: Jobs, link: "Jobs" },
      ],
      userImg: [
        {
          img: "https://d8it4huxumps7.cloudfront.net/uploads/images/6549d4f952b38_profile_2.png",
        },
        {
          img: "https://d8it4huxumps7.cloudfront.net/uploads/images/6549d4c6d6d68_profile_1.png",
        },
        {
          img: "https://d8it4huxumps7.cloudfront.net/uploads/images/6549d51d95d68_profile_3.png",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Header linkData={this.state.linkData} />
        <Section userImg={this.state.userImg} />
      </>
    );
  }
}
