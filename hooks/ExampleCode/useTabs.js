import { useState } from "react";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex,
  };
};

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="UseTabs">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabs;
