({
    block: 'page',
    title: 'Yeoman BEM',
    favicon: 'favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: '_index.css', ie: false }],
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [
                {
                    block: 'title',
                    tag: 'h2',
                    content: [
                        'Hello! This page generated by Yeoman generator-bem.'
                    ]
                }
            ]
        },
        {
            elem: 'content',
            tag: 'main',
            attrs: { role: 'main' },
            content: [
                'Find this in app/bundles/index/index.bemjson.js'
            ]
        },
        {
            elem: 'footer',
            tag: 'footer',
            content: [
                'License: ',
                {
                    block: 'link',
                    url: 'http://opensource.org/licenses/MIT',
                    content: [
                        'MIT'
                    ]
                }
            ]
        }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }]
})