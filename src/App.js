import "./styles.scss";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>It's my first react application (no)</h1>
      </header>
    );
  }
}
class MessageComponent extends React.PureComponent {
  render() {
    return <h3>This element also was created for demonstration too</h3>;
  }
}

let message = React.createElement(
  "h3",
  null,
  "This element was created especially for demonstration possibilities of the React"
);

let OneMoreMessage = () => <h3>One more element for demonstration</h3>;

export default function App() {
  return (
    <div className="App">
      <Header />
      {message}
      <MessageComponent />
      <OneMoreMessage />
    </div>
  );
}
