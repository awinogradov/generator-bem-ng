({
    shouldDeps: [
        {elem: 'module'},
        {elem: 'controllers', mods: {'<%= _.slugify(module) %>': true}},
        {elem: 'routes'}
        // {elem: 'directives', mods: {'name': true}}
        // {elem: 'factories', mods: {'name': true}}
        // {elem: 'services', mods: {'name': true}}
    ]
})
