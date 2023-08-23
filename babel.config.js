module.exports = function(api) {
    api.cache(true)
    return {
        plugins: [
            [
                'module-resolver',
                {
                    'alias': {
                        '@config': './src/config',
                        '@data': './src/data',
                        '@domain': './src/domain',
                        '@ui': './src/ui'
                    },
                    'root': ['.']
                }
            ]
        ],
        presets: ['babel-preset-expo']
    }
}
