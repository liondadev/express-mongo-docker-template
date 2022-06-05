/*
    Logging utility
    This comes with the template do you don't have to make your own.

    This is not required, and can be removed if you don't need it.
*/

let colors = new Map();

/*
    Source: https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

    Black: \u001b[30m
    Red: \u001b[31m
    Green: \u001b[32m
    Yellow: \u001b[33m
    Blue: \u001b[34m
    Magenta: \u001b[35m
    Cyan: \u001b[36m
    White: \u001b[37m
    Reset: \u001b[0m
*/

colors.set("black", "\u001b[30m")
colors.set("red", "\u001b[31m")
colors.set("green", "\u001b[32m")
colors.set("yellow", "\u001b[33m")
colors.set("blue", "\u001b[34m")
colors.set("magenta", "\u001b[35m")
colors.set("cyan", "\u001b[36m")
colors.set("white", "\u001b[37m")
colors.set("reset", "\u001b[0m")

module.exports = (message, color) => {
    if (typeof message === "object") {
        message = JSON.stringify(message);
    }

    let time = new Date().toLocaleString();

    if (color) {
        console.log(`${colors.get(color)}[${time}] >> ${message}${colors.get("reset")}`)
    } else {
        console.log(message)
    }
}
