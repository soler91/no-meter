const path = require("path")
const fs = require("fs")

class deletthis {
    constructor(mod) {
        const targetDir = path.resolve(mod.clientInterface.info.path, "DamageMeter")
        for (const file of fs.readdirSync(targetDir)) {
            fs.unlinkSync(path.resolve(targetDir, file))
        }
    }
}

module.exports = {
    ClientMod: deletthis
}