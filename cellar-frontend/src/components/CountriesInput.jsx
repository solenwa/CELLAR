import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

function CountriesInput() {
    const countries = [
        { id: 1, name: "France" },
        { id: 2, name: "Italie" },
        { id: 3, name: "Argentine" },
        { id: 4, name: "Espagne" },
        { id: 5, name: "Allemagne" },
        { id: 6, name: "Etats-Unis" },
        { id: 7, name: "Portugal" },
        { id: 8, name: "Chili" },
        { id: 9, name: "Other" },
    ]

    const regions = {
        France: [
            "Bordeaux",
            "Bourgogne",
            "Champagne",
            "Vallée du Rhône",
            "Languedoc-Roussillon",
            "Vallée de la Loire",
            "Provence",
            "Sud-Ouest",
            "Alsace",
            "Beaujolais",
            "Corse",
            "Jura",
            "Savoie-Bugey",
        ],
        Italie: [
            "Abruzzo",
            "Alto Adige",
            "Basilicata",
            "Calabria",
            "Campania",
            "Emilia-Romagna",
            "Friuli-Venezia Giulia",
            "Lazio",
            "liguria",
            "Lombardia",
            "Marche",
            "Molise",
            "Piemonte",
            "Puglia",
            "Sardegna",
            "Sicilia",
            "Toscana",
            "Trentino",
            "Umrbia",
            "Valle d'Aosta",
            "Veneto",
        ],
        Argentine: [
            "Buenos Aires",
            "Catamarca",
            "Jujuy",
            "La Rioja",
            "Mendoza",
            "Neuquén",
            "Patagonia",
            "Rio Negro",
            "Salta",
            "San Juan",
        ],
        Espagne: [
            "Andalousie",
            "Castilla - La Mancha",
            "Castilla y Leon",
            "Rioja & Navarre",
            "Catalogne",
            "Galice",
            "Les îles",
        ],
        Portugal: [
            "Açores",
            "Alentejo",
            "Algarve",
            "Beira Atlantico",
            "Beira Interior",
            "Dão",
            "Madère",
            "Setúbal",
            "Távora Varosa",
            "Trás-os-Montes",
            "Tejo",
            "Vinho Verde",
            "Vallée du Douro",
            "Lisbonne",
        ],
    }

    const [selectedCountry, setSelectedCountry] = useState("")
    const [availableRegions, setAvailableRegions] = useState([])
    const [selectedRegion, setSelectedRegion] = useState("")
    const [otherCountry, setOtherCountry] = useState("")

    const handleCountryChange = (e) => {
        const country = e.target.value
        setSelectedCountry(country)
        setAvailableRegions(regions[country] || [])
        setSelectedRegion("")
        if (country !== "Other") {
            setOtherCountry("")
        }
    }

    const handleOtherCountryChange = (e) => {
        setOtherCountry(e.target.value)
    }

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value)
    }

    return (
        <>
            <div className="sm:col-span-3">
                <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                >
                    Select Country:{" "}
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>

                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </div>
            </div>
            <div className="mt-2 sm:col-span-3">
                {selectedCountry === "Other" ? (
                    <>
                        <label
                            htmlFor="other-country"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Please specify the country:{" "}
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                    id="other-country"
                                    type="text"
                                    value={otherCountry}
                                    onChange={handleOtherCountryChange}
                                    placeholder="Enter country name"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    selectedCountry && (
                        <>
                            <label
                                htmlFor="region"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Select Region:{" "}
                            </label>

                            <select
                                id="region"
                                value={selectedRegion}
                                onChange={handleRegionChange}
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option value="">Select a region</option>
                                {availableRegions.map((region, index) => (
                                    <option key={index} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </>
                    )
                )}
            </div>
        </>
    )
}

export default CountriesInput
