module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "babel"
    ],
    "globals": {
      "window": true
    },
    "parser": "babel-eslint",
    "rules": {
      "arrow-body-style": [1, "as-needed"],
      "indent": [2, 4],
      "react/jsx-indent": [2, 4],
      "react/jsx-indent-props": [2, 4],
      "react/jsx-closing-bracket-location": [2, "tag-aligned"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "max-len": [2, 80, 4],
      "babel/generator-star-spacing": 1,
      "babel/new-cap": 1,
      "babel/array-bracket-spacing": 1,
      "babel/object-shorthand": 1,
      "babel/arrow-parens": 1,
      "babel/no-await-in-loop": 1
    },
};