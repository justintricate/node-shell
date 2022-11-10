// prompt > 
// const importcwd = require('import-cwd')
// console.log(importcwd)

process.stdout.write('prompt >')

process.stdin.on('data', (data) => {
    console.log(data)
    const cmd = data.toString().trim()
     const { cwd } = require('node:process')

    if (cmd === 'pwd') {
        process.stdout.write(`current directory: ${cwd()}`)
    } else {
        process.stdout.write('You typed: ' + cmd)
    }
    process.stdout.write('\nprompt > ')
})