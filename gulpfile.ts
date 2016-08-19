const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("./tsconfig.json");
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync').create();

gulp.task("clean",(cb)=>{
  return del(["build"],cb);
});

gulp.task("compile", ()=>{

var tsFiles = gulp.src("src/**/*.ts").pipe(sourcemaps.init()).pipe(tsc(tsProject));
tsFiles.js.pipe(sourcemaps.write(".")).pipe(gulp.dest("build"));

});

gulp.task("resources",()=>{
return gulp.src(["src/**/*","!**/*.ts"]).pipe(gulp.dest("build"));
});





/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...")
});


gulp.task("startServer", ['compile','resources'],()=> {

    browserSync.init({
    "port": 8000,
    "files": [
      "build/**/*.{html,htm,css,js}"
    ],
    "server": {
      "baseDir": "build"
    }
    });

    gulp.watch('src/**/*.ts',['compile']);
    gulp.watch('src/**/*.{html,css}',['resources']);
    gulp.watch('build/**/*.{html,css,js}').on('change', browserSync.reload);
});


gulp.task("default", ['startServer']);
