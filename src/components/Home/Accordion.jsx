import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'

const Accordions = ({ que, ans ,id }) => {
    return (
        <div key={id} className=" ">
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value={`item-${id}`}>
                    <AccordionTrigger className={" cursor-pointer font-semibold text-xl"}>{que}</AccordionTrigger>
                    <AccordionContent>
                        {ans}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Accordions
