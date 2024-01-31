import React from "react";
import { ABOUT_PAGE_IMG_URL } from "../utils/constants";

class UserCls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Ajith",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ajith-sakthi");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //Never update state variable directly it doesn't update
    return (
      <div className="flex justify-center items-center mt-[5%] ">
        <div className="w-1/4">
          <img alt="image" src={ABOUT_PAGE_IMG_URL} />
        </div>

        <div>
          <h2 className="text-lg font-bold">Founder:{name}</h2>
          <h3 className="text-lg font-bold">Location:{location} </h3>
          <p className="text-xl italic">
            This project is done by the{" "}
            <span className="font-bold text-cyan-400">React</span> with swiggy's
            API
          </p>
        </div>
      </div>
    );
  }
}

export default UserCls;

/**
 * ----MOUNTING cycle(instance created)------
 * ---render phase starts-----
 * -constructor
 * -render() call--render the default value
 * 
 * -----commit phase starts---
 * -default value -DOM manipulation<html element>
 * -componentDidMount() called
 *   -fetch API
 *   -
 * ------UPDATE cycle starts-----
 * ----render phase starts-----
 * - this.setStart() called
 * - render () called 
 * 
 * ------Commit phase starts----
 * -API value DOM manipulation <html element> happened
 * -componentDidUpdate() called
 * 
 
 */
