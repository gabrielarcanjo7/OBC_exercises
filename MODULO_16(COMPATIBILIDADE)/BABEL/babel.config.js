const presets = [
    [
        "@babel/preset-env", //preset
        {
            //config do projeto
            useBuiltIns: "usage",
            corejs: "3.3.2"
        }
    ]
]

module.exports = { presets }
// presets: presets