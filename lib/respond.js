
const url = require ('url');
const path = require ('path');
const fs =require ('fs');
//const staticBasePath =
const staticBasePath = path.join(__dirname, '..','static');
const respond = (request, response) => {
    let pathname = url.parse(request.url, true).pathname;
 pathname = decodeURIComponent(pathname);
const fullStaticPath = path.join(staticBasePath, pathname);
if(!fs.existsSync(fullStaticPath)){
    console.log(`${fullStaticPath} does not exist`);
    response.write('404: file not found!');
    response.end();
}else {
    response.write('file found');
    response.end();
}

}
module.exports = respond;