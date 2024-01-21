import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { getAllLanguages } from "@/lib/utils";

export default function Courses({}) {
  return (
    <section className="w-[60rem] h-max outline-1 outline-border outline rounded-sm mt-20 mb-20 p-2 pt-1">
      <section className="relative left-0 w-48 h-max">
        <Accordion type="multiple">
          <AccordionItem value="Languages">
            <AccordionTrigger>Languages</AccordionTrigger>
            {getAllLanguages().map((item) => {
              return (
                <Link href={item.href} key={item.name}>
                  <AccordionContent className="outline-1 outline-border outline rounded-sm m-1 p-2">
                    {item.name}
                  </AccordionContent>
                </Link>
              );
            })}
            <AccordionItem value="Courses"></AccordionItem>
          </AccordionItem>
          <AccordionItem value="Courses">
            <AccordionTrigger>Courses</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </section>
  );
}
