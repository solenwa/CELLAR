import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid"
import { multiPropsFilter, sortBasedOnKey } from "../loaders/actions"
import RangeSlider from "../components/Rangeslider"

const sortOptions = [
    { name: "Nom de Domaine (A-Z)", id: "domaine", order: "ascending" },
    { name: "Nom de Domaine (Z-A)", id: "domaine", order: "descending" },
    { name: "Année (croissant)", id: "millesime", order: "ascending" },
    { name: "Année (décroissant)", id: "millesime", order: "descending" },
    { name: "Quantité (croissant)", id: "quantite", order: "ascending" },
    { name: "Quantité (décroissant)", id: "quantite", order: "descending" },
    { name: "Price: High to Low", id: "#", order: "ascending" },
]
/* const subCategories = [
    { name: "Toutes les bouteilles" },
    { name: "À consommer dans le mois" },
    { name: "Mes favoris" },
    { name: "Rouges" },
] */

const filters = [
    {
        id: "couleur",
        name: "Couleur",
        options: [
            { value: "Blanc", label: "Blanc", checked: false },
            { value: "Rose", label: "Rosé", checked: false },
            { value: "Rouge", label: "Rouge", checked: false },
            { value: "Effervescent", label: "Effervescent", checked: false },
            { value: "Doux", label: "Vin doux naturel", checked: false },
        ],
    },
    {
        id: "pays",
        name: "Pays",
        options: [
            { value: "France", label: "France", checked: false },
            { value: "Italie", label: "Italie", checked: false },
            { value: "Espagne", label: "Espagne", checked: false },
            { value: "Argentine", label: "Argentine", checked: false },
        ],
    },
    {
        id: "taille",
        name: "Taille",
        options: [
            { value: "Standard", label: "Standard", checked: false },
            { value: "Magnum", label: "Magnum", checked: false },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function MyCellarpage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const products = useLoaderData()
    const [sortedProducts, setSortedProducts] = useState(products)
    const [sortState, setSortState] = useState(["domaine", "ascending"])
    //    const [subCategoriesFilter, setSubCategoriesFilter] = useState("Toutes les bouteilles")
    const [filterTags, setFilterTags] = useState({
        taille: { Standard: false, Magnum: false },
        couleur: {
            Rouge: false,
            Blanc: false,
            Rose: false,
            Effervescent: false,
            Doux: false,
        },
        pays: {
            France: false,
            Italie: false,
            Espagne: false,
            Argentine: false,
        },
    })
    const [yearFilterValue, setYearFilterValue] = useState({
        min: 1980,
        max: 2025,
    })

    //TO OBTAIN LIST OF FILTERS SELECTED
    const handleFilters = (filterOption, event) => {
        filterOption.checked = !filterOption.checked

        setFilterTags((prevState) => ({
            ...prevState,
            [event.target.name]: {
                ...prevState[event.target.name],
                [event.target.value]:
                    !prevState[event.target.name][event.target.value],
            },
        }))
    }

    useEffect(() => {
        /*         // TO FILTER BY SUBCATEGORY
        const subfilterProducts = () => {
            if (subCategoriesFilter === "Toutes les bouteilles") {
                setFilteredProducts(products)
            } else if (subCategoriesFilter === "Rouges") {
                const RedBottles = products.filter((product) => {
                    return product.couleur == "Rouge"
                })
                setFilteredProducts(RedBottles)
            } else if (subCategoriesFilter === "À consommer dans le mois") {
                const ExpiringBottles = products.filter((product) => {
                    return product.millesime < 2010
                })
                setFilteredProducts(ExpiringBottles)
            }
        }
        subfilterProducts() */

        const filterProducts = () => {
            const filteredCollected = () => {
                const collectedTrueKeys = {
                    couleur: [],
                    taille: [],
                    pays: [],
                }

                const { couleur, taille, pays } = filterTags
                for (let couleurKey in couleur) {
                    if (couleur[couleurKey])
                        collectedTrueKeys.couleur.push(couleurKey)
                }
                for (let tailleKey in taille) {
                    if (taille[tailleKey])
                        collectedTrueKeys.taille.push(tailleKey)
                }
                for (let paysKey in pays) {
                    if (pays[paysKey]) collectedTrueKeys.pays.push(paysKey)
                }
                return collectedTrueKeys
            }

            let filteredKeys = filteredCollected()

            // TO FILTER by TAGS
            let tempItems = multiPropsFilter(products, filteredKeys)

            // TO FILTER BY DATE
            let tempItems2 = tempItems.filter((product) => {
                return (
                    product.millesime >= yearFilterValue.min &&
                    product.millesime <= yearFilterValue.max
                )
            })

            // TO SORT
            let tempItems3 = sortBasedOnKey(
                tempItems2,
                sortState[0],
                sortState[1],
            )

            return tempItems3
        }
        setSortedProducts(filterProducts())

    }, [products, filterTags, sortState, yearFilterValue])

    if (products.isLoading) {
        return <div>Loading...</div>
    }

    if (products.isError) {
        return <div>Error loading products.</div>
    }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog
                    open={mobileFiltersOpen}
                    onClose={setMobileFiltersOpen}
                    className="relative z-40 lg:hidden"
                >
                    <DialogBackdrop
                        transition
                        className="data-closed:opacity-0 fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="data-closed:translate-x-full relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Filters
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>
                            </div>
                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Catégories</h3>
                                {/* <ul
                                    role="list"
                                    className="px-2 py-3 font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <Link
                                                to={category.href}
                                                className="block px-2 py-3"
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul> */}

                                {filters.map((section) => (
                                    <Disclosure
                                        key={section.id}
                                        as="div"
                                        className="border-t border-gray-200 px-4 py-6"
                                    >
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">
                                                    {section.name}
                                                </span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon
                                                        aria-hidden="true"
                                                        className="group-data-open:hidden size-5"
                                                    />
                                                    <MinusIcon
                                                        aria-hidden="true"
                                                        className="group-not-data-open:hidden size-5"
                                                    />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map(
                                                    (option, optionIdx) => (
                                                        <div
                                                            key={option.value}
                                                            className="flex gap-3"
                                                        >
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        onChange={(
                                                                            event,
                                                                        ) =>
                                                                            handleFilters(
                                                                                option,
                                                                                event,
                                                                            )
                                                                        }
                                                                        defaultValue={
                                                                            option.value
                                                                        }
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="group-has-disabled:stroke-gray-950/25 pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="group-has-checked:opacity-100 opacity-0"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="group-has-indeterminate:opacity-100 opacity-0"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                className="min-w-0 flex-1 text-gray-500"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Ma Cave
                        </h1>

                        <div className="flex items-center">
                            {/* Sort Options */}
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Trier par
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <p
                                                    value={option.name}
                                                    onClick={() =>
                                                        setSortState([
                                                            option.id,
                                                            option.order,
                                                        ])
                                                    }
                                                    className={classNames(
                                                        option.current
                                                            ? "font-medium text-gray-900"
                                                            : "text-gray-500",
                                                        "data-focus:bg-gray-100 data-focus:outline-hidden block px-4 py-2 text-sm",
                                                    )}
                                                >
                                                    {option.name}
                                                </p>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filtres</span>
                                <FunnelIcon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pb-24 pt-6"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Produits
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Catégories</h3>
                                {/* Subcategories Filters */}
                                {/* <ul
                                    role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    style={{
                                                        appearance: "none",
                                                    }}
                                                    value={category.name}
                                                    checked={
                                                        subCategoriesFilter ===
                                                        category.name
                                                    }
                                                    onChange={({ target }) =>
                                                        setSubCategoriesFilter(
                                                            target.value,
                                                        )
                                                    }
                                                />
                                                {category.name}
                                            </label>
                                        </li>
                                    ))}
                                </ul>  */}

                                {/* Complete Filters */}
                                <RangeSlider
                                    min={1980}
                                    max={2025}
                                    step={1}
                                    value={yearFilterValue}
                                    onChange={setYearFilterValue}
                                />
                                {filters.map((section) => (
                                    <Disclosure
                                        key={section.id}
                                        as="div"
                                        className="border-b border-gray-200 py-6"
                                    >
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">
                                                    {section.name}
                                                </span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon
                                                        aria-hidden="true"
                                                        className="group-data-open:hidden size-5"
                                                    />
                                                    <MinusIcon
                                                        aria-hidden="true"
                                                        className="group-not-data-open:hidden size-5"
                                                    />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map(
                                                    (option, optionIdx) => (
                                                        <div
                                                            key={option.value}
                                                            className="flex gap-3"
                                                        >
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        onChange={(
                                                                            event,
                                                                        ) =>
                                                                            handleFilters(
                                                                                option,
                                                                                event,
                                                                            )
                                                                        }
                                                                        defaultValue={
                                                                            option.value
                                                                        }
                                                                        defaultChecked={
                                                                            option.checked
                                                                        }
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="group-has-disabled:stroke-gray-950/25 pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="group-has-checked:opacity-100 opacity-0"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="group-has-indeterminate:opacity-100 opacity-0"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {sortedProducts.length > 0 &&
                                        sortedProducts.map((product) => (
                                            <Link
                                                key={product._id}
                                                to={`/allwines/${product._id}`}
                                                className="group"
                                            >
                                                <img
                                                    alt={`Bottle of ${product.domaine}`}
                                                    src={product.image.url}
                                                    className="xl:aspect-7/8 aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                                                />
                                                <h3 className="mt-4 text-sm text-gray-700">
                                                    {product.cuvee} -{" "}
                                                    {product.millesime}
                                                </h3>
                                                <p className="mt-1 text-lg font-medium text-gray-900">
                                                    {product.domaine}
                                                </p>
                                            </Link>
                                        ))}
                                    {sortedProducts.length === 0 && (
                                        <h3 className="col-span-3">
                                            Oops! It looks like no bottles match
                                            your criteria.
                                        </h3>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
