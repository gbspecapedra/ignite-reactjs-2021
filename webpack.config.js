const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//uso de variáveis de ambiente
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map", //facilita a visualização do código pelo debugger no browser
  entry: path.resolve(__dirname, "src", "index.jsx"), //file principal da aplicação
  output: {
    //file de saída com código convertido entendido pelo browser
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], //arquivos lidos para funcionamento da aplicação
  },
  devServer: {
    //listener de alterações no código, automatiza a conversão do webpack e babel
    contentBase: path.resolve(__dirname, "public"),
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
