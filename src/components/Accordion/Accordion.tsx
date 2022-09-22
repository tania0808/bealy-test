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
      {items.map((item: AccordionItem, index: number) => {
        return (
          <AccordionItem key={index} {...item} folder="health-assistance" />
        );
      })}
    </>
  );
}
