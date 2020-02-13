const gulp = require('gulp')
const nodemon = require('gulp-nodemon')



gulp.task('default',() => {
    var stream  = nodemon({
        script: "src/app.js",
        ignore: ['node_modules'],
    })

    stream.on('crash',() => console.log('package crashed'))
})