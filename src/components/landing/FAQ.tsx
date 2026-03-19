import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <div className="flex w-7xl justify-center rounded-2xl border-2 bg-white py-5">
            <h1>FAQ</h1>
        <Accordion defaultValue={["shipping"]} className="max-w-4xl">
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-[20px] text-black">
              What are your shipping options?
            </AccordionTrigger>
            <AccordionContent className="text-">
              We offer standard (5-7 days), express (2-3 days), and overnight
              shipping. Free shipping on international orders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger className="text-[20px]">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent>
              Returns accepted within 30 days. Items must be unused and in
              original packaging. Refunds processed within 5-7 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger className="text-[20px]">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
}

export default FAQ
