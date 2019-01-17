let common = [
    '--require-module babel-register',
    `--format ${
        process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
        }`,
    '--format rerun:rerun.txt',
    '--format usage:usage.txt',
    '--format json:test\\report\\cucumber_report.json'
].join(' ')

module.exports = {
    default: common,
}