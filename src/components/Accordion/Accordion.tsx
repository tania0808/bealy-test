import AccordionItem from "./AccordionItem";

interface AccProps {
  items: any[];
  icons: any;
}
interface AccordionItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Accordion({ items, icons }: AccProps) {
  return (
    <>
      {items.map((item: AccordionItem) => {
        return (
          <AccordionItem key={item.id} {...item} icon={icons[item.image]} />
        );
      })}
    </>
  );
}
