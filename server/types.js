module.exports = `
  type Query {
    # Get a list of babel plugins
    plugins(
        version: String,
        name: String,
        official: Boolean,
		minScore: Float
		babelWebsite: Boolean
    ): [Plugin]
  }

  type Link {
      npm: String
      homepage: String
      repository: String
      bugs: String
  }

  type Author {
      name: String
      email: String
      url: String
  }

  type Publisher {
      username: String
      email: String
  }

  type Maintainer {
      username: String
      email: String
  }

  type Package {
      name: String
      scope: String
      version: String
      description: String
      keywords: [String]
      date: String
      links: Link
      author: Author
      publisher: Publisher
      maintainers: [Maintainer]
  }

 type Detail {
    quality: Float
    popularity: Float
    maintenance: Float
 }

  type Score {
      final: Float
      detail: Detail
  }


  type Plugin {
	  id: String
      package: Package
      score: Score
      searchScore: Float
      bundled: String
  }
`
