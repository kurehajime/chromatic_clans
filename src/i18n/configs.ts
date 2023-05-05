import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// 言語jsonファイルのimport
import translation_en from "./en.json"
import translation_ja from "./ja.json"

const resources = {
    ja: {
        translation: translation_ja
    },
    en: {
        translation: translation_en
    },
}
const lang = (navigator.language).toLowerCase()
let location = ''
if (lang.includes("en")) {
    location = "en"
}
if (lang.includes("de")) {
    location = "de"
}
if (lang.includes("ja")) {
    location = "ja"
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        lng: location,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n