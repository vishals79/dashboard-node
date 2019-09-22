const filename = '../data/dashboard_data.json'
let data = require(filename)


function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(data)
    })
}
module.exports = {
    getData
}