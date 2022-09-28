import AccordionItem from "./AccordionItem";

interface AccProps {
  items: any[];
}
interface AccordionItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Accordion({ items }: AccProps) {
  return (
    <>
      {items.map((item: AccordionItem) => {
        return (
          <AccordionItem key={item.id} {...item} folder="health-assistance" />
        );
      })}
    </>
  );
}
