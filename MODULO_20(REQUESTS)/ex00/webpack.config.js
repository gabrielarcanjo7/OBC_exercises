const path = require('path');

module.exports = {
    entry: "./src/index.js", // Ponto de entrada do seu aplicativo
    output: {
      filename: "bundle.js", // Nome do arquivo de saída
      path: path.resolve(__dirname, "dist"), // Diretório de saída
    },
    mode: 'development', // Modo de desenvolvimento para uma build não minificada
    devServer: {
      static: path.resolve(__dirname, 'dist'), // Diretório dos arquivos estáticos
      port: 9000, // Porta do servidor de desenvolvimento
      hot: true // Habilita o hot module replacement
    },
    module: {
      rules: [
        {
          test: /\.js$/, // Arquivos que serão processados pelo loader
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // Loader que será utilizado
          },
        },
      ],
    },
  };