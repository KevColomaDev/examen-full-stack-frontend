'use client'
import { useState, useContext, useEffect } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoSolca from '../assets/logoSolca.png'
import { SessionContext } from '../contexts/SessionContext'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { isAuthenticated, logout, setIsAuthenticated } = useContext(SessionContext)

  useEffect(() => {
    setIsAuthenticated(true)
  },)




  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Solca</span>
            <img alt="" src={logoSolca} className="h-20 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <a href="habitaciones" className="text-sm font-semibold leading-6 text-gray-900 px-2 py-1">
            Habitaciones
          </a>
          <a href="suministros" className="text-sm font-semibold leading-6 text-gray-900 px-2 py-1">
            Suministros
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 px- py-1 hover: selection:text-sky-700">
            Donaciones
          </a>
          {
            isAuthenticated === true ? (
              <a href='login' className="text-sm font-semibold leading-6 text-white bg-sky-700 rounded-md px-2 py-1 " onClick={logout}>Cerrar Sesion</a>
            ) : (
              <a href="/login" className="text-sm font-semibold leading-6 text-white bg-sky-700 rounded-md px-2 py-1 "> 
                Iniciar Sesion
              </a>
            ) 
          }
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Habitaciones
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Suministros
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Donaciones
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Iniciar Sesion
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
