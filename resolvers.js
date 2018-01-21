const axios = require('axios')

const endpoint = 'https://api.npms.io/v2/search?q=babel+plugin'

const getName = name => name.split(' ').join('+')
const getResults = rsp => rsp.data.results

module.exports = {
  Query: {
    plugins: (
      _,
      { name = null, official = null, minScore = 0, version = 'latest' }
    ) => {
      let plugins
      if (!name) {
        plugins = axios(endpoint).then(rsp => getResults(rsp))
      }

      if (name) {
        plugins = axios(`${endpoint}+${getName(name)}`).then(rsp =>
          getResults(rsp)
        )
      }

      if (official) {
        plugins = axios(`${endpoint}+@babel`).then(rsp =>
          getResults(rsp)
        ).then(p =>
          p
            .map(p => ({
              ...p,
              package: {
                ...p.package,
                scope: `@babel`
              }
            })))
      }

      return plugins
        .then(rsp => rsp.sort((a, b) => b.searchScore - a.searchScore))
        .then(p =>
          p
            .map(p => ({
              ...p,
              bundled: `https://bundle.run/${p.package.name}@${version}`
            }))
            .filter(p => p.score.final >= minScore)
        )
    }
  }
}
