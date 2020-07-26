const today = () => {
    return {
        type: "TODAY",
    }
}

const yesterday = () => {
    return {
        type: "YESTERDAY",
    }
}

const weekAgo = () => {
    return {
        type: "WEEKAGO",
    }
}

const monthAgo = () => {
    return {
        type: "MONTHAGO",
    }
}


export default {
    today,
    yesterday,
    weekAgo,
    monthAgo,
}