module.exports = {
    "jsc": {
        "parser": {
            "syntax": "ecmascript",
            "jsx": true,
            "dynamicImport": true,
            "importMeta": true
        },
        "transform": {
            "react": {
                "runtime": "automatic",
                "pragma": "React.createElement",
                "pragmaFrag": "React.Fragment"
            }
        },
        "target": "es2017",
        "experimental": {
            "plugins": [
                ["no-op-plugin", {}]
            ]
        }
    },
    "sourceMaps": true
}
