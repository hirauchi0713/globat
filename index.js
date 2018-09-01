const glob = require('glob')
const fs = require('promise-fs')

function main(pats, fn) {
  glob(pats, null, (err, entries)=>{
    if (err) {
      return fn(err)
    }
    Promise.all(entries.sort().map(f=>fs.readFile(f)))
      .then(texts=>{
        return fn(null, texts.map(e=>e.toString('utf-8')).join(''))
      })
      .catch(e=>{
        return fn(e)
      })
  })
}

module.exports = main
