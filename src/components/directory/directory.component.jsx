import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imgUrl: "https://loremflickr.com/320/240?random=4",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imgUrl: "https://loremflickr.com/320/240?random=5",
          id: 2,
          linkUrl: ""
        },
        {
          title: "mats",
          imgUrl: "https://loremflickr.com/320/240?random=2",
          id: 3,
          linkUrl: ""
        },
        {
          title: "man",
          imgUrl: "https://loremflickr.com/320/240?random=3",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "woman",
          imgUrl: "https://loremflickr.com/320/240?random=1",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
