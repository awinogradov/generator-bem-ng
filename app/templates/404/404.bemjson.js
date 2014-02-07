({
    block: 'page',
    mods: { type : 'clear' },
    title: 'Page Not Found :(',
    head: [
        { elem: 'css', url: '_404.css', ie: false },
        { elem: 'css', url: '_404', ie: true },
        { elem: 'js', url:'_404.js' }
    ],
    content: [
        {
            block: 'http-status',
            title: 'Not found ',
            smile: ':(',
            text: [ 'Sorry, but the page you were trying to view does not exist.',
                    'It looks like this was the result of either:' ],
            troubles: [ 'a mistyped address',
                        'an out-of-date link']
        }
    ]
})
