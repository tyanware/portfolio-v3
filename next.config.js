module.exports = {
  images: {
    domains: ['i.imgur.com', 'images.unsplash.com', 'media.giphy.com', 'images.ctfassets.net', 'images.contentful.com'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/BJ8sWHntYb',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/tygerxqt',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/tygerxqt',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/tygerxqt',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCDCBrrYkHrt4cFnoA2SKMdA',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://www.twitch.tv/tygerxqt',
        permanent: true,
      },
      {
        source: '/mail',
        destination: 'mailto:tygerxqt@nordstud.io',
        permanent: true,
      }
    ]
  }
}