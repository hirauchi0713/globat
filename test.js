const globat = require('./index')
const logger = require('gorilog')()

function test(name, pat) {
  return new Promise((resolve, reject)=>{
    logger.info(`${name} test`)
    globat(pat, (err, text)=>{
      if (err) { return reject(err) }
      logger.info(`${name} err`, err)
      logger.info(`${name} text`, text)
      resolve()
    })
  })
}

Promise.resolve()
  .then(()=>{ return test('scss', 'testdir/**/*.scss')})
  .then(()=>{ return test('01',   'testdir/**/01_*.*') })
  .then(()=>{ return test('none', 'testdir/**/none_*.*') })
  .then(()=>{ return test('error', null) })
  .catch(e=>{logger.info(e.message='glob pattern string required' ? 'OK' : 'NG')})
