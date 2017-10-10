# Experiments in TypeScript

This repository is a simple build of a TypeScript + React + Redux application.
I've gone out of my way to reduce the dependencies here (e.g. implementing a
naive hot reloader) in an effort to combat the dependency mess that NPM projects
seem to inevitably lead to.  At the same time, I've tried to keep things
manageable here, without leaving too much extra work.

For now, I build via the command line with:

    C:\experiments-in-typescript> webpack
    C:\experiments-in-typescript> # or
    C:\experiments-in-typescript> webpack --watch

Though npm should provide an easy way to start these builds, I haven't been able
to get that working, and I've decided that for now it's not worth the extra time
to figure it out.
