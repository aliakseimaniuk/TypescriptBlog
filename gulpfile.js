var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    tsc = require("gulp-typescript");

var tsProject = tsc.createProject("tsconfig.json");

gulp.task("build-app", function () {
    return gulp.src([
        "app/**/**.ts"
    ])
        .pipe(tsc(tsProject))
        .js.pipe(gulp.dest("app/"));
});

// Rebuild project on any ts file changed
gulp.task('watch', function () {
    gulp.watch("app/**/**.ts", ['build-app']);
});

// Linting the project
gulp.task("lint", function () {
    return gulp.src([
        "app/**/**.ts"
    ])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});