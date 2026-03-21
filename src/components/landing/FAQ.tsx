import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

export function FAQ() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col items-center justify-center gap-9 rounded-2xl bg-white py-5 dark:bg-[#17151c]"
      >
        <h1 className="text-3xl">Frequentely Asked Questions</h1>
        <Accordion defaultValue={["shipping"]} className="max-w-4xl">
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-[20px]">
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
          <AccordionItem value="support">
            <AccordionTrigger className="text-[20px]">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
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
      </motion.div>
    )
}

export default FAQ
