const updatedAt = new Date().toISOString()

const ALL_URLS = [
    {
        link: "https://www.shokirov.uz"
    },
    {
        link: "https://www.shokirov.uz/works"
    },
    {
        link: "https://www.shokirov.uz/posts"
    },
    {
        link: "https://blog.shokirov.uz"
    },
    // {
    //     link: "https://gallery.shokirov.uz"
    // },
]

function generateSiteMap(urls) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls.map(({ link }) => {
        return `
       <url>
           <loc>${link}</loc>
           <lastmod>${updatedAt}</lastmod>
       </url>
     `;
    })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(ALL_URLS);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;