function makeResults() {
  return {
    results: [
      {
        id: '5d914028302b840050acbe62',
        picture:
          'https://utellyassets9-1.imgix.net/api/Images/4e4d50a0040fd4500193202edbafce6a/Redirect',
        name: 'BoJack Horseman',
        locations: [
          {
            display_name: 'Netflix',
            icon:
              'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/NetflixIVAUS.png?w=92&auto=compress&app_version=a0041586-5e2a-4a1d-8e92-e9d1d3a9feaf_ersss2020-02-12',
            id: '5d81fe2fd51bef0f42268f0f',
            name: 'NetflixIVAUS',
            url: 'https://www.netflix.com/title/70298933'
          }
        ],
        provider: 'iva',
        weight: 9928
      },
      {
        id: '5e2ce07890c0e033a487e3d2',
        picture:
          'https://utellyassets9-1.imgix.net/api/Images/4d0c65a4d0d8a24ea47e6a64d12c4633/Redirect',
        name: 'Dragon Ball Z: Bojack Unbound',
        locations: [
          {
            display_name: 'iTunes',
            icon:
              'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=a0041586-5e2a-4a1d-8e92-e9d1d3a9feaf_ersss2020-02-12',
            id: '5d80a9a5d51bef861d3740d3',
            name: 'iTunesIVAUS',
            url:
              'https://itunes.apple.com/us/movie/dragon-ball-z-bojack-unbound-subtitled-original-version/id1381102560'
          }
        ],
        provider: 'iva',
        weight: 0
      }
    ],
    updated: '2020-02-12T05:14:40+0000',
    term: 'bojack',
    status_code: 200,
    variant: 'ivafull'
  }
}

module.exports = { makeResults }
