const pricings = [
  {
    title: "Mest For Penga",
    price: 39,
    features: ["Web-scraping", "Filter", "Search", "Pagination", "Sortering"],
    priceId: "price_1P3EnAHYt4aT0IXnV45orgVh",
  },
  {
    title: "Pro",
    price: 59,
    features: [
      "720p Video Rendering",
      "2GB Cloud Storage",
      "Basic Video Templates",
      "Pro Video Templates",
    ],
    priceId: "price_1P3EnAHYt4aT0IXnV45orgVh",
    popular: true,
  },
  {
    title: "Enterprise",
    price: 99,
    features: [
      "720p Video Rendering",
      "2GB Cloud Storage",
      "Basic Video Templates",
      "Pro Video Templates",
      "Extra Pro Video Templates",
    ],
    priceId: "price_1P3EnAHYt4aT0IXnV45orgVh",
  },
];

export function Prosjekter() {
  return (
    <section
      id="prosjekter"
      className="min-h-screen w-full py-28 flex flex-col items-center justify-center"
    >
      <h2 className="m-3 mb-8">Mine Prosjekter</h2>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {pricings.map((price) => (
            <div
              key={price.title}
              className={`relative flex flex-col p-6 bg-base-200 shadow-lg rounded-lg justify-between border ${
                price.popular ? `border-purple-500` : `border-neutral`
              }`}
            >
              {price.popular && (
                <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-center">
                  {price.title}
                </h3>
                <div className="mt-4 text-center flex justify-center items-center gap-3">
                  {price.popular && (
                    <p className="line-through text-xl">${price.price + 20}</p>
                  )}
                  <div>
                    <span className="text-4xl font-bold">${price.price}</span>/
                    month
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {price.features.map((feat) => (
                    <li key={feat} className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button
                  className={`w-full btn text-white p-none text-lg ${
                    price.popular
                      ? `bg-gradient-to-r from-pink-500 to-purple-500`
                      : `btn-primary`
                  }`}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
