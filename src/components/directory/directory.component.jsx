import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "https://loremflickr.com/320/240?random=4",
          id: 1
        },
        {
          title: "jackets",
          imgUrl: "https://loremflickr.com/320/240?random=5",
          id: 2
        },
        {
          title: "hats",
          imgUrl: "https://loremflickr.com/320/240?random=2",
          id: 3
        },
        {
          title: "man",
          imgUrl: "https://loremflickr.com/320/240?random=3",
          size: "large",
          id: 4
        },
        {
          title: "woman",
          imgUrl: "https://loremflickr.com/320/240?random=1",
          size: "large",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imgUrl, id, size }) => (
          <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
