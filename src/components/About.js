import UserCls from "./UserCls";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center pt-8 text-3xl font-serif font-bold">
          Food Lover
        </h2>
        <UserCls />
      </div>
    );
  }
}

export default About;
