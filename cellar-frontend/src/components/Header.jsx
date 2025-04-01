import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Form, Link, useRouteLoaderData } from "react-router-dom"

function Header() {
    const token = useRouteLoaderData("root")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className="mx-auto flex w-screen justify-between p-6 lg:gap-x-12 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex items-center pl-10">
                        <img
                            alt="The Cellar's logo"
                            src="/src/assets/logo-highres.png"
                            className="h-16 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden items-center lg:flex lg:gap-x-10">
                    <Link
                        to="/"
                        className="hover:border-teal text-base/6 hover:border-b-2"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/allwines"
                        className="hover:border-teal text-base/6 hover:border-b-2"
                    >
                        À boire
                    </Link>

                    <Link
                        to="/macave"
                        className="hover:border-teal text-base/6 hover:border-b-2"
                    >
                        Ma Cave
                    </Link>
                    <Link
                        to="newwine"
                        className="hover:border-teal text-base/6 hover:border-b-2"
                    >
                        Ajouter un vin
                    </Link>
                    <Link
                        to="#"
                        className="hover:border-teal text-base/6 hover:border-b-2"
                    >
                        Mes dégustations
                    </Link>
                </div>
                {!token && (
                    <div className="hidden lg:flex lg:flex-1 lg:gap-x-4">
                        <button
                            type="button"
                            className="bg-teal shadow-xs hover:bg-midnightgreen focus-visible:outline-midnightgreen rounded-2xl p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <Link
                                to="/signup"
                                className="text-base/6 font-semibold"
                            >
                                Créer un compte
                            </Link>
                        </button>
                        <button
                            type="button"
                            className="border-teal text-teal hover:border-midnightgreen hover:text-midnightgreen focus-visible:outline-midnightgreen rounded-2xl border-2 bg-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <Link
                                to="/signin"
                                className="text-base/6 font-semibold"
                            >
                                Se connecter
                            </Link>
                        </button>
                    </div>
                )}
                {token && (
                    <div className="hidden lg:flex lg:flex-1 lg:gap-x-4">
                        <button
                            type="button"
                            className="bg-teal shadow-xs hover:bg-midnightgreen focus-visible:outline-midnightgreen rounded-2xl p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <Link
                                to="/logout"
                                className="text-base/6 font-semibold"
                            >
                                Se déconnecter
                            </Link>
                        </button>
                    </div>
                )}
            </nav>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">The Cellar</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                                >
                                    Accueil
                                </Link>

                                <Link
                                    to="/allwines"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                                >
                                    À boire
                                </Link>
                                <Link
                                    to="/macave"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                                >
                                    Ma Cave
                                </Link>
                                <Link
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                                >
                                    Mes dégustations
                                </Link>
                            </div>
                            <div className="py-6">
                                {!token && (
                                    <>
                                        <Link
                                            to="/signup"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Créer un compte
                                        </Link>
                                        <Link
                                            to="/signin"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Se connecter
                                        </Link>
                                    </>
                                )}
                                {token && (
                                    <Form action="/logout" method="post">
                                        <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            Se déconnecter
                                        </button>
                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header
