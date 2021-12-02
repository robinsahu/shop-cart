import React from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuIteam from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuIteam key={id} {...otherSectionProps} />
    ))}
  </div>
  // <div className="directory-menu">
  //   {sections.map((section) => (
  //     <MenuIteam
  //       key={section.id}
  //       title={section.title}
  //       imageUrl={section.imageUrl}
  //       size={section.size}
  //     />
  //   ))}
  //   {/* {this.state.sections.map(({title,imageUrl,id}) => (
  //         <MenuIteam key={id} title={title} /> */}
  // </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
