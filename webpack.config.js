// const path = require('path')
import  path  from "path";
const __dirname = path.resolve();

const webpackConfig = {
  mode : 'development',
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "bundle.js"
  }
}

export default webpackConfig;