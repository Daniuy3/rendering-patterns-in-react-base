import React, { useState } from "react";
import classes from "./CompoundComponents.module.css";
interface Props {
  children: React.ReactNode;
}

const Tabs = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={classes.Tabs}>
      
        {childrenArray.map((child, index) => {
          return (
            <div
              key={index}
              className={classes.Tab}
              onClick={() => handleTab(index)}
              style={{
                backgroundColor: activeTab === index ? "lightblue" : "white",
                transition: "all 0.5s",
                cursor: activeTab === index ? "default" : "pointer",
              }}
            >
              {child}
            </div>
          );
        })}
      
    </div>
  );
};

export default Tabs;
