const fetch = require('isomorphic-fetch')

const static = {
  '/': {page: '/'},
  '/packages': {page: '/packages'},
  '/plugins': {page: '/plugins'},
  '/client': {page: '/client'},
  '/component': {page: '/component'},
  '/xml': {page: '/xml'},
}

module.exports = {
  exportPathMap: async function () {
    const response = await fetch('http://localhost:3000/api/plugins/')
    const plugins = await response.json()
    return Object.assign(static, plugins.reduce((paths, plugin) => {
      paths[`/plugins/${plugin}`] = {page: '/plugin', query: {id: plugin}}
      return paths
    }, {}))
  },
}
