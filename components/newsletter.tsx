import { useState } from "react";
import { ShopifyData } from "../lib/shopify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }

    setError(null);

    const mutation = `
      mutation {
        customerCreate(input: {
          email: "${email}",
          password: "demo1234",
          acceptsMarketing: true
        }) {
          customerUserErrors {
            message
          }
          customer {
            email
          }
        }
      }
    `;

    const response = await ShopifyData(mutation);
    const errors = response?.data?.customerCreate?.customerUserErrors;

    if (errors && errors.length > 0) {
      setError(errors[0].message);
      setSuccess(false);
    } else {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <section className=" ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight  text-gray-900 sm:text-4xl ">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts — feel free to sign up with your email.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 "
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg  "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center bg-[#c9a87c] hover:bg-[#b89b72] text-white rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg "
                >
                  Subscribe
                </button>
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-600 mt-2 text-center">
                Subscription successful!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
