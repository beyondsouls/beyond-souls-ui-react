const path = require("path");
const gulp = require("gulp");
const babel = require("gulp-babel");
const postcss = require("gulp-postcss");
const SOURCE = "./src";

gulp.task("js", function() {
    return gulp
        .src([
            `${SOURCE}/**/*.js`,
            `!${SOURCE}/**/*.spec.js`,
            `!${SOURCE}/**/__test__`,
            `!${SOURCE}/__mocks__/**/*.js`
        ])
        .pipe(babel())
        .pipe(gulp.dest("./lib"));
});

gulp.task("default", ["js"]);
