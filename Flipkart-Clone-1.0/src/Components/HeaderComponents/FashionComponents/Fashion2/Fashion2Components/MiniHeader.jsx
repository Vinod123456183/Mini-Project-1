"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const collections = [
  { name: "Dress", href: "#" },
  { name: "Party Shop", href: "#" },
  { name: "Top", href: "#" },
  { name: "Jacket", href: "#" },
  { name: "Top & Jacket", href: "#" },
  { name: "Shorts", href: "#" },
  { name: "Skirts", href: "#" },
  { name: "Pants", href: "#" },
];

const newCategories = [
  { name: "New Items", href: "#" },
  { name: "Sales", href: "#" },
  { name: "Shop by Size", href: "#" },
  { name: "Gift Card", href: "#" },
  { name: "Hot Sellers", href: "#" },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="  text-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl  items-center justify-between p-2 lg:px-8"
      >
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-2  ">
          {/* Collections Dropdown */}
          <Popover className="relative ">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              Collections
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute  -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 outline-none">
                {collections.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 "
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-black"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative ">
            <PopoverButton className=" outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              Dress
            </PopoverButton>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              <span>Party Shop</span>
            </PopoverButton>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              Collections
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {collections.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 "
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-black"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className=" outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              New Arrivial
            </PopoverButton>
          </Popover>
          <Popover className="relative">
            <PopoverButton className=" outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              Sale
            </PopoverButton>
          </Popover>
          <Popover className="relative">
            <PopoverButton className=" outline-none  flex items-center gap-x-1 text-sm/6 font-semibold text-black p-4">
              Collections
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {collections.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 "
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-black"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white p-4">
              Gift Card
            </PopoverButton>
          </Popover>
          <Popover className="relative">
            <PopoverButton className=" outline-none flex items-center gap-x-1 text-sm/6 font-semibold text-white p-4">
              Hot Seller
            </PopoverButton>
          </Popover>
        </PopoverGroup>

        <div className="flex gap-3">
          <div className="p-4 cursor-pointer">1</div>
          <div className="p-4 cursor-pointer">2</div>
        </div>

        {/* Mobile Menu Dialog */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-0 z-50 overflow-y-auto bg-white p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="mt-6 space-y-4">
              {/* Collections */}
              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2">
                  {collections.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </DisclosurePanel>
              </Disclosure>

              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>

              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>

              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2">
                  {collections.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </DisclosurePanel>
              </Disclosure>

              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>
              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>
              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2">
                  {collections.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </DisclosurePanel>
              </Disclosure>

              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>
              <Disclosure>
                <DisclosureButton className="flex items-center justify-between w-full text-gray-900 font-semibold">
                  Collections
                </DisclosureButton>
              </Disclosure>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
