import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Image from "next/legacy/image";
import Link from "next/link";
import { CartContext } from "../../context/shopContext";
// Dynamically load Scrollbar with SSR disabled
import dynamic from "next/dynamic";

// Dynamically import the Scrollbar component (SSR disabled)
const Scrollbar = dynamic(() => import("../../components/common/scrollbar"), {
  ssr: false,
});
import Counter from "../../components/common/counter";

export default function MiniCart({ cart }: any) {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);


  // Destructure context values
  const { cartOpen }: any = useContext(CartContext);
  const { setCartOpen }: any = useContext(CartContext);
  const { checkoutUrl }: any = useContext(CartContext);
  const { removeCartItem }: any = useContext(CartContext);
  const { incrementCartItem }: any = useContext(CartContext);
  const { decrementCartItem }: any = useContext(CartContext);
  const isCartOpen = typeof cartOpen === "boolean" ? cartOpen : false;

  // Calculate total cart price
  let cartTotal = 0;
  cart?.map((item: any) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-auto"
        onClose={() => setCartOpen(!cartOpen)}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Background overlay for transition */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Cart panel sliding transition */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                {/* Sliding transition for the cart */}
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="fixed inset-y-0 right-0 max-w-full flex">
                      <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 md:mr-4">
                            {/* Cart Title and Close Button */}
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900">
                                Shopping Cart{" "}
                              </Dialog.Title>
                              <div className="ml-3 h-7 flex items-center">
                                <button
                                  ref={cancelButtonRef}
                                  type="button"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setCartOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>

                            {/* Scrollable Cart Content */}
                            <Scrollbar className="cart-scrollbar w-full flex-grow">
                              <div className="mt-8">
                                <div className="flow-root">
                                  {cart?.length > 0 ? (
                                    <ul
                                      role="list"
                                      className="-my-6 divide-y divide-gray-200"
                                    >
                                      {cart?.map((product: any) => (
                                        <li
                                          key={
                                            product.id + product.variantQuantity
                                          }
                                          className="py-6 flex"
                                        >
                                          <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                            <Image
                                              src={product.image}
                                              alt={product.variantTitle}
                                              layout="fill"
                                              objectFit="cover"
                                            />
                                          </div>

                                          <div className="ml-4 flex-1 flex flex-col">
                                            <div className="flex justify-between  text-sm font-medium text-gray-900">
                                              <h3>
                                                <Link
                                                  legacyBehavior
                                                  href={`/product/${product.handle}`}
                                                  passHref
                                                >
                                                  <a
                                                    onClick={() =>
                                                      setCartOpen(false)
                                                    }
                                                  >
                                                    {product.title}
                                                  </a>
                                                </Link>
                                              </h3>
                                              <p className="ml-4">
                                                £{product.variantPrice}
                                              </p>
                                            </div>
                                            <div className="flex justify-between mt-2  text-xs font-medium text-gray-700">
                                              <h3>
                                                <a>{product.variantTitle}</a>
                                              </h3>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between text-sm">
                                              <Counter
                                                className=""
                                                quantity={
                                                  product.variantQuantity
                                                }
                                                onIncrement={() =>
                                                  incrementCartItem(
                                                    product.variantQuantity,
                                                    product.id
                                                  )
                                                }
                                                onDecrement={() =>
                                                  decrementCartItem(
                                                    product.variantQuantity,
                                                    product.id
                                                  )
                                                }
                                                variant="dark"
                                              />
                                              <div className="flex">
                                                <button
                                                  onClick={() =>
                                                    removeCartItem(product.id)
                                                  }
                                                  type="button"
                                                  className="font-medium text-gray-500 hover:text-gray-800"
                                                >
                                                  Remove{" "}
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <div className="">
                                      <p>Empty Cart</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Scrollbar>
                          </div>

                          {/* Cart Summary */}
                          {cart?.length > 0 ? (
                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 md:mr-4">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p> £{parseFloat(cartTotal.toFixed(2))}</p>
                              </div>
                              {/* <p className="mt-0.5 text-sm text-gray-500">
                                {("text-checkout-instruction")}
                              </p> */}
                              <div className="mt-6">
                                <a
                                  href={checkoutUrl}
                                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#c9a87c]"
                                >
                                  {"Checkout"}
                                </a>
                              </div>
                              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                <p>
                                  or{" "}
                                  <button
                                    type="button"
                                    className="font-medium hover:text-gray-800"
                                    onClick={() => setCartOpen(false)}
                                  >
                                    Continue Shopping{" "}
                                    <span aria-hidden="true"> &rarr;</span>
                                  </button>
                                </p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
