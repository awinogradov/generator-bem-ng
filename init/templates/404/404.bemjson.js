({
    block: 'page',
    mods: { type : 'clear' },
    title: 'Page Not Found :(',
    head: [
        { elem: 'css', url: 'styles/pages.min.css', ie: false },
        { elem: 'js', url:'scripts/pages.min.js' }
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
