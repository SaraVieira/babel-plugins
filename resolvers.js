const axios = require('axios')

const endpoint = 'https://api.npms.io/v2/search?q=babel+plugin&size=250'

const getName = name => name.split(' ').join('+')
const getResults = rsp => rsp.data.results

module.exports = {
  Query: {
    plugins: (
      _,
      {
        name = null,
        official = null,
        minScore = 0,
        version,
        babelWebsite = false
      }
    ) => {
      let plugins
      if (!name) {
        plugins = axios(endpoint).then(rsp => getResults(rsp))
      }

      if (name) {
        plugins = axios(
          `https://api.npms.io/v2/search?q=babel+plugin+${getName(
            name
          )}&size=250`
        ).then(rsp => getResults(rsp))
      }

      if (official) {
        plugins = axios(
          `https://api.npms.io/v2/search?q=babel+plugin++@babel&size=250`
        )
          .then(rsp => getResults(rsp))
          .then(p =>
            p.map(p => ({
              ...p,
              package: {
                ...p.package,
                scope: `@babel`
              }
            }))
          )
      }

      return plugins
        .then(rsp => rsp.sort((a, b) => b.searchScore - a.searchScore))
        .then(p =>
          p
            .map(p => ({
              ...p,
              bundled: `https://bundle.run/${p.package.name}@${version ||
								p.package.version}`
            }))
            .filter(p => p.score.final >= minScore)
            .filter(p => !p.package.name.includes('preset'))
            .filter(
              p =>
                babelWebsite ? !p.package.name.includes('plugin-syntax') : true
            )
        )
    }
  }
}
