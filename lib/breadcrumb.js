const path= require ('path');
const buildBreadcrumb = pathname => {
 const pathChunks = pathname.split('/').filter(element => element !== '');
 console.log(`pathChunks" ${pathChunks}`);

 let breadcrumb = `<li class="breadcrumb-item"><a href="/">Home</a></li>`;

 let link =`/`;
 pathchunks.forEach(item=> { link = path.join(link, item);
 breadcrumb += `<li class="breadcrumb-item"><a href="${link}">${item}</a></li>`;
 });

};
module.exports = buildBreadcrumb;