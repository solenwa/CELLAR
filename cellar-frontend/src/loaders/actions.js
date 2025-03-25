import { redirect } from "react-router-dom"

export async function signinAction({ request }) {
    const data = await request.formData()
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    }
    console.log(authData)

    const response = await fetch("http://localhost:4000/api/users/signin", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    })

    if (response.status === 401) {
        return response
    }

    if (!response.ok) {
        throw new Error(
            { message: "Could not authenticate user." },
            { status: 500 },
        )
    }

    const resData = await response.json()
    const token = resData.token

    localStorage.setItem("token", token)
    const expiration = new Date()
    expiration.setHours(expiration.getHours() + 1)
    localStorage.setItem("expiration", expiration.toISOString())

    return redirect("/")
}

export async function signupAction({ request }) {
    const data = await request.formData()
    const authData = {
        name: data.get("name"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
    }

    const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    })

    if (response.status === 401) {
        return response
    }

    if (!response.ok) {
        throw new Error(
            { message: "Could not authenticate user." },
            { status: 500 },
        )
    }

    const resData = await response.json()
    const token = resData.token

    localStorage.setItem("token", token)
    const expiration = new Date()
    expiration.setHours(expiration.getHours() + 1)
    localStorage.setItem("expiration", expiration.toISOString())

    return redirect("/signin")
}

export function logoutAction() {
    localStorage.removeItem("token")
    localStorage.removeItem("expiration")
    return redirect("/")
}

export const multiPropsFilter = (arr, filters) => {
    const filterKeys = Object.keys(filters)
    return arr.filter((product) => {
        return filterKeys.every((key) => {
            if (!filters[key].length) return true
            // Loops again if product[key] is an array
            if (Array.isArray(product[key])) {
                return product[key].some((keyEle) =>
                    filters[key].includes(keyEle),
                )
            }
            return filters[key].includes(product[key])
        })
    })
}

export function sortBasedOnKey(array, property, order) {
    if (order === "ascending") {
        return array.sort(function (o1, o2) {
            let x = o1[property]
            let y = o2[property]
            return x < y ? -1 : x > y ? 1 : 0
        })
    } else {
        return array.sort(function (o1, o2) {
            let x = o1[property]
            let y = o2[property]
            return x > y ? -1 : x < y ? 1 : 0
        })
    }
}
