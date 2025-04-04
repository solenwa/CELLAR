import { PhotoIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import CepagesInput from "../components/CepagesInput"
import CountriesInput from "../components/CountriesInput"

export default function NewWinepage() {
    return (
        <form className="m-5">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">
                        Ajouter un vin à ma cave
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="domaine"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Domaine
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        id="domaine"
                                        name="domaine"
                                        type="text"
                                        placeholder="Château du Cèdre"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="cuvee"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Cuvée
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        id="cuvee"
                                        name="cuvee"
                                        type="text"
                                        placeholder="Cèdre Héritage"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <CountriesInput />

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="couleur"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Couleur
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="couleur"
                                    name="couleur"
                                    autoComplete="couleur-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Rouge</option>
                                    <option>Blanc</option>
                                    <option>Rosé</option>
                                    <option>Effervescent</option>
                                    <option>Vin Doux Naturel</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="taille"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Taille
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="taille"
                                    name="taille"
                                    autoComplete="taille-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Standard (75cl)</option>
                                    <option>Magnum (1,5L)</option>
                                    <option>Jéroboam (3L)</option>
                                    <option>Réhoboam (4,5L)</option>
                                    <option>Mathusalem (6L)</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="millesime"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Millésime
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        id="millesime"
                                        name="millesime"
                                        type="month"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="quantite"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Quantité
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        id="quantite"
                                        name="quantite"
                                        type="number"
                                        placeholder="0"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label>Cépages</label>
                            <CepagesInput />
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Mes notes
                            </label>
                            <p className="mt-3 text-sm/6 text-gray-600">
                                Ajoutez votre avis sur ce vin
                            </p>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    defaultValue={""}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Photo de l&apos;étiquette
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto size-12 text-gray-300"
                                    />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="focus-within:outline-hidden relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm/6 font-semibold text-gray-900"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    className="shadow-xs rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Ajouter
                </button>
            </div>
        </form>
    )
}
