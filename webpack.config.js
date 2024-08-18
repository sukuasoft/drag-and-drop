const path =require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
        
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }], 
                  ["@babel/preset-react" ]
                ]
              }
            }
          }, 
          {
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader'
              ],
            
          },
        ]
      }
      
};