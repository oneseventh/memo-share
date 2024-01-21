'use server'

import { cookies } from "next/headers"

export async function deleteCookieClient(key) {
    cookies().delete(key)
}

export async function setCookieClient(key, value, option) {
    cookies().set(key, value, { secure: true, httpOnly: true, sameSite: "strict" })
}

export async function getCookieClient(key) {
    return cookies().get(key)?.value || null
}