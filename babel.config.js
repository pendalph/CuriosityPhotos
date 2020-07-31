module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.js',
                    '.ios.js',
                    '.android.js',
                    '.native.js',
                    '.web.js'
                ],
                alias: {
                    components: './src/components',
                    modules: './src/modules',
                    screens: './src/screens',
                    services: './src/services',
                    types: './src/types',
                    theme: './src/theme',
                    config: './src/config'
                }
            }
        ]
    ]
};
