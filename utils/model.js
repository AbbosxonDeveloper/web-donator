import path from 'path'
import fs from 'fs'

function read(filename) {
    let data = fs.readFileSync(path.join(process.cwd(), 'database', filename + '.json'), "utf-8")
    return JSON.parse(data)
}

function write(filename, data) {
    fs.writeFileSync(path.join(process.cwd(), 'database', filename + '.json'), JSON.stringify(data, null, 4))
    return true
}

export {
    read,
    write
}