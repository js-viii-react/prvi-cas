import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Navbar</h2>
//         <p>Ukupan broj naseg niza je: {this.props.totalCounters}</p>
//       </div>
//     );
//   }
// }

// Stateless Functional Component
// desctructuring props
const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <h2>Navbar</h2>
      <p>Ukupan broj naseg niza je: {totalCounters}</p>
    </div>
  );
};
export default Navbar;
