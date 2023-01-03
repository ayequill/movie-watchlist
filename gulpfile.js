const { src, dest, series, watch } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-clean-css");
const jsMinify = require("gulp-terser");

// styles
function styles() {
  return src("./src/scss/**/*.scss")
    .pipe(scss())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cssMinify())
    .pipe(dest("./dist/styles/"));
}

// js

function scripts() {
  return src("./src/js/**/*.js").pipe(jsMinify()).pipe(dest("./dist/js"));
}

function watchTask() {
  watch(["./src/scss/**/*.scss", "./src/js/**/*.js"], series(styles, scripts));
}

exports.default = series(styles, scripts, watchTask);
