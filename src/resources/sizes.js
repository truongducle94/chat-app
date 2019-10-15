import { platformOS, pixelRatio } from "lib/configs/config";

const header = {
    android: pixelRatio <= 2 ? 17 : 19,
    ios: pixelRatio <= 2 ? 18 : 20
}

const title = {
    android: pixelRatio <= 2 ? 16 : 17,
    ios: pixelRatio <= 2 ? 17 : 18
}

const semi_title = {
    android: pixelRatio <= 2 ? 15 : 16,
    ios: pixelRatio <= 2 ? 16 : 17
}

const content = {
    android: pixelRatio <= 2 ? 14 : 15,
    ios: pixelRatio <= 2 ? 14 : 15
}

const sub_content = {
    android: pixelRatio <= 2 ? 13 : 14,
    ios: pixelRatio <= 2 ? 13 : 14
}

const small_content = {
    android: 11,
    ios: 12
}

const sizes = {
    header: header[platformOS],
    title: title[platformOS],
    semi_title: semi_title[platformOS],
    content: content[platformOS],
    sub_content: sub_content[platformOS],
    small_content: small_content[platformOS],
}

export default sizes