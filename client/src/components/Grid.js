import GridLayout from "react-grid-layout";
import React from "react";
import Card from "./InfoCard";

class MyGrid extends React.Component {
  static defaultProps = {
    autoSize: true
  };

  // var a = 97;
  // var charArray = {};
  // for (var i = 0; i<26; i++)
  //     charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);

  // console.log(charArray);

  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 5, static: true },
      { i: "b", x: 1, y: 0, w: 1, h: 5, static: true },
      { i: "c", x: 2, y: 0, w: 1, h: 5, static: true },
      { i: "d", x: 0, y: 1, w: 1, h: 5, static: true },
      { i: "e", x: 1, y: 1, w: 1, h: 5, static: true },
      { i: "f", x: 2, y: 1, w: 1, h: 5, static: true },
      { i: "g", x: 0, y: 2, w: 1, h: 5, static: true },
      { i: "h", x: 1, y: 2, w: 1, h: 5, static: true },
      { i: "i", x: 2, y: 2, w: 1, h: 5, static: true }
    ];

    const firstLetterCode = 97;
    const charArray = [];
    for (let i = 0; i < 26; i++) {
      charArray[i] = String.fromCharCode(firstLetterCode + i);
    }

    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={3}
        rowHeight={70}
        width={1500}
      >
        {this.props.info.map(function(item, index) {
          return (
            <div key={charArray[index]}>
              <Card title={item.title} info={item.content} />
            </div>
          );
        })}
      </GridLayout>
    );
  }
}

export default MyGrid;
