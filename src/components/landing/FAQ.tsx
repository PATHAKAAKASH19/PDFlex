import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-9 rounded-2xl bg-white py-5">
        <h1 className="text-3xl">Frequentely Asked Questions</h1>
        <Accordion defaultValue={["shipping"]} className="max-w-4xl">
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-[20px] text-black">
              What are your shipping options?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              We offer standard (5-7 days), express (2-3 days), and overnight
              shipping. Free shipping on international orders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger className="text-[20px]">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              Returns accepted within 30 days. Items must be unused and in
              original packaging. Refunds processed within 5-7 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger className="text-[20px]">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
}

export default FAQ
