const PATH = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const Fiber = require('fibers');

const MODE = 'production';// production or development
const SOURCEMAP = (MODE === 'development');

module.exports = [
  {
    mode: MODE,
    devtool: "source-map",
  
    entry: {
      './assets/js/app': './src/js/main.js',
      './assets/css/style.css': './src/scss/style.scss',
    },
    
    output: {
      path: PATH.join(__dirname, '/'),
      filename: '[name].js'
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          },
          exclude: /(node_modules|dist)/
        },



        
        {
          test: /\.(sc|c|sa)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: SOURCEMAP,
              }
            },
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     sourceMap: SOURCEMAP,
            //     plugins: [
            //       require('cssnano')({
            //         preset: 'default',
            //       }),
            //       require('autoprefixer')({
            //         grid: true
            //       })
            //     ]
            //   }
            // },
            // {
            //   loader: 'sass-loader',
            //   options: {
            //     sourceMap: SOURCEMAP,
            //   }
            // }
            
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sourceMap: SOURCEMAP,
                sassOptions: {
                  fiber: Fiber
                }
              }
            }

          ]
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]',
        chunkFilename: '[id]'
      }),

    ]

  },

]