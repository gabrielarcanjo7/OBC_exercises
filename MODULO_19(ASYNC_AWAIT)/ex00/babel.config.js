const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // Garante que apenas os polifills necessários sejam incluídos
        corejs: "3.3.2" // Versão do core-js a ser usada
      }
    ]
  ];
  
  module.exports = { presets };
  