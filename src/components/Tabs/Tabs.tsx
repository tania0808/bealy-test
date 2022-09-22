import { TabMenu, TabItem } from './Tabs.styled'
interface TabProps {
  items: any[];
  activeId: number;
  onHandleClick: (value: number) => void;
}

interface Tab {
  id: number;
  title: string;
  image: string;
  description: string;
}
export default function Tabs({ items, onHandleClick, activeId }: TabProps) {
  return (
    <>
      <TabMenu>
        {items.map((item: Tab, index: number) => {
          return (
            <TabItem
              tabId={index}
              activeId={activeId}
              key={item.id}
              onClick={() => {
                onHandleClick(index);
              }}
            >
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </TabItem>
          );
        })}
      </TabMenu>
    </>
  );
}

import {} from './Tabs.styled'