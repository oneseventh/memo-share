'use client'

import { getCookieClient, setCookieClient } from "./cookie-client"

export const toggleTheme = async () => {
    document.body.setAttribute('data-theme', await currentTheme() === "dark" ? "light" : "dark")
    setCookieClient("lilydb.theme", await currentTheme() === "dark" ? "light" : "dark")
}

export const currentTheme = async () => {
    try {
        const theme = await getCookieClient("lilydb.theme") || "dark"

        if (theme !== "dark" && theme !== "light") {
            return "dark"
        }

        return theme
    } catch (e) {
        return "dark"
    }
}