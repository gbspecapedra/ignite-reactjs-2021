const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"), //file principal da aplicação
  output: {
    //file de saída com código convertido entendido pelo browser
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], //arquivos lidos para funcionamento da aplicação
  },
  plugins: [
    new HtmlWebpackPlugin({
      //injeta arquivo js no html, melhora o fluxo da aplicação
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    //regras de como a aplicação deve se comportar com diferentes importações nos files
    rules: [
      {
        test: /\.jsx$/, //verificar se esse file é desse formato ou não
        exclude: /node_modules/, //cada biblioteca deve se preocupar com seu processo de build
        use: "babel-loader", //integração entre webpack e babel: webpack identifica e babel converte;
      },
    ],
  },
};
