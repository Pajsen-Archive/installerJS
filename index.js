const fs = require('fs');
const axios = require('axios');
let Location = ""
function install(address, path) {
    if (address === undefined || address === null) {
        throw new Error('address is required');
    }
    if (path === undefined || path === null) {

        Location = "./downloads/"
    } else {
        Location = path
    }
    axios
        .get(address)
        .then(res => {
            const url = new URL(address);
            const url_path = url.pathname;
            const extension = url_path.split('.').pop();
            const host = res.request.host;
            let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let text = "";
            for (let i = 0; i < 8; i++)
                text += charset.charAt(Math.floor(Math.random() * charset.length));
            if (extension === null) {
                fs.writeFile(Location + host.replace(".", "_") + "-" + text + '.txt', res.data, (err) => {
                    if (err) throw err;
                });
            }
            else {
                fs.writeFile(Location + host.replace(".", "_") + "-" + text + '.' + extension, res.data, (err) => {
                    if (err) throw err;
                }
                );
            }

        })
        .catch(error => {
            console.error(error);
        });
}


module.exports = install;