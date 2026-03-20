
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-7xl rounded-2xl border-t border-gray-200 bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-gray-900">ThePdfGuy</h3>
            <p className="mb-4 text-sm text-gray-600">
              Making the web better, one project at a time.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900">Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-4 font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {currentYear} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
