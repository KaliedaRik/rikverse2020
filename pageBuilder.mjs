console.log('page builder called');

import fs from 'fs';

// index.html template
const buildIndexFile = (data) => {

    let domain = 'https://rikverse2020.rikweb.org.uk';
    let indexfileLocation = '`${location.origin}/?p=${location.pathname.substring(1)}`';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${data.tabTitle}</title>

    <!-- to prevent caching -->
    <meta http-equiv="cache-control" content="max-age=0">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT">
    <meta http-equiv="pragma" content="no-cache">

    <!-- general page metadata -->
    <meta name="author" content="Rik Roots">
    <meta name="description" content="${data.title} - ${data.description}">

    <!-- Facebook metadata -->
    <meta property="fb:app_id" content="210285656772999" />
    <meta property="og:url" content="${domain}/${data.path}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${data.title}" />
    <meta property="og:description" content="${data.description}" />
    <meta property="og:image" content="${domain}${data.imageUrl}" />

    <!-- Twitter metadata -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${data.title}">
    <meta name="twitter:description" content="${data.description}">
    <meta name="twitter:image" content="${domain}${data.imageUrl}">
    <meta name="twitter:image:alt" content="${data.imageText}">

</head>
<body>
    <script>
        if (location.pathname) location.href = ${indexfileLocation};
        else location.href = location.origin;
    </script>
</body>
</html>`;
};

// This function creates the directory if it doesn't already exist
const checkDirectory = (dir) => {

    return new Promise((resolve, reject) => {

        fs.access(dir, fs.constants.F_OK, (err) => {

            if (err) fs.mkdir(dir, { recursive: false }, (err) => {

                if (err) reject(`failed to create ${dir}`);
                else resolve(`created ${dir}`);
            });

            else resolve(`${dir} already exists and can access`);
        });
    });
};

// This function generates index pages
const writeIndexFile = (data, directory) => {

    return new Promise((resolve, reject) => {

        fs.open(`${directory}/index.html`, 'wx', (fileError, fd) => {

            if (fileError && fileError.code !== 'EEXIST') reject(`error for ${directory}/index.html - ${fileError.code}, ${fileError.message}`);

            fs.writeFile(`${directory}/index.html`, buildIndexFile(data, directory), 'utf8', (writeError) => {

                if (writeError) reject(`failed to write ${directory}/index.html file: ${writeError.code}, ${writeError.message}`);

                else resolve(`${directory}/index.html file updated`)
            });
         });
    });
};

// Process the router base pages index files
import pageData from './src/data/pageData.mjs';
pageData.forEach(page => {

    page.path = page.id;

    checkDirectory(`./public/${page.id}`)
    .then(res => writeIndexFile(page, `./public/${page.id}`))
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

// Process the blogpost files
import blogpostData from './src/data/blogpostData.mjs';
blogpostData.forEach(post => {

    post.path = `blog/${post.id}`;

    checkDirectory(`./public/blog/${post.id}`)
    .then(res => writeIndexFile(post, `./public/blog/${post.id}`))
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

// Process the book files
import bookData from './src/data/bookData.mjs';
bookData.forEach(book => {

    book.path = `book/${book.id}`;

    checkDirectory(`./public/book/${book.id}`)
    .then(res => writeIndexFile(book, `./public/book/${book.id}`))
    .then(res => checkDirectory(`./public/read/${book.id}`))
    .then(res => {

        book.path = `read/${book.id}`;
        return writeIndexFile(book, `./public/read/${book.id}`);
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

// Process the poem files
import poemData from './src/data/poemData.mjs';
poemData.forEach(poem => {

    poem.path = `poem/${poem.id}`;

    checkDirectory(`./public/poem/${poem.id}`)
    .then(res => writeIndexFile(poem, `./public/poem/${poem.id}`))
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

