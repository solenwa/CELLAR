import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useRouteLoaderData } from "react-router-dom"

function WineDetail() {
    const product = useRouteLoaderData("product-detail")

    if (product.isLoading) {
        return <div>Loading...</div>
    }

    if (product.isError) {
        return <div>Error loading products.</div>
    }

    return (
        <div className="bg-white">
            {product && (
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    {product.cuvee}
                                </h2>
                                <h3 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                                    {product.domaine}
                                </h3>
                            </div>
                            <div>
                                <form action="/auth/products/id">
                                    <button type="submit" id="favouritebtn">
                                        {product.favori === true ? (
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                size="xl"
                                                alt="Add to favourite"
                                                style={{ color: "#ff0000" }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                alt="Add to favourite"
                                                size="xl"
                                            />
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-500">
                            Cette bouteille de {product.couleur} du vignoble{" "}
                            {product.domaine} est chaleureuse et conviviale,
                            parfaite pour un déjeuner ou repas en famille ou
                            entre amis. <br></br>Le domaine {product.domaine} se
                            situe en {product.region}, en {product.pays}. En{" "}
                            {product.millesime}, la région a été plutôt
                            ensoleillée cette année-là.
                        </p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                    {product.appellation}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {product.region}, {product.pays}
                                </dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                    {product.millesime}
                                </dt>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                    {product.couleur}
                                </dt>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">
                                    Cépages
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {product.cepages
                                        ? "Non précisé"
                                        : product.cepages}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Side of walnut card tray with card groove and recessed card area."
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
                            className="rounded-lg bg-gray-100"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default WineDetail
