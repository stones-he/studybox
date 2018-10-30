var routes = [
  // Index page
  {
    path: '/',
    templateUrl: './index.html',
    name: 'home',
  }, {
    path: '/video/',
    url: './pages/video.html'
  }, {
    path: '/book-details/:bid',
    componentUrl: './pages/book/details.html'
  }, {
    path: '/book-details/mp3/:bid',
    componentUrl: './pages/book/units.html'
  }, {
    path: '/book-details/mp3/:bid/:uid',
    componentUrl: './pages/book/video.html'
  }, {
    path: '/book-details/wordlist/:bid/:uid',
    componentUrl: './pages/book/wordlist.html'
  },
  // 
  
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];