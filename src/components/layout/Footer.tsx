import { motion } from "motion/react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-7xl rounded-2xl border-t bg-white dark:border-t dark:bg-[#17151c]/90"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 rounded-2xl">
              <div className="round h-10 w-10">
                <img
                  src="logo1.svg"
                  className="h-full w-full rounded-full"
                ></img>
              </div>
              <h1 className="text-[20px] font-semibold italic">PDF_BRO</h1>
            </div>
            <p className="mt-4 ml-2 text-sm text-gray-600 dark:text-gray-300">
              Creating Pdfs become ease and free
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-gray-300">
              Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 dark:hover:text-gray-50 hover:scale-110 transition-transform duration-300 ease-in-out dark:text-gray-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-gray-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-gray-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {currentYear} Company Name. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
