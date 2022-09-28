import { TabMenu, TabItem } from "./Tabs.styled";

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
        {items.map((item: Tab) => {
          return (
            <TabItem
              tabId={item.id}
              activeId={activeId}
              key={item.id}
              onClick={() => {
                onHandleClick(item.id);
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
