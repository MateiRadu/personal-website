const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const minify = require('@node-minify/core')
const htmlMinifier = require('@node-minify/html-minifier')
const cssnano = require('@node-minify/cssnano')

const BUILD_DIR = path.resolve(getRootPath(), 'dist')
const SRC_DIR = path.resolve(getRootPath(), 'src')

function build() {
  // Cleanup
  rimraf.sync(BUILD_DIR)
  fs.mkdirSync(BUILD_DIR)

  // HTML
  minify({
    compressor: htmlMinifier,
    input: path.resolve(SRC_DIR, 'index.html'),
    output: path.resolve(BUILD_DIR, 'index.html'),
  })

  // CSS
  minify({
    compressor: cssnano,
    input: path.resolve(SRC_DIR, 'style.css'),
    output: path.resolve(BUILD_DIR, 'style.css'),
  })
}

function getRootPath() {
  return path.dirname(process.mainModule.filename)
}

build()
