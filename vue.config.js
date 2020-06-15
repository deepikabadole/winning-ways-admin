module.exports = {
  // devServer:{
  //   proxy:'http://workportal.in/api'
  // },

  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
}
