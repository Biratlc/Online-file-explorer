
const url = require ('url');
const path = require ('path');
const fs =require ('fs');
 const buildBreadcrumb = require('./breadcrumb.js')

const staticBasePath = path.join(__dirname, '..','static');
const respond = (request, response) => {
    let pathname = url.parse(request.url, true).pathname;
 pathname = decodeURIComponent(pathname);
const fullStaticPath = path.join(staticBasePath, pathname);
if(!fs.existsSync(fullStaticPath)){
    console.log(`${fullStaticPath} does not exist`);
    response.write('404: file not found!');
    response.end();
    return false;
}
let stats;
try {
    stats = fs.lstatSync(fullStaticPath);
}catch(err){
    console.log(`lstatSync Error :${err}`);
}
if(stats.isDirectory()){ 
    let data = fs.readFileSync(path.join(staticBasePath, 'project_files/index.html'), 'utf-8');
  console.log(pathname);
  let pathElements = pathname.split('/').reverse();
  pathElements = pathElements.filter(element => element !== '');
  const folderName = pathElements[0];
  console.log(folderName);
  data = data.replace('page_title',folderName);
  const breadcrumb = buildBreadcrumb(pathname);
  data = data.replace('pathname', breadcrumb);
    response.statusCode = 200;
    response.write(data);
    response.end();
}
response.write(stats.isDirectory().toString());
response.end();

}
module.exports = respond;