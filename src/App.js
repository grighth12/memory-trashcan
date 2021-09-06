console.log("App");

import Components from "./Components.js";

import Home from "./Home/index.js";

export default class App extends Components {
  componentDidMount() {
    new Home(document.querySelector(".home"));
  }

  template() {
    return `
    <section class="home"></section>
    `;
  }
}
