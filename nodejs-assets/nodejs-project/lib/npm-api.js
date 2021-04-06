module.exports = (() => {
  var __webpack_modules__ = {
    696: (module) => {
      'use strict';
      module.exports = JSON.parse(
        '{"_from":"axios@^0.21.1","_id":"axios@0.21.1","_inBundle":false,"_integrity":"sha1-IlY0gZYvTWvemnbVFu8OXTwJsrg=","_location":"/axios","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"axios@^0.21.1","name":"axios","escapedName":"axios","rawSpec":"^0.21.1","saveSpec":null,"fetchSpec":"^0.21.1"},"_requiredBy":["/paged-request"],"_resolved":"https://registry.npm.taobao.org/axios/download/axios-0.21.1.tgz?cache=0&sync_timestamp=1608611162952&other_urls=https%3A%2F%2Fregistry.npm.taobao.org%2Faxios%2Fdownload%2Faxios-0.21.1.tgz","_shasum":"22563481962f4d6bde9a76d516ef0e5d3c09b2b8","_spec":"axios@^0.21.1","_where":"C:\\\\Users\\\\wangh\\\\Desktop\\\\APPS\\\\npm-api-1.0.1\\\\node_modules\\\\paged-request","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.10.0"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.1"}',
      );
    },

    4326: (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      webpackEmptyContext.keys = () => [];
      webpackEmptyContext.resolve = webpackEmptyContext;
      webpackEmptyContext.id = 4326;
      module.exports = webpackEmptyContext;
    },

    9031: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const List = __nccwpck_require__(7153);
      const View = __nccwpck_require__(5758);
      const Repo = __nccwpck_require__(6741);
      const Maintainer = __nccwpck_require__(711);

      const define = (obj, name, value) =>
        Reflect.defineProperty(obj, name, { value });
      let cache = null;

      class NpmApi {
        constructor(options = {}) {
          this.options = { ...options };
          this.reset();

          define(this, 'List', List);
          define(this, 'View', View);
          define(this, 'Repo', Repo);
          define(this, 'Maintainer', Maintainer);
        }

        reset() {
          cache = new Map();
          cache.set('lists', new Map());
          cache.set('views', new Map());
          cache.set('repos', new Map());
          cache.set('maintainers', new Map());
        }

        use(fn) {
          fn.call(this, this, this.options);
        }

        view(name) {
          let views = cache.get('views');
          if (views.has(name)) {
            return views.get(name);
          }

          let view = new View(name);
          views.set(name, view);
          return view;
        }

        list(name, view) {
          let lists = cache.get('lists');
          let viewName = view;
          if (typeof view === 'object') {
            viewName = view.name;
          }

          let key = `${viewName}.${name}`;
          if (lists.has(key)) {
            return lists.get(key);
          }

          if (typeof view === 'string') {
            view = this.view(view);
          }

          let list = new List(name, view);
          lists.set(key, list);
          return list;
        }

        repo(name) {
          let repos = cache.get('repos');
          if (repos.has(name)) {
            return repos.get(name);
          }

          let repo = new Repo(name);
          repos.set(name, repo);
          return repo;
        }

        maintainer(name) {
          let maintainers = cache.get('maintainers');
          if (maintainers.has(name)) {
            return maintainers.get(name);
          }

          let maintainer = new Maintainer(name);
          maintainers.set(name, maintainer);
          return maintainer;
        }
      }

      /**
       * Exposes `NpmApi`
       */

      module.exports = NpmApi;
    },

    6066: (module) => {
      'use strict';

      module.exports = {
        registry: 'https://registry.npmjs.org/',
        url: 'https://skimdb.npmjs.com/registry/_design/app/',
        protocol: 'https',
        host: 'skimdb.npmjs.com',
        pathname: 'registry/_design/app',
      };
    },

    7153: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const url = __nccwpck_require__(8835);
      const fetch = __nccwpck_require__(4132);
      const utils = __nccwpck_require__(2386);
      const config = __nccwpck_require__(6066);

      class List {
        constructor(name, view) {
          this.name = name;
          this.view = view;
          this.config = utils.clone(config);
          this.config.pathname += '/_list/' + this.view.name + '/' + this.name;
        }

        async query(params = {}) {
          const response = await fetch(this.url(params));
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }

        url(query = {}) {
          return url.format({ ...this.config, query });
        }
      }

      /**
       * Exposes `List`
       */

      module.exports = List;
    },

    1131: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const List = __nccwpck_require__(7153);
      const View = __nccwpck_require__(5758);
      const Registry = __nccwpck_require__(1574);

      const define = (obj, name, value) =>
        Reflect.defineProperty(obj, name, { value });

      class BaseModel {
        constructor(options = {}) {
          this.options = { ...options };
          this.cache = new Map();
          define(this, 'List', List);
          define(this, 'View', View);
          define(this, 'Registry', Registry);
        }

        use(fn) {
          fn.call(this, this, this.options);
        }
      }

      /**
       * Exposes `BaseModel`
       */

      module.exports = BaseModel;
    },

    711: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const Base = __nccwpck_require__(1131);
      const utils = __nccwpck_require__(2386);
      const config = __nccwpck_require__(6066);

      class Maintainer extends Base {
        constructor(name) {
          super();
          this.name = name;
          this.config = utils.clone(config);
        }

        async repos() {
          if (!this.cache.has('repos')) {
            let from = 0;
            let size = 250;
            let url = `${this.config.registry}-/v1/search?text=maintainer:${this.name}&size=${size}`;
            let results = [];
            await utils.paged(url, (_, res, acc) => {
              let { objects, total } = res.data;
              results.push(...objects);
              if (total >= from + size) {
                from += size;
                return `${url}&from=${from}`;
              }
            });

            this.cache.set(
              'repos',
              results.map((obj) => obj.package.name),
            );
          }
          return this.cache.get('repos');
        }
      }

      /**
       * Exposes `Maintainer`
       */

      module.exports = Maintainer;
    },

    6741: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const Base = __nccwpck_require__(1131);
      const downloads = __nccwpck_require__(9502);

      class Repo extends Base {
        constructor(name) {
          super();
          this.name = name;
          this.use(downloads());
        }

        async package(version = 'latest') {
          let key = `pkg-${version}`;

          if (!this.cache.has(key)) {
            let registry = new this.Registry();
            let results = await registry.get(this.name);
            let pkg =
              version === 'all'
                ? results
                : results.versions[version] ||
                  results.versions[results['dist-tags'][version]];

            this.cache.set(key, pkg);
          }
          return this.cache.get(key);
        }

        async version(version) {
          let pkg = await this.package('all');
          if (pkg['dist-tags'][version]) {
            version = pkg['dist-tags'][version];
          }
          if (!pkg.versions[version]) {
            return {};
          }
          return pkg.versions[version];
        }

        dependencies(version) {
          return this.prop('dependencies', version);
        }

        devDependencies(version) {
          return this.prop('devDependencies', version);
        }

        async prop(prop, version = 'latest') {
          let pkg = await this.version(version);
          return pkg[prop];
        }
      }

      module.exports = Repo;
    },

    9502: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const utils = __nccwpck_require__(2386);
      const define = (obj, name, value) =>
        Reflect.defineProperty(obj, name, { value });

      module.exports = (options = {}) => {
        return function () {
          let log = (...args) => {
            if (this.options.verbose === true || options.verbose === true) {
              console.log(...args);
            }
          };

          define(this, 'total', async () => {
            if (!this.cache.has('total')) {
              let results = await this.downloads();
              this.cache.set('total', utils.stats.calc.total(results));
            }
            return this.cache.get('total');
          });

          define(this, 'last', async (n) => {
            let key = 'last-' + n;
            if (!this.cache.has(key)) {
              let results = await this.downloads();
              this.cache.set(key, utils.stats.calc.last(n, results));
            }
            return this.cache.get(key);
          });

          define(this, 'downloads', (start = '2005-01-01') => {
            let end = this.options.end
              ? utils.moment(this.options.end)
              : utils.moment.utc().subtract(1, 'days');

            start = utils.moment(start);
            let downloads = [];
            return new Promise((resolve, reject) => {
              log('getting downloads for "' + this.name + '"');
              utils.stats
                .get(start, end, this.name)
                .on('data', (data) => {
                  downloads.push(data);
                })
                .on('error', (err) => {
                  log('ERROR: [' + this.name + ']');
                  log(err);
                })
                .on('end', () => {
                  downloads.sort((a, b) => {
                    if (a.day < b.day) return 1;
                    if (a.day > b.day) return -1;
                    return 0;
                  });
                  let results = [];
                  downloads.forEach((download) => {
                    if (!results.find((d) => d.day === download.day)) {
                      results.push(download);
                    }
                  });
                  resolve(results);
                });
            });
          });
        };
      };
    },

    1574: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const fetch = __nccwpck_require__(4132);
      const utils = __nccwpck_require__(2386);
      const config = __nccwpck_require__(6066);

      class Registry {
        constructor() {
          this.config = utils.clone(config);
        }

        async get(name) {
          const response = await fetch(this.url(name));
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }

        url(name) {
          if (name[0] === '@' && name.indexOf('/') !== -1) {
            name = '@' + encodeURIComponent(name.slice(1));
          }
          return this.config.registry + name;
        }
      }

      /**
       * Exposes `Registry`
       */

      module.exports = Registry;
    },

    2386: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const utils = (module.exports = {});
      const define = (name, get) =>
        Reflect.defineProperty(utils, name, { get });

      define('clone', () => __nccwpck_require__(9559));
      define('JSONStream', () => __nccwpck_require__(6197));
      define('moment', () => __nccwpck_require__(9909));
      define('paged', () => __nccwpck_require__(9952));
      define('stats', () => __nccwpck_require__(5735));

      utils.arrayify = (val) => (val ? (Array.isArray(val) ? val : [val]) : []);
    },

    5758: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const url = __nccwpck_require__(8835);
      const fetch = __nccwpck_require__(4132);
      const utils = __nccwpck_require__(2386);
      const config = __nccwpck_require__(6066);

      class View {
        constructor(name) {
          this.name = name;
          this.config = utils.clone(config);
          this.config.pathname += '/_view/' + this.name;
        }

        async query(params = {}) {
          const response = await fetch(this.url(params));
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return new Promise((resolve, reject) => {
            let items = [];
            let header = {};
            response.body
              .pipe(utils.JSONStream.parse('rows.*'))
              .on('header', (data) => {
                header = data;
                if (header.error) {
                  reject(new Error(header.reason || header.error));
                }
              })
              .on('data', (data) => {
                items.push(data);
              })
              .once('error', reject)
              .once('end', () => {
                resolve(items);
              });
          });
        }

        /**
         * Query the couchdb view with the provided parameters and return a stream of results.
         *
         * ```js
         * view.stream({
         *   group_level: 2,
         *   startkey: JSON.stringify(['micromatch']),
         *   endkey: JSON.stringify(['micromatch', {}])
         * })
         * .on('data', (data) => {
         *   console.log(data);
         * });
         * ```
         * @param  {Object} `params` URL query parameters to pass along to the couchdb view.
         * @return {Stream} Streaming results of the query.
         * @name .stream
         * @api public
         */

        stream(params = {}) {
          const stream = utils.JSONStream.parse('rows.*');
          fetch(this.url(params))
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              response.body.pipe(stream);
            })
            .catch((e) => stream.emit('error', e));
          return stream;
        }

        /**
         * Build a formatted url with the provided parameters.
         *
         * @param  {Object} `query` URL query parameters.
         * @return {String} formatted url string
         * @name .url
         * @api public
         */

        url(query = {}) {
          return url.format({ ...this.config, query });
        }
      }

      /**
       * Exposes `View`
       */

      module.exports = View;
    },

    6197: (__unused_webpack_module, exports, __nccwpck_require__) => {
      'use strict';

      var Parser = __nccwpck_require__(8978),
        through = __nccwpck_require__(717);

      var bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;

      /*

  the value of this.stack that creationix's jsonparse has is weird.

  it makes this code ugly, but his problem is way harder that mine,
  so i'll forgive him.

*/

      exports.parse = function (path, map) {
        var header, footer;
        var parser = new Parser();
        var stream = through(
          function (chunk) {
            if ('string' === typeof chunk)
              chunk = bufferFrom ? Buffer.from(chunk) : new Buffer(chunk);
            parser.write(chunk);
          },
          function (data) {
            if (data) stream.write(data);
            if (header) stream.emit('header', header);
            if (footer) stream.emit('footer', footer);
            stream.queue(null);
          },
        );

        if ('string' === typeof path)
          path = path.split('.').map(function (e) {
            if (e === '$*') return { emitKey: true };
            else if (e === '*') return true;
            else if (e === '') return { recurse: true };
            else return e;
          });

        var count = 0,
          _key;
        if (!path || !path.length) path = null;

        parser.onValue = function (value) {
          if (!this.root) stream.root = value;

          if (!path) return;

          var i = 0;
          var j = 0;
          var emitKey = false;
          var emitPath = false;
          while (i < path.length) {
            var key = path[i];
            var c;
            j++;

            if (key && !key.recurse) {
              c = j === this.stack.length ? this : this.stack[j];
              if (!c) return;
              if (!check(key, c.key)) {
                setHeaderFooter(c.key, value);
                return;
              }
              emitKey = !!key.emitKey;
              emitPath = !!key.emitPath;
              i++;
            } else {
              i++;
              var nextKey = path[i];
              if (!nextKey) return;
              while (true) {
                c = j === this.stack.length ? this : this.stack[j];
                if (!c) return;
                if (check(nextKey, c.key)) {
                  i++;
                  if (!Object.isFrozen(this.stack[j]))
                    this.stack[j].value = null;
                  break;
                } else {
                  setHeaderFooter(c.key, value);
                }
                j++;
              }
            }
          }

          if (header) {
            stream.emit('header', header);
            header = false;
          }
          if (j !== this.stack.length) return;

          count++;
          var actualPath = this.stack
            .slice(1)
            .map(function (element) {
              return element.key;
            })
            .concat([this.key]);
          var data = value;
          if (null != data)
            if (null != (data = map ? map(data, actualPath) : data)) {
              if (emitKey || emitPath) {
                data = { value: data };
                if (emitKey) data['key'] = this.key;
                if (emitPath) data['path'] = actualPath;
              }

              stream.queue(data);
            }
          if (this.value) delete this.value[this.key];
          for (var k in this.stack)
            if (!Object.isFrozen(this.stack[k])) this.stack[k].value = null;
        };
        parser._onToken = parser.onToken;

        parser.onToken = function (token, value) {
          parser._onToken(token, value);
          if (this.stack.length === 0) {
            if (stream.root) {
              if (!path) stream.queue(stream.root);
              count = 0;
              stream.root = null;
            }
          }
        };

        parser.onError = function (err) {
          if (err.message.indexOf('at position') > -1)
            err.message = 'Invalid JSON (' + err.message + ')';
          stream.emit('error', err);
        };

        return stream;

        function setHeaderFooter(key, value) {
          if (header !== false) {
            header = header || {};
            header[key] = value;
          }

          if (footer !== false && header === false) {
            footer = footer || {};
            footer[key] = value;
          }
        }
      };

      function check(x, y) {
        if ('string' === typeof x) return y == x;
        else if (x && 'function' === typeof x.exec) return x.exec(y);
        else if ('boolean' === typeof x || 'object' === typeof x) return x;
        else if ('function' === typeof x) return x(y);
        return false;
      }

      exports.stringify = function (op, sep, cl, indent) {
        indent = indent || 0;
        if (op === false) {
          op = '';
          sep = '\n';
          cl = '';
        } else if (op == null) {
          op = '[\n';
          sep = '\n,\n';
          cl = '\n]\n';
        }

        //else, what ever you like

        var stream,
          first = true,
          anyData = false;
        stream = through(
          function (data) {
            anyData = true;
            try {
              var json = JSON.stringify(data, null, indent);
            } catch (err) {
              return stream.emit('error', err);
            }
            if (first) {
              first = false;
              stream.queue(op + json);
            } else stream.queue(sep + json);
          },
          function (data) {
            if (!anyData) stream.queue(op);
            stream.queue(cl);
            stream.queue(null);
          },
        );

        return stream;
      };

      exports.stringifyObject = function (op, sep, cl, indent) {
        indent = indent || 0;
        if (op === false) {
          op = '';
          sep = '\n';
          cl = '';
        } else if (op == null) {
          op = '{\n';
          sep = '\n,\n';
          cl = '\n}\n';
        }

        //else, what ever you like

        var first = true;
        var anyData = false;
        var stream = through(
          function (data) {
            anyData = true;
            var json =
              JSON.stringify(data[0]) +
              ':' +
              JSON.stringify(data[1], null, indent);
            if (first) {
              first = false;
              this.queue(op + json);
            } else this.queue(sep + json);
          },
          function (data) {
            if (!anyData) this.queue(op);
            this.queue(cl);

            this.queue(null);
          },
        );

        return stream;
      };
    },

    6882: (module, __unused_webpack_exports, __nccwpck_require__) => {
      module.exports = __nccwpck_require__(5745);
    },

    7521: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var settle = __nccwpck_require__(697);
      var buildFullPath = __nccwpck_require__(3215);
      var buildURL = __nccwpck_require__(7978);
      var http = __nccwpck_require__(8605);
      var https = __nccwpck_require__(7211);
      var httpFollow = __nccwpck_require__(2340).http;
      var httpsFollow = __nccwpck_require__(2340).https;
      var url = __nccwpck_require__(8835);
      var zlib = __nccwpck_require__(8761);
      var pkg = __nccwpck_require__(696);
      var createError = __nccwpck_require__(4189);
      var enhanceError = __nccwpck_require__(3831);

      var isHttps = /https:?/;

      /**
       *
       * @param {http.ClientRequestArgs} options
       * @param {AxiosProxyConfig} proxy
       * @param {string} location
       */
      function setProxy(options, proxy, location) {
        options.hostname = proxy.host;
        options.host = proxy.host;
        options.port = proxy.port;
        options.path = location;

        if (proxy.auth) {
          var base64 = Buffer.from(
            proxy.auth.username + ':' + proxy.auth.password,
            'utf8',
          ).toString('base64');
          options.headers['Proxy-Authorization'] = 'Basic ' + base64;
        }

        options.beforeRedirect = function beforeRedirect(redirection) {
          redirection.headers.host = redirection.host;
          setProxy(redirection, proxy, redirection.href);
        };
      }

      /*eslint consistent-return:0*/
      module.exports = function httpAdapter(config) {
        return new Promise(function dispatchHttpRequest(
          resolvePromise,
          rejectPromise,
        ) {
          var resolve = function resolve(value) {
            resolvePromise(value);
          };
          var reject = function reject(value) {
            rejectPromise(value);
          };
          var data = config.data;
          var headers = config.headers;

          if (!headers['User-Agent'] && !headers['user-agent']) {
            headers['User-Agent'] = 'axios/' + pkg.version;
          }

          if (data && !utils.isStream(data)) {
            if (Buffer.isBuffer(data)) {
            } else if (utils.isArrayBuffer(data)) {
              data = Buffer.from(new Uint8Array(data));
            } else if (utils.isString(data)) {
              data = Buffer.from(data, 'utf-8');
            } else {
              return reject(
                createError(
                  'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                  config,
                ),
              );
            }

            headers['Content-Length'] = data.length;
          }

          var auth = undefined;
          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
          }

          var fullPath = buildFullPath(config.baseURL, config.url);
          var parsed = url.parse(fullPath);
          var protocol = parsed.protocol || 'http:';

          if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
          }

          if (auth) {
            delete headers.Authorization;
          }

          var isHttpsRequest = isHttps.test(protocol);
          var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

          var options = {
            path: buildURL(
              parsed.path,
              config.params,
              config.paramsSerializer,
            ).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            agents: { http: config.httpAgent, https: config.httpsAgent },
            auth: auth,
          };

          if (config.socketPath) {
            options.socketPath = config.socketPath;
          } else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
          }

          var proxy = config.proxy;
          if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl =
              process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            if (proxyUrl) {
              var parsedProxyUrl = url.parse(proxyUrl);
              var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
              var shouldProxy = true;

              if (noProxyEnv) {
                var noProxy = noProxyEnv.split(',').map(function trim(s) {
                  return s.trim();
                });

                shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                  if (!proxyElement) {
                    return false;
                  }
                  if (proxyElement === '*') {
                    return true;
                  }
                  if (
                    proxyElement[0] === '.' &&
                    parsed.hostname.substr(
                      parsed.hostname.length - proxyElement.length,
                    ) === proxyElement
                  ) {
                    return true;
                  }

                  return parsed.hostname === proxyElement;
                });
              }

              if (shouldProxy) {
                proxy = {
                  host: parsedProxyUrl.hostname,
                  port: parsedProxyUrl.port,
                  protocol: parsedProxyUrl.protocol,
                };

                if (parsedProxyUrl.auth) {
                  var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                  proxy.auth = {
                    username: proxyUrlAuth[0],
                    password: proxyUrlAuth[1],
                  };
                }
              }
            }
          }

          if (proxy) {
            options.headers.host =
              parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            setProxy(
              options,
              proxy,
              protocol +
                '//' +
                parsed.hostname +
                (parsed.port ? ':' + parsed.port : '') +
                options.path,
            );
          }

          var transport;
          var isHttpsProxy =
            isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
          if (config.transport) {
            transport = config.transport;
          } else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https : http;
          } else {
            if (config.maxRedirects) {
              options.maxRedirects = config.maxRedirects;
            }
            transport = isHttpsProxy ? httpsFollow : httpFollow;
          }

          if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
          }

          var req = transport.request(options, function handleResponse(res) {
            if (req.aborted) return;

            var stream = res;

            var lastRequest = res.req || req;

            if (
              res.statusCode !== 204 &&
              lastRequest.method !== 'HEAD' &&
              config.decompress !== false
            ) {
              switch (res.headers['content-encoding']) {
                /*eslint default-case:0*/
                case 'gzip':
                case 'compress':
                case 'deflate':
                  stream = stream.pipe(zlib.createUnzip());

                  delete res.headers['content-encoding'];
                  break;
              }
            }

            var response = {
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: res.headers,
              config: config,
              request: lastRequest,
            };

            if (config.responseType === 'stream') {
              response.data = stream;
              settle(resolve, reject, response);
            } else {
              var responseBuffer = [];
              stream.on('data', function handleStreamData(chunk) {
                responseBuffer.push(chunk);

                if (
                  config.maxContentLength > -1 &&
                  Buffer.concat(responseBuffer).length > config.maxContentLength
                ) {
                  stream.destroy();
                  reject(
                    createError(
                      'maxContentLength size of ' +
                        config.maxContentLength +
                        ' exceeded',
                      config,
                      null,
                      lastRequest,
                    ),
                  );
                }
              });

              stream.on('error', function handleStreamError(err) {
                if (req.aborted) return;
                reject(enhanceError(err, config, null, lastRequest));
              });

              stream.on('end', function handleStreamEnd() {
                var responseData = Buffer.concat(responseBuffer);
                if (config.responseType !== 'arraybuffer') {
                  responseData = responseData.toString(config.responseEncoding);
                  if (
                    !config.responseEncoding ||
                    config.responseEncoding === 'utf8'
                  ) {
                    responseData = utils.stripBOM(responseData);
                  }
                }

                response.data = responseData;
                settle(resolve, reject, response);
              });
            }
          });

          req.on('error', function handleRequestError(err) {
            if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
            reject(enhanceError(err, config, null, req));
          });

          if (config.timeout) {
            req.setTimeout(config.timeout, function handleRequestTimeout() {
              req.abort();
              reject(
                createError(
                  'timeout of ' + config.timeout + 'ms exceeded',
                  config,
                  'ECONNABORTED',
                  req,
                ),
              );
            });
          }

          if (config.cancelToken) {
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (req.aborted) return;

              req.abort();
              reject(cancel);
            });
          }

          if (utils.isStream(data)) {
            data
              .on('error', function handleStreamError(err) {
                reject(enhanceError(err, config, null, req));
              })
              .pipe(req);
          } else {
            req.end(data);
          }
        });
      };
    },

    7461: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var settle = __nccwpck_require__(697);
      var cookies = __nccwpck_require__(7531);
      var buildURL = __nccwpck_require__(7978);
      var buildFullPath = __nccwpck_require__(3215);
      var parseHeaders = __nccwpck_require__(45);
      var isURLSameOrigin = __nccwpck_require__(1170);
      var createError = __nccwpck_require__(4189);

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;

          if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type'];
          }

          var request = new XMLHttpRequest();

          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password
              ? unescape(encodeURIComponent(config.auth.password))
              : '';
            requestHeaders.Authorization =
              'Basic ' + btoa(username + ':' + password);
          }

          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(
            config.method.toUpperCase(),
            buildURL(fullPath, config.params, config.paramsSerializer),
            true,
          );

          request.timeout = config.timeout;

          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            if (
              request.status === 0 &&
              !(
                request.responseURL &&
                request.responseURL.indexOf('file:') === 0
              )
            ) {
              return;
            }

            var responseHeaders =
              'getAllResponseHeaders' in request
                ? parseHeaders(request.getAllResponseHeaders())
                : null;
            var responseData =
              !config.responseType || config.responseType === 'text'
                ? request.responseText
                : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config: config,
              request: request,
            };

            settle(resolve, reject, response);

            request = null;
          };

          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }

            reject(
              createError('Request aborted', config, 'ECONNABORTED', request),
            );

            request = null;
          };

          request.onerror = function handleError() {
            reject(createError('Network Error', config, null, request));

            request = null;
          };

          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage =
              'timeout of ' + config.timeout + 'ms exceeded';
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(
              createError(timeoutErrorMessage, config, 'ECONNABORTED', request),
            );

            request = null;
          };

          if (utils.isStandardBrowserEnv()) {
            var xsrfValue =
              (config.withCredentials || isURLSameOrigin(fullPath)) &&
              config.xsrfCookieName
                ? cookies.read(config.xsrfCookieName)
                : undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }

          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (
                typeof requestData === 'undefined' &&
                key.toLowerCase() === 'content-type'
              ) {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }

          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }

          if (config.responseType) {
            try {
              request.responseType = config.responseType;
            } catch (e) {
              if (config.responseType !== 'json') {
                throw e;
              }
            }
          }

          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
          }

          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener(
              'progress',
              config.onUploadProgress,
            );
          }

          if (config.cancelToken) {
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }

              request.abort();
              reject(cancel);

              request = null;
            });
          }

          if (!requestData) {
            requestData = null;
          }

          request.send(requestData);
        });
      };
    },

    5745: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var bind = __nccwpck_require__(2425);
      var Axios = __nccwpck_require__(7898);
      var mergeConfig = __nccwpck_require__(7141);
      var defaults = __nccwpck_require__(6860);

      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);

        utils.extend(instance, Axios.prototype, context);

        utils.extend(instance, context);

        return instance;
      }

      var axios = createInstance(defaults);

      axios.Axios = Axios;

      axios.create = function create(instanceConfig) {
        return createInstance(mergeConfig(axios.defaults, instanceConfig));
      };

      axios.Cancel = __nccwpck_require__(6896);
      axios.CancelToken = __nccwpck_require__(2003);
      axios.isCancel = __nccwpck_require__(9112);

      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = __nccwpck_require__(1860);

      axios.isAxiosError = __nccwpck_require__(1698);

      module.exports = axios;

      module.exports.default = axios;
    },

    6896: (module) => {
      'use strict';

      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */
      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      };

      Cancel.prototype.__CANCEL__ = true;

      module.exports = Cancel;
    },

    2003: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var Cancel = __nccwpck_require__(6896);

      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */
      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel,
        };
      };

      module.exports = CancelToken;
    },

    9112: (module) => {
      'use strict';

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    },

    7898: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var buildURL = __nccwpck_require__(7978);
      var InterceptorManager = __nccwpck_require__(751);
      var dispatchRequest = __nccwpck_require__(4792);
      var mergeConfig = __nccwpck_require__(7141);

      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager(),
        };
      }

      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */
      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        if (typeof config === 'string') {
          config = arguments[1] || {};
          config.url = arguments[0];
        } else {
          config = config || {};
        }

        config = mergeConfig(this.defaults, config);

        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = 'get';
        }

        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);

        this.interceptors.request.forEach(function unshiftRequestInterceptors(
          interceptor,
        ) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        this.interceptors.response.forEach(function pushResponseInterceptors(
          interceptor,
        ) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      };

      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(
          config.url,
          config.params,
          config.paramsSerializer,
        ).replace(/^\?/, '');
      };

      utils.forEach(
        ['delete', 'get', 'head', 'options'],
        function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, config) {
            return this.request(
              mergeConfig(config || {}, {
                method: method,
                url: url,
                data: (config || {}).data,
              }),
            );
          };
        },
      );

      utils.forEach(
        ['post', 'put', 'patch'],
        function forEachMethodWithData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, data, config) {
            return this.request(
              mergeConfig(config || {}, {
                method: method,
                url: url,
                data: data,
              }),
            );
          };
        },
      );

      module.exports = Axios;
    },

    751: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      function InterceptorManager() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected,
        });
        return this.handlers.length - 1;
      };

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;
    },

    3215: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var isAbsoluteURL = __nccwpck_require__(9533);
      var combineURLs = __nccwpck_require__(8213);

      /**
       * Creates a new URL by combining the baseURL with the requestedURL,
       * only when the requestedURL is not already an absolute URL.
       * If the requestURL is absolute, this function returns the requestedURL untouched.
       *
       * @param {string} baseURL The base URL
       * @param {string} requestedURL Absolute or relative URL to combine
       * @returns {string} The combined full path
       */
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    },

    4189: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var enhanceError = __nccwpck_require__(3831);

      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
      module.exports = function createError(
        message,
        config,
        code,
        request,
        response,
      ) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    },

    4792: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var transformData = __nccwpck_require__(529);
      var isCancel = __nccwpck_require__(9112);
      var defaults = __nccwpck_require__(6860);

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }

      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);

        config.headers = config.headers || {};

        config.data = transformData(
          config.data,
          config.headers,
          config.transformRequest,
        );

        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers,
        );

        utils.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          },
        );

        var adapter = config.adapter || defaults.adapter;

        return adapter(config).then(
          function onAdapterResolution(response) {
            throwIfCancellationRequested(config);

            response.data = transformData(
              response.data,
              response.headers,
              config.transformResponse,
            );

            return response;
          },
          function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);

              if (reason && reason.response) {
                reason.response.data = transformData(
                  reason.response.data,
                  reason.response.headers,
                  config.transformResponse,
                );
              }
            }

            return Promise.reject(reason);
          },
        );
      };
    },

    3831: (module) => {
      'use strict';

      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */
      module.exports = function enhanceError(
        error,
        config,
        code,
        request,
        response,
      ) {
        error.config = config;
        if (code) {
          error.code = code;
        }

        error.request = request;
        error.response = response;
        error.isAxiosError = true;

        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,

            description: this.description,
            number: this.number,

            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,

            config: this.config,
            code: this.code,
          };
        };
        return error;
      };
    },

    7141: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      /**
       * Config-specific merge-function which creates a new config-object
       * by merging two configuration objects together.
       *
       * @param {Object} config1
       * @param {Object} config2
       * @returns {Object} New object resulting from merging config2 to config1
       */
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};

        var valueFromConfig2Keys = ['url', 'method', 'data'];
        var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
        var defaultToConfig2Keys = [
          'baseURL',
          'transformRequest',
          'transformResponse',
          'paramsSerializer',
          'timeout',
          'timeoutMessage',
          'withCredentials',
          'adapter',
          'responseType',
          'xsrfCookieName',
          'xsrfHeaderName',
          'onUploadProgress',
          'onDownloadProgress',
          'decompress',
          'maxContentLength',
          'maxBodyLength',
          'maxRedirects',
          'transport',
          'httpAgent',
          'httpsAgent',
          'cancelToken',
          'socketPath',
          'responseEncoding',
        ];
        var directMergeKeys = ['validateStatus'];

        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }

        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        }

        utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
          }
        });

        utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

        utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        });

        utils.forEach(directMergeKeys, function merge(prop) {
          if (prop in config2) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        });

        var axiosKeys = valueFromConfig2Keys
          .concat(mergeDeepPropertiesKeys)
          .concat(defaultToConfig2Keys)
          .concat(directMergeKeys);

        var otherKeys = Object.keys(config1)
          .concat(Object.keys(config2))
          .filter(function filterAxiosKeys(key) {
            return axiosKeys.indexOf(key) === -1;
          });

        utils.forEach(otherKeys, mergeDeepProperties);

        return config;
      };
    },

    697: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var createError = __nccwpck_require__(4189);

      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (
          !response.status ||
          !validateStatus ||
          validateStatus(response.status)
        ) {
          resolve(response);
        } else {
          reject(
            createError(
              'Request failed with status code ' + response.status,
              response.config,
              null,
              response.request,
              response,
            ),
          );
        }
      };
    },

    529: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */
      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });

        return data;
      };
    },

    6860: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);
      var normalizeHeaderName = __nccwpck_require__(5849);

      var DEFAULT_CONTENT_TYPE = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      function setContentTypeIfUnset(headers, value) {
        if (
          !utils.isUndefined(headers) &&
          utils.isUndefined(headers['Content-Type'])
        ) {
          headers['Content-Type'] = value;
        }
      }

      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== 'undefined') {
          adapter = __nccwpck_require__(7461);
        } else if (
          typeof process !== 'undefined' &&
          Object.prototype.toString.call(process) === '[object process]'
        ) {
          adapter = __nccwpck_require__(7521);
        }
        return adapter;
      }

      var defaults = {
        adapter: getDefaultAdapter(),

        transformRequest: [
          function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (
              utils.isFormData(data) ||
              utils.isArrayBuffer(data) ||
              utils.isBuffer(data) ||
              utils.isStream(data) ||
              utils.isFile(data) ||
              utils.isBlob(data)
            ) {
              return data;
            }
            if (utils.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
              setContentTypeIfUnset(
                headers,
                'application/x-www-form-urlencoded;charset=utf-8',
              );
              return data.toString();
            }
            if (utils.isObject(data)) {
              setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
              return JSON.stringify(data);
            }
            return data;
          },
        ],

        transformResponse: [
          function transformResponse(data) {
            /*eslint no-param-reassign:0*/
            if (typeof data === 'string') {
              try {
                data = JSON.parse(data);
              } catch (e) {
                /* Ignore */
              }
            }
            return data;
          },
        ],

        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,

        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',

        maxContentLength: -1,
        maxBodyLength: -1,

        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
      };

      defaults.headers = {
        common: {
          Accept: 'application/json, text/plain, */*',
        },
      };

      utils.forEach(
        ['delete', 'get', 'head'],
        function forEachMethodNoData(method) {
          defaults.headers[method] = {};
        },
      );

      utils.forEach(
        ['post', 'put', 'patch'],
        function forEachMethodWithData(method) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        },
      );

      module.exports = defaults;
    },

    2425: (module) => {
      'use strict';

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    },

    7978: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      function encode(val) {
        return encodeURIComponent(val)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }

      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */
      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];

          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + '=' + encode(v));
            });
          });

          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          var hashmarkIndex = url.indexOf('#');
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }

          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };
    },

    8213: (module) => {
      'use strict';

      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL
          ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
          : baseURL;
      };
    },

    7531: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      module.exports = utils.isStandardBrowserEnv()
        ? (function standardBrowserEnv() {
            return {
              write: function write(
                name,
                value,
                expires,
                path,
                domain,
                secure,
              ) {
                var cookie = [];
                cookie.push(name + '=' + encodeURIComponent(value));

                if (utils.isNumber(expires)) {
                  cookie.push('expires=' + new Date(expires).toGMTString());
                }

                if (utils.isString(path)) {
                  cookie.push('path=' + path);
                }

                if (utils.isString(domain)) {
                  cookie.push('domain=' + domain);
                }

                if (secure === true) {
                  cookie.push('secure');
                }

                document.cookie = cookie.join('; ');
              },

              read: function read(name) {
                var match = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'),
                );
                return match ? decodeURIComponent(match[3]) : null;
              },

              remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
              },
            };
          })()
        : (function nonStandardBrowserEnv() {
            return {
              write: function write() {},
              read: function read() {
                return null;
              },
              remove: function remove() {},
            };
          })();
    },

    9533: (module) => {
      'use strict';

      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
    },

    1698: (module) => {
      'use strict';

      /**
       * Determines whether the payload is an error thrown by Axios
       *
       * @param {*} payload The value to test
       * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
       */
      module.exports = function isAxiosError(payload) {
        return typeof payload === 'object' && payload.isAxiosError === true;
      };
    },

    1170: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      module.exports = utils.isStandardBrowserEnv()
        ? (function standardBrowserEnv() {
            var msie = /(msie|trident)/i.test(navigator.userAgent);
            var urlParsingNode = document.createElement('a');
            var originURL;

            /**
             * Parse a URL to discover it's components
             *
             * @param {String} url The URL to be parsed
             * @returns {Object}
             */
            function resolveURL(url) {
              var href = url;

              if (msie) {
                urlParsingNode.setAttribute('href', href);
                href = urlParsingNode.href;
              }

              urlParsingNode.setAttribute('href', href);

              return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol
                  ? urlParsingNode.protocol.replace(/:$/, '')
                  : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search
                  ? urlParsingNode.search.replace(/^\?/, '')
                  : '',
                hash: urlParsingNode.hash
                  ? urlParsingNode.hash.replace(/^#/, '')
                  : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname:
                  urlParsingNode.pathname.charAt(0) === '/'
                    ? urlParsingNode.pathname
                    : '/' + urlParsingNode.pathname,
              };
            }

            originURL = resolveURL(window.location.href);

            /**
             * Determine if a URL shares the same origin as the current location
             *
             * @param {String} requestURL The URL to test
             * @returns {boolean} True if URL shares the same origin, otherwise false
             */
            return function isURLSameOrigin(requestURL) {
              var parsed = utils.isString(requestURL)
                ? resolveURL(requestURL)
                : requestURL;
              return (
                parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host
              );
            };
          })()
        : (function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
              return true;
            };
          })();
    },

    5849: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (
            name !== normalizedName &&
            name.toUpperCase() === normalizedName.toUpperCase()
          ) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    },

    45: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(4569);

      var ignoreDuplicateOf = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ];

      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === 'set-cookie') {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          }
        });

        return parsed;
      };
    },

    1860: (module) => {
      'use strict';

      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    },

    4569: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var bind = __nccwpck_require__(2425);

      /*global toString:true*/

      var toString = Object.prototype.toString;

      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function isArray(val) {
        return toString.call(val) === '[object Array]';
      }

      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */
      function isUndefined(val) {
        return typeof val === 'undefined';
      }

      /**
       * Determine if a value is a Buffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Buffer, otherwise false
       */
      function isBuffer(val) {
        return (
          val !== null &&
          !isUndefined(val) &&
          val.constructor !== null &&
          !isUndefined(val.constructor) &&
          typeof val.constructor.isBuffer === 'function' &&
          val.constructor.isBuffer(val)
        );
      }

      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      function isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
      }

      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }

      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }

      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */
      function isString(val) {
        return typeof val === 'string';
      }

      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */
      function isNumber(val) {
        return typeof val === 'number';
      }

      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function isObject(val) {
        return val !== null && typeof val === 'object';
      }

      /**
       * Determine if a value is a plain Object
       *
       * @param {Object} val The value to test
       * @return {boolean} True if value is a plain Object, otherwise false
       */
      function isPlainObject(val) {
        if (toString.call(val) !== '[object Object]') {
          return false;
        }

        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }

      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      function isDate(val) {
        return toString.call(val) === '[object Date]';
      }

      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      function isFile(val) {
        return toString.call(val) === '[object File]';
      }

      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */
      function isBlob(val) {
        return toString.call(val) === '[object Blob]';
      }

      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }

      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }

      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
      function isURLSearchParams(val) {
        return (
          typeof URLSearchParams !== 'undefined' &&
          val instanceof URLSearchParams
        );
      }

      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
      function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }

      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       * nativescript
       *  navigator.product -> 'NativeScript' or 'NS'
       */
      function isStandardBrowserEnv() {
        if (
          typeof navigator !== 'undefined' &&
          (navigator.product === 'ReactNative' ||
            navigator.product === 'NativeScript' ||
            navigator.product === 'NS')
        ) {
          return false;
        }
        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }

      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function forEach(obj, fn) {
        if (obj === null || typeof obj === 'undefined') {
          return;
        }

        if (typeof obj !== 'object') {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }

      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo);
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */
      function merge(/* obj1, obj2, obj3, ... */) {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }

      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      /**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       * @return {string} content value without BOM
       */
      function stripBOM(content) {
        if (content.charCodeAt(0) === 0xfeff) {
          content = content.slice(1);
        }
        return content;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim,
        stripBOM: stripBOM,
      };
    },

    9559: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      /**
       * Module dependenices
       */

      const clone = __nccwpck_require__(9242);
      const typeOf = __nccwpck_require__(4807);
      const isPlainObject = __nccwpck_require__(4505);

      function cloneDeep(val, instanceClone) {
        switch (typeOf(val)) {
          case 'object':
            return cloneObjectDeep(val, instanceClone);
          case 'array':
            return cloneArrayDeep(val, instanceClone);
          default: {
            return clone(val);
          }
        }
      }

      function cloneObjectDeep(val, instanceClone) {
        if (typeof instanceClone === 'function') {
          return instanceClone(val);
        }
        if (instanceClone || isPlainObject(val)) {
          const res = new val.constructor();
          for (let key in val) {
            res[key] = cloneDeep(val[key], instanceClone);
          }
          return res;
        }
        return val;
      }

      function cloneArrayDeep(val, instanceClone) {
        const res = new val.constructor(val.length);
        for (let i = 0; i < val.length; i++) {
          res[i] = cloneDeep(val[i], instanceClone);
        }
        return res;
      }

      /**
       * Expose `cloneDeep`
       */

      module.exports = cloneDeep;
    },

    8024: (module, exports, __nccwpck_require__) => {
      'use strict';

      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      /* eslint-env browser */

      /**
       * This is the web browser implementation of `debug()`.
       */
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      /**
       * Colors.
       */

      exports.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33',
      ];
      /**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */

      function useColors() {
        if (
          typeof window !== 'undefined' &&
          window.process &&
          (window.process.type === 'renderer' || window.process.__nwjs)
        ) {
          return true;
        }

        if (
          typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ) {
          return false;
        }

        return (
          (typeof document !== 'undefined' &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window !== 'undefined' &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator !== 'undefined' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator !== 'undefined' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }
      /**
       * Colorize log arguments if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        args[0] =
          (this.useColors ? '%c' : '') +
          this.namespace +
          (this.useColors ? ' %c' : ' ') +
          args[0] +
          (this.useColors ? '%c ' : ' ') +
          '+' +
          module.exports.humanize(this.diff);

        if (!this.useColors) {
          return;
        }

        var c = 'color: ' + this.color;
        args.splice(1, 0, c, 'color: inherit');

        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function (match) {
          if (match === '%%') {
            return;
          }

          index++;

          if (match === '%c') {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      /**
       * Invokes `console.log()` when available.
       * No-op when `console.log` is not a "function".
       *
       * @api public
       */

      function log() {
        var _console;

        return (
          (typeof console === 'undefined' ? 'undefined' : _typeof(console)) ===
            'object' &&
          console.log &&
          (_console = console).log.apply(_console, arguments)
        );
      }
      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem('debug', namespaces);
          } else {
            exports.storage.removeItem('debug');
          }
        } catch (error) {}
      }
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        var r;

        try {
          r = exports.storage.getItem('debug');
        } catch (error) {}

        if (!r && typeof process !== 'undefined' && 'env' in process) {
          r = process.env.DEBUG;
        }

        return r;
      }
      /**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */

      function localstorage() {
        try {
          return localStorage;
        } catch (error) {}
      }

      module.exports = __nccwpck_require__(9289)(exports);
      var formatters = module.exports.formatters;
      /**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */

      formatters.j = function (v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return '[UnexpectedJSONParseError]: ' + error.message;
        }
      };
    },

    9289: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       */
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = __nccwpck_require__(3262);
        Object.keys(env).forEach(function (key) {
          createDebug[key] = env[key];
        });
        /**
         * Active `debug` instances.
         */

        createDebug.instances = [];
        /**
         * The currently active debug mode names, and names to skip.
         */

        createDebug.names = [];
        createDebug.skips = [];
        /**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
         */

        createDebug.formatters = {};
        /**
         * Selects a color for a debug namespace
         * @param {String} namespace The namespace string for the for the debug instance to be colored
         * @return {Number|String} An ANSI color code for the given namespace
         * @api private
         */

        function selectColor(namespace) {
          var hash = 0;

          for (var i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
         * Create a debugger with the given `namespace`.
         *
         * @param {String} namespace
         * @return {Function}
         * @api public
         */

        function createDebug(namespace) {
          var prevTime;

          function debug() {
            if (!debug.enabled) {
              return;
            }

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            var self = debug;

            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== 'string') {
              args.unshift('%O');
            }

            var index = 0;
            args[0] = args[0].replace(
              /%([a-zA-Z%])/g,
              function (match, format) {
                if (match === '%%') {
                  return match;
                }

                index++;
                var formatter = createDebug.formatters[format];

                if (typeof formatter === 'function') {
                  var val = args[index];
                  match = formatter.call(self, val);

                  args.splice(index, 1);
                  index--;
                }

                return match;
              },
            );

            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.enabled = createDebug.enabled(namespace);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(namespace);
          debug.destroy = destroy;
          debug.extend = extend;

          if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
          }

          createDebug.instances.push(debug);
          return debug;
        }

        function destroy() {
          var index = createDebug.instances.indexOf(this);

          if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
          }

          return false;
        }

        function extend(namespace, delimiter) {
          return createDebug(
            this.namespace +
              (typeof delimiter === 'undefined' ? ':' : delimiter) +
              namespace,
          );
        }
        /**
         * Enables a debug mode by namespaces. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} namespaces
         * @api public
         */

        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.names = [];
          createDebug.skips = [];
          var i;
          var split = (typeof namespaces === 'string' ? namespaces : '').split(
            /[\s,]+/,
          );
          var len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              continue;
            }

            namespaces = split[i].replace(/\*/g, '.*?');

            if (namespaces[0] === '-') {
              createDebug.skips.push(
                new RegExp('^' + namespaces.substr(1) + '$'),
              );
            } else {
              createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
          }

          for (i = 0; i < createDebug.instances.length; i++) {
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
          }
        }
        /**
         * Disable debug output.
         *
         * @api public
         */

        function disable() {
          createDebug.enable('');
        }
        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        function enabled(name) {
          if (name[name.length - 1] === '*') {
            return true;
          }

          var i;
          var len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */

        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;
    },

    8010: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      /**
       * Detect Electron renderer / nwjs process, which is node, but we should
       * treat as a browser.
       */
      if (
        typeof process === 'undefined' ||
        process.type === 'renderer' ||
        process.browser === true ||
        process.__nwjs
      ) {
        module.exports = __nccwpck_require__(8024);
      } else {
        module.exports = __nccwpck_require__(3742);
      }
    },

    3742: (module, exports, __nccwpck_require__) => {
      'use strict';

      /**
       * Module dependencies.
       */
      var tty = __nccwpck_require__(3867);

      var util = __nccwpck_require__(1669);
      /**
       * This is the Node.js implementation of `debug()`.
       */

      exports.init = init;
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      /**
       * Colors.
       */

      exports.colors = [6, 2, 3, 4, 5, 1];

      try {
        var supportsColor = __nccwpck_require__(8458);

        if (
          supportsColor &&
          (supportsColor.stderr || supportsColor).level >= 2
        ) {
          exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221,
          ];
        }
      } catch (error) {}

      /**
       * Build up the default `inspectOpts` object from the environment variables.
       *
       *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
       */

      exports.inspectOpts = Object.keys(process.env)
        .filter(function (key) {
          return /^debug_/i.test(key);
        })
        .reduce(function (obj, key) {
          var prop = key
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, function (_, k) {
              return k.toUpperCase();
            });

          var val = process.env[key];

          if (/^(yes|on|true|enabled)$/i.test(val)) {
            val = true;
          } else if (/^(no|off|false|disabled)$/i.test(val)) {
            val = false;
          } else if (val === 'null') {
            val = null;
          } else {
            val = Number(val);
          }

          obj[prop] = val;
          return obj;
        }, {});
      /**
       * Is stdout a TTY? Colored output is enabled when `true`.
       */

      function useColors() {
        return 'colors' in exports.inspectOpts
          ? Boolean(exports.inspectOpts.colors)
          : tty.isatty(process.stderr.fd);
      }
      /**
       * Adds ANSI color escape codes if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        var name = this.namespace,
          useColors = this.useColors;

        if (useColors) {
          var c = this.color;
          var colorCode = '\x1B[3' + (c < 8 ? c : '8;5;' + c);
          var prefix = '  '.concat(colorCode, ';1m').concat(name, ' \x1B[0m');
          args[0] = prefix + args[0].split('\n').join('\n' + prefix);
          args.push(
            colorCode + 'm+' + module.exports.humanize(this.diff) + '\x1B[0m',
          );
        } else {
          args[0] = getDate() + name + ' ' + args[0];
        }
      }

      function getDate() {
        if (exports.inspectOpts.hideDate) {
          return '';
        }

        return new Date().toISOString() + ' ';
      }
      /**
       * Invokes `util.format()` with the specified arguments and writes to stderr.
       */

      function log() {
        return process.stderr.write(util.format.apply(util, arguments) + '\n');
      }
      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        if (namespaces) {
          process.env.DEBUG = namespaces;
        } else {
          delete process.env.DEBUG;
        }
      }
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        return process.env.DEBUG;
      }
      /**
       * Init logic for `debug` instances.
       *
       * Create a new `inspectOpts` object in case `useColors` is set
       * differently for a particular `debug` instance.
       */

      function init(debug) {
        debug.inspectOpts = {};
        var keys = Object.keys(exports.inspectOpts);

        for (var i = 0; i < keys.length; i++) {
          debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
        }
      }

      module.exports = __nccwpck_require__(9289)(exports);
      var formatters = module.exports.formatters;
      /**
       * Map %o to `util.inspect()`, all on a single line.
       */

      formatters.o = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
      };
      /**
       * Map %O to `util.inspect()`, allowing multiple lines if needed.
       */

      formatters.O = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts);
      };
    },

    5735: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var calc = __nccwpck_require__(9139);
      var utils = __nccwpck_require__(514);
      var get = __nccwpck_require__(4839);
      var stats = {};

      /**
       * Get a range of download counts for the specified repository.
       * This method returns a stream of raw data
       * in the form of `{ day: '2016-01-10', downloads: 123456 }`.
       *
       * ```js
       * var start = new Date('2016-01-09');
       * var end = new Date('2016-01-10');
       * stats.get(start, end, 'micromatch')
       *   .on('error', console.error)
       *   .on('data', function(data) {
       *     console.log(data);
       *   })
       *   .on('end', function() {
       *     console.log('done.');
       *   });
       *
       *
       * ```
       *
       * @param  {Date} `start` Start date of stream.
       * @param  {Date} `end`   End date of stream.
       * @param  {String} `repo`  Repository to get downloads for. If `repo` is not passed, then all npm downloads for the day will be returned.
       * @return {Stream} Stream of download data.
       * @api public
       * @name get
       */

      stats.get = get;

      /**
       * Calculate object containing methods to calculate stats on arrays of download counts.
       * See [calculate][#calculate] api docs for more information.
       *
       * @api public
       * @name calc
       */

      stats.calc = calc;

      /**
       * Exposes `stats`
       */

      module.exports = stats;
    },

    9139: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(514);

      var calculate = (module.exports = {});

      calculate.group = function (arr, fn) {
        var groups = {};
        var len = arr.length,
          i = 0;
        while (len--) {
          var download = arr[i++];
          var groupArr = utils.arrayify(fn(download));
          groupArr.reduce(function (acc, group) {
            if (typeof group === 'string') {
              group = { name: group };
            }
            acc[group.name] = acc[group.name] || group;
            acc[group.name].downloads = acc[group.name].downloads || [];
            acc[group.name].downloads.push(download);
            return acc;
          }, groups);
        }
        return groups;
      };

      /**
       * Calculate the total for each group (key) in the object.
       *
       * @name group.total
       * @param  {Object} `groups` Object created by a `group` function.
       * @return {Object} Object with calculated totals
       * @api public
       */

      calculate.group.total = function (groups) {
        var res = {};
        var keys = Object.keys(groups);
        var len = keys.length,
          i = 0;
        while (len--) {
          var key = keys[i++];
          var group = groups[key];
          if (Array.isArray(group)) {
            res[key] = calculate.total(group);
          } else {
            res[key] = calculate.total(group.downloads);
          }
        }
        return res;
      };

      /**
       * Calculate the total downloads for an array of download objects.
       *
       * @param  {Array} `arr` Array of download objects (must have a `.downloads` property)
       * @return {Number} Total of all downloads in the array.
       * @api public
       */

      calculate.total = function (arr) {
        arr = utils.arrayify(arr);
        var len = arr.length,
          i = 0;
        var total = 0;
        while (len--) total += arr[i++].downloads || 0;
        return total;
      };

      /**
       * Calculate the average for each group (key) in the object.
       *
       * @name group.avg
       * @param  {Object} `groups` Object created by a `group` function.
       * @return {Object} Object with calculated average
       * @api public
       */

      calculate.group.avg = function (groups, days) {
        var res = {};
        var keys = Object.keys(groups);
        var len = keys.length,
          i = 0;
        while (len--) {
          var key = keys[i++];
          res[key] = calculate.avg(groups[key], days);
        }
        return res;
      };

      /**
       * Calculate the average downloads for an array of download objects.
       *
       * @param  {Array} `arr` Array of download objects (must have a `.downloads` property)
       * @return {Number} Average of all downloads in the array.
       * @api public
       */

      calculate.avg = function (arr, days) {
        arr = utils.arrayify(arr);
        var len = arr.length,
          i = 0;
        var total = 0;
        while (len--) {
          total += arr[i++].downloads || 0;
        }

        if (typeof days === 'undefined' || days === 0) {
          days = arr.length;
        }
        return total / days;
      };

      /**
       * Create an array of downloads before specified day.
       *
       * @name group.before
       * @param  {String} `day` Day specifying last day to use in group.
       * @param  {Array} `arr` Array of downloads to check.
       * @return {Array} Array of downloads happened before or on specified day.
       * @api public
       */

      calculate.group.before = function (day, arr) {
        var end = utils.format(normalizeDate(utils.moment(day)));
        var group = [];
        var len = arr.length,
          i = 0;
        while (len--) {
          var download = arr[i++];
          if (download.day <= end) {
            group.push(download);
          }
        }
        return group;
      };

      /**
       * Calculate the total downloads happening before the specified day.
       *
       * @param  {String} `day` Day specifying last day to use in group.
       * @param  {Array} `arr` Array of downloads to check.
       * @return {Number} Total downloads happening before or on specified day.
       * @api public
       */

      calculate.before = function (day, arr) {
        var group = calculate.group.before(day, arr);
        return calculate.total(group);
      };

      /**
       * Create an array of downloads for the last `X` days.
       *
       * @name group.last
       * @param  {Number} `days` Number of days to go back.
       * @param  {Array} `arr` Array of downloads to check.
       * @param {String} `init` Optional day to use as the last day to include. (Days from `init || today` - `days` to `init || today`)
       * @return {Array} Array of downloads for last `X` days.
       * @api public
       */

      calculate.group.last = function (days, arr, init) {
        var today = init ? utils.moment.utc(init) : utils.moment.utc();
        var start = utils.moment.utc(today);
        start.subtract(days, 'days');
        today = utils.format(today);
        start = utils.format(start);

        var group = [];
        var len = arr.length,
          i = 0;
        while (len--) {
          var download = arr[i++];
          if (download.day > start && download.day <= today) {
            group.push(download);
          }
        }
        return group;
      };

      /**
       * Calculate total downloads for the last `X` days.
       *
       * @name last
       * @param  {Number} `days` Number of days to go back.
       * @param  {Array} `arr` Array of downloads to check.
       * @param {String} `init` Optional day to use as the last day to include. (Days from `init || today` - `days` to `init || today`)
       * @return {Array} Array of downloads for last `X` days.
       * @api public
       */

      calculate.last = function (days, arr, init) {
        var group = calculate.group.last(days, arr, init);
        return calculate.total(group);
      };

      /**
       * Create an array of downloads for the previous `X` days.
       *
       * @name group.prev
       * @param  {Number} `days` Number of days to go back.
       * @param  {Array} `arr` Array of downloads to check.
       * @param {String} `init` Optional day to use as the prev day to include. (Days from `init || today` - `days` - `days` to `init || today` - `days`)
       * @return {Array} Array of downloads for prev `X` days.
       * @api public
       */

      calculate.group.prev = function (days, arr, init) {
        var today = init ? utils.moment(init) : utils.moment();
        var end = utils.moment(today);
        end.subtract(days, 'days');
        return calculate.group.last(days, arr, end);
      };

      /**
       * Calculate total downloads for the previous `X` days.
       *
       * @name prev
       * @param  {Number} `days` Number of days to go back.
       * @param  {Array} `arr` Array of downloads to check.
       * @param {String} `init` Optional day to use as the prev day to include. (Days from `init || today` - `days` - `days` to `init || today` - `days`)
       * @return {Array} Array of downloads for prev `X` days.
       * @api public
       */

      calculate.prev = function (days, arr, init) {
        var group = calculate.group.prev(days, arr, init);
        return calculate.total(group);
      };

      /**
       * Create an object of download groups by month.
       *
       * @param  {Array} `arr` Array of downloads to group and total.
       * @return {Object} Groups with arrays of download objects
       * @api public
       */

      calculate.group.monthly = function (arr) {
        return calculate.group(arr, function (download) {
          return download.day.substr(0, 7);
        });
      };

      function normalizeDate(date) {
        date.utc().hour(0);
        date.utc().minute(0);
        date.utc().second(0);
        return date;
      }

      calculate.group.window = function (days, arr, init) {
        var today = init ? utils.moment(init) : normalizeDate(utils.moment());
        arr = calculate.group.before(today, arr);
        return calculate.group(arr, function (download) {
          var day = utils.moment.utc(download.day);
          var diff = day.diff(today, 'days');
          var period = Math.floor((diff * -1) / days);
          var start = utils.moment(today);
          start.subtract((period + 1) * days, 'days');
          return {
            name: period,
            period: utils.format(start),
          };
        });
      };

      /**
       * Calculate total downloads grouped by month.
       *
       * @param  {Array} `arr` Array of downloads to group and total.
       * @return {Object} Groups with total downloads calculated
       * @api public
       */

      calculate.monthly = function (arr) {
        var months = calculate.group.monthly(arr);
        return calculate.group.total(months);
      };

      /**
       * Create an object of download groups by month.
       *
       * @param  {Array} `arr` Array of downloads to group and total.
       * @return {Object} Groups with arrays of download objects
       * @api public
       */
      calculate.group.yearly = function (arr) {
        return calculate.group(arr, function (download) {
          return download.day.substr(0, 4);
        });
      };

      /**
       * Calculate total downloads grouped by year.
       *
       * @param  {Array} `arr` Array of downloads to group and total.
       * @return {Object} Groups with total downloads calculated
       * @api public
       */

      calculate.yearly = function (arr) {
        var years = calculate.group.yearly(arr);
        return calculate.group.total(years);
      };
    },

    4839: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var utils = __nccwpck_require__(514);

      function get(start, end, repo) {
        start = utils.moment.utc(start);
        end = utils.moment.utc(end);
        var current = utils.moment.utc(start);
        var stream = new utils.stream.Stream();
        run();
        return stream;

        function run() {
          process.nextTick(function () {
            let period = utils.moment.utc(current).add(300, 'days');
            if (period.format('YYYY-MM-DD') >= end.format('YYYY-MM-DD')) {
              period = utils.moment.utc(end);
            }

            getPage(current, period, repo)
              .on('error', stream.emit.bind(stream, 'error'))
              .on('data', function (data) {
                stream.emit('data', data);
              })
              .on('end', function () {
                current.add(300, 'days');
                if (current.format('YYYY-MM-DD') >= end.format('YYYY-MM-DD')) {
                  stream.emit('end');
                  return;
                }
                run();
              });
          });
        }
      }

      function getPage(start, end, repo) {
        var stream = new utils.stream.Stream();
        var url = 'https://api.npmjs.org/downloads/range/';
        url += utils.format(start);
        url += ':' + utils.format(end);
        url += repo ? '/' + repo : '';

        var bulk = false;
        if (repo && repo.indexOf(',') > -1) {
          bulk = true;
        }

        process.nextTick(function () {
          var req = utils.https.get(options(url), function (res) {
            res
              .on('error', console.error)
              .pipe(utils.JSONStream.parse(bulk ? '*' : 'downloads.*'))
              .on('error', handleError)
              .on('data', function (data) {
                stream.emit('data', data);
              })
              .on('end', stream.emit.bind(stream, 'end'));
          });

          req.on('error', stream.emit.bind(stream, 'error'));
        });

        return stream;

        function handleError(err) {
          console.error('handling error', err);
          if (err.message.indexOf('Invalid JSON') >= 0) {
            handleInvalidJSON();
            return;
          }
          stream.emit('error', err);
        }

        function handleInvalidJSON() {
          var body = '';
          utils.https.get(options(url), function (res) {
            res
              .on('error', stream.emit.bind('error'))
              .on('data', function (data) {
                body += data;
              })
              .on('end', function () {
                stream.emit('error', new Error(body));
              });
          });
        }
      }

      get.point = function (period, repo, cb) {
        var url = 'https://api.npmjs.org/downloads/point/';
        url += period;
        url += repo ? '/' + repo : '';

        var results;
        var req = utils.https.get(options(url), function (res) {
          res
            .once('error', console.error)
            .pipe(utils.JSONStream.parse())
            .once('error', cb)
            .on('data', function (data) {
              results = data;
            })
            .once('end', function () {
              cb(null, results);
            });
        });

        req.once('error', cb);
      };

      /**
       * Get the all time total downloads for a repository.
       *
       * ```js
       * stats.get.allTime('micromatch', function(err, results) {
       *   if (err) return console.error(err);
       *   console.log(results);
       * });
       *
       * ```
       * @param  {String} `repo` Repository to retrieve downloads for.
       * @param  {Function} `cb` Callback function to get results
       * @api public
       */

      get.allTime = function (repo, cb) {
        return get.point('all-time', repo, cb);
      };

      /**
       * Get the last month's total downloads for a repository.
       *
       * ```js
       * stats.get.lastMonth('micromatch', function(err, results) {
       *   if (err) return console.error(err);
       *   console.log(results);
       * });
       *
       * ```
       * @param  {String} `repo` Repository to retrieve downloads for.
       * @param  {Function} `cb` Callback function to get results
       * @api public
       */

      get.lastMonth = function (repo, cb) {
        return get.point('last-month', repo, cb);
      };

      /**
       * Get the last week's total downloads for a repository.
       *
       * ```js
       * stats.get.lastWeek('micromatch', function(err, results) {
       *   if (err) return console.error(err);
       *   console.log(results);
       * });
       *
       * ```
       * @param  {String} `repo` Repository to retrieve downloads for.
       * @param  {Function} `cb` Callback function to get results
       * @api public
       */

      get.lastWeek = function (repo, cb) {
        return get.point('last-week', repo, cb);
      };

      /**
       * Get the last day's total downloads for a repository.
       *
       * ```js
       * stats.get.lastDay('micromatch', function(err, results) {
       *   if (err) return console.error(err);
       *   console.log(results);
       * });
       *
       * ```
       * @param  {String} `repo` Repository to retrieve downloads for.
       * @param  {Function} `cb` Callback function to get results
       * @api public
       */

      get.lastDay = function (repo, cb) {
        return get.point('last-day', repo, cb);
      };

      function options(url) {
        var opts = utils.url.parse(url);
        opts.headers = {
          'User-Agent': 'https://github.com/doowb/download-stats',
        };
        return opts;
      }

      /**
       * Expose `get`
       */

      module.exports = get;
    },

    514: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      /**
       * Module dependencies
       */

      var utils = __nccwpck_require__(1544)(require);

      /**
       * Temporarily re-assign `require` to trick browserify and
       * webpack into reconizing lazy dependencies.
       *
       * This tiny bit of ugliness has the huge dual advantage of
       * only loading modules that are actually called at some
       * point in the lifecycle of the application, whilst also
       * allowing browserify and webpack to find modules that
       * are depended on but never actually called.
       */

      var fn = require;
      __nccwpck_require__(4326) = utils;

      /**
       * Lazily required module dependencies
       */

      __nccwpck_require__(4326)('JSONStream', 'JSONStream');
      __nccwpck_require__(9909);
      __nccwpck_require__(7211);
      __nccwpck_require__(2413);
      __nccwpck_require__(8835);

      /**
       * Restore `require`
       */

      __nccwpck_require__(4326) = fn;

      utils.arrayify = function (val) {
        if (!val) return [];
        return Array.isArray(val) ? val : [val];
      };

      utils.format = function (date) {
        if (!utils.moment.isMoment(date)) {
          date = utils.moment(date);
        }
        var year = date.utc().year();
        var month = date.utc().month() + 1;
        var day = date.utc().date();

        return '' + year + '-' + utils.pad(month) + '-' + utils.pad(day);
      };

      utils.pad = function (num) {
        return (num < 10 ? '0' : '') + num;
      };

      utils.formatNumber = function (num) {
        num = '' + num;
        var len = num.length;
        if (len <= 3) return num;
        var parts = len / 3;
        var i = len % 3;
        var first = '',
          last = '';
        if (i === 0) {
          i = 3;
        }
        first = num.substr(0, i);
        last = num.substr(i);
        var res = first + ',' + utils.formatNumber(last);
        return res;
      };

      /**
       * Expose `utils` modules
       */

      module.exports = utils;
    },

    1960: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var debug;

      module.exports = function () {
        if (!debug) {
          try {
            /* eslint global-require: off */
            debug = __nccwpck_require__(8010)('follow-redirects');
          } catch (error) {
            debug = function () {
              /* */
            };
          }
        }
        debug.apply(null, arguments);
      };
    },

    2340: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var url = __nccwpck_require__(8835);
      var URL = url.URL;
      var http = __nccwpck_require__(8605);
      var https = __nccwpck_require__(7211);
      var Writable = __nccwpck_require__(2413).Writable;
      var assert = __nccwpck_require__(2357);
      var debug = __nccwpck_require__(1960);

      var eventHandlers = Object.create(null);
      ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'].forEach(
        function (event) {
          eventHandlers[event] = function (arg1, arg2, arg3) {
            this._redirectable.emit(event, arg1, arg2, arg3);
          };
        },
      );

      var RedirectionError = createErrorType('ERR_FR_REDIRECTION_FAILURE', '');
      var TooManyRedirectsError = createErrorType(
        'ERR_FR_TOO_MANY_REDIRECTS',
        'Maximum number of redirects exceeded',
      );
      var MaxBodyLengthExceededError = createErrorType(
        'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
        'Request body larger than maxBodyLength limit',
      );
      var WriteAfterEndError = createErrorType(
        'ERR_STREAM_WRITE_AFTER_END',
        'write after end',
      );

      function RedirectableRequest(options, responseCallback) {
        Writable.call(this);
        this._sanitizeOptions(options);
        this._options = options;
        this._ended = false;
        this._ending = false;
        this._redirectCount = 0;
        this._redirects = [];
        this._requestBodyLength = 0;
        this._requestBodyBuffers = [];

        if (responseCallback) {
          this.on('response', responseCallback);
        }

        var self = this;
        this._onNativeResponse = function (response) {
          self._processResponse(response);
        };

        this._performRequest();
      }
      RedirectableRequest.prototype = Object.create(Writable.prototype);

      RedirectableRequest.prototype.write = function (
        data,
        encoding,
        callback,
      ) {
        if (this._ending) {
          throw new WriteAfterEndError();
        }

        if (
          !(
            typeof data === 'string' ||
            (typeof data === 'object' && 'length' in data)
          )
        ) {
          throw new TypeError('data should be a string, Buffer or Uint8Array');
        }
        if (typeof encoding === 'function') {
          callback = encoding;
          encoding = null;
        }

        if (data.length === 0) {
          if (callback) {
            callback();
          }
          return;
        }
        if (
          this._requestBodyLength + data.length <=
          this._options.maxBodyLength
        ) {
          this._requestBodyLength += data.length;
          this._requestBodyBuffers.push({ data: data, encoding: encoding });
          this._currentRequest.write(data, encoding, callback);
        } else {
          this.emit('error', new MaxBodyLengthExceededError());
          this.abort();
        }
      };

      RedirectableRequest.prototype.end = function (data, encoding, callback) {
        if (typeof data === 'function') {
          callback = data;
          data = encoding = null;
        } else if (typeof encoding === 'function') {
          callback = encoding;
          encoding = null;
        }

        if (!data) {
          this._ended = this._ending = true;
          this._currentRequest.end(null, null, callback);
        } else {
          var self = this;
          var currentRequest = this._currentRequest;
          this.write(data, encoding, function () {
            self._ended = true;
            currentRequest.end(null, null, callback);
          });
          this._ending = true;
        }
      };

      RedirectableRequest.prototype.setHeader = function (name, value) {
        this._options.headers[name] = value;
        this._currentRequest.setHeader(name, value);
      };

      RedirectableRequest.prototype.removeHeader = function (name) {
        delete this._options.headers[name];
        this._currentRequest.removeHeader(name);
      };

      RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
        if (callback) {
          this.once('timeout', callback);
        }

        if (this.socket) {
          startTimer(this, msecs);
        } else {
          var self = this;
          this._currentRequest.once('socket', function () {
            startTimer(self, msecs);
          });
        }

        this.once('response', clearTimer);
        this.once('error', clearTimer);

        return this;
      };

      function startTimer(request, msecs) {
        clearTimeout(request._timeout);
        request._timeout = setTimeout(function () {
          request.emit('timeout');
        }, msecs);
      }

      function clearTimer() {
        clearTimeout(this._timeout);
      }

      [
        'abort',
        'flushHeaders',
        'getHeader',
        'setNoDelay',
        'setSocketKeepAlive',
      ].forEach(function (method) {
        RedirectableRequest.prototype[method] = function (a, b) {
          return this._currentRequest[method](a, b);
        };
      });

      ['aborted', 'connection', 'socket'].forEach(function (property) {
        Object.defineProperty(RedirectableRequest.prototype, property, {
          get: function () {
            return this._currentRequest[property];
          },
        });
      });

      RedirectableRequest.prototype._sanitizeOptions = function (options) {
        if (!options.headers) {
          options.headers = {};
        }

        if (options.host) {
          if (!options.hostname) {
            options.hostname = options.host;
          }
          delete options.host;
        }

        if (!options.pathname && options.path) {
          var searchPos = options.path.indexOf('?');
          if (searchPos < 0) {
            options.pathname = options.path;
          } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
          }
        }
      };

      RedirectableRequest.prototype._performRequest = function () {
        var protocol = this._options.protocol;
        var nativeProtocol = this._options.nativeProtocols[protocol];
        if (!nativeProtocol) {
          this.emit('error', new TypeError('Unsupported protocol ' + protocol));
          return;
        }

        if (this._options.agents) {
          var scheme = protocol.substr(0, protocol.length - 1);
          this._options.agent = this._options.agents[scheme];
        }

        var request = (this._currentRequest = nativeProtocol.request(
          this._options,
          this._onNativeResponse,
        ));
        this._currentUrl = url.format(this._options);

        request._redirectable = this;
        for (var event in eventHandlers) {
          /* istanbul ignore else */
          if (event) {
            request.on(event, eventHandlers[event]);
          }
        }

        if (this._isRedirect) {
          var i = 0;
          var self = this;
          var buffers = this._requestBodyBuffers;
          (function writeNext(error) {
            /* istanbul ignore else */
            if (request === self._currentRequest) {
              /* istanbul ignore if */
              if (error) {
                self.emit('error', error);
              } else if (i < buffers.length) {
                var buffer = buffers[i++];
                /* istanbul ignore else */
                if (!request.finished) {
                  request.write(buffer.data, buffer.encoding, writeNext);
                }
              } else if (self._ended) {
                request.end();
              }
            }
          })();
        }
      };

      RedirectableRequest.prototype._processResponse = function (response) {
        var statusCode = response.statusCode;
        if (this._options.trackRedirects) {
          this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode,
          });
        }

        var location = response.headers.location;
        if (
          location &&
          this._options.followRedirects !== false &&
          statusCode >= 300 &&
          statusCode < 400
        ) {
          this._currentRequest.removeAllListeners();
          this._currentRequest.on('error', noop);
          this._currentRequest.abort();

          response.destroy();

          if (++this._redirectCount > this._options.maxRedirects) {
            this.emit('error', new TooManyRedirectsError());
            return;
          }

          if (
            ((statusCode === 301 || statusCode === 302) &&
              this._options.method === 'POST') ||
            (statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))
          ) {
            this._options.method = 'GET';

            this._requestBodyBuffers = [];
            removeMatchingHeaders(/^content-/i, this._options.headers);
          }

          var previousHostName =
            removeMatchingHeaders(/^host$/i, this._options.headers) ||
            url.parse(this._currentUrl).hostname;

          var redirectUrl = url.resolve(this._currentUrl, location);
          debug('redirecting to', redirectUrl);
          this._isRedirect = true;
          var redirectUrlParts = url.parse(redirectUrl);
          Object.assign(this._options, redirectUrlParts);

          if (redirectUrlParts.hostname !== previousHostName) {
            removeMatchingHeaders(/^authorization$/i, this._options.headers);
          }

          if (typeof this._options.beforeRedirect === 'function') {
            var responseDetails = { headers: response.headers };
            try {
              this._options.beforeRedirect.call(
                null,
                this._options,
                responseDetails,
              );
            } catch (err) {
              this.emit('error', err);
              return;
            }
            this._sanitizeOptions(this._options);
          }

          try {
            this._performRequest();
          } catch (cause) {
            var error = new RedirectionError(
              'Redirected request failed: ' + cause.message,
            );
            error.cause = cause;
            this.emit('error', error);
          }
        } else {
          response.responseUrl = this._currentUrl;
          response.redirects = this._redirects;
          this.emit('response', response);

          this._requestBodyBuffers = [];
        }
      };

      function wrap(protocols) {
        var exports = {
          maxRedirects: 21,
          maxBodyLength: 10 * 1024 * 1024,
        };

        var nativeProtocols = {};
        Object.keys(protocols).forEach(function (scheme) {
          var protocol = scheme + ':';
          var nativeProtocol = (nativeProtocols[protocol] = protocols[scheme]);
          var wrappedProtocol = (exports[scheme] = Object.create(
            nativeProtocol,
          ));

          function request(input, options, callback) {
            if (typeof input === 'string') {
              var urlStr = input;
              try {
                input = urlToOptions(new URL(urlStr));
              } catch (err) {
                /* istanbul ignore next */
                input = url.parse(urlStr);
              }
            } else if (URL && input instanceof URL) {
              input = urlToOptions(input);
            } else {
              callback = options;
              options = input;
              input = { protocol: protocol };
            }
            if (typeof options === 'function') {
              callback = options;
              options = null;
            }

            options = Object.assign(
              {
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength,
              },
              input,
              options,
            );
            options.nativeProtocols = nativeProtocols;

            assert.equal(options.protocol, protocol, 'protocol mismatch');
            debug('options', options);
            return new RedirectableRequest(options, callback);
          }

          function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(
              input,
              options,
              callback,
            );
            wrappedRequest.end();
            return wrappedRequest;
          }

          Object.defineProperties(wrappedProtocol, {
            request: {
              value: request,
              configurable: true,
              enumerable: true,
              writable: true,
            },
            get: {
              value: get,
              configurable: true,
              enumerable: true,
              writable: true,
            },
          });
        });
        return exports;
      }

      /* istanbul ignore next */
      function noop() {
        /* empty */
      }

      function urlToOptions(urlObject) {
        var options = {
          protocol: urlObject.protocol,
          hostname: urlObject.hostname.startsWith('[')
            ? /* istanbul ignore next */
              urlObject.hostname.slice(1, -1)
            : urlObject.hostname,
          hash: urlObject.hash,
          search: urlObject.search,
          pathname: urlObject.pathname,
          path: urlObject.pathname + urlObject.search,
          href: urlObject.href,
        };
        if (urlObject.port !== '') {
          options.port = Number(urlObject.port);
        }
        return options;
      }

      function removeMatchingHeaders(regex, headers) {
        var lastValue;
        for (var header in headers) {
          if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
          }
        }
        return lastValue;
      }

      function createErrorType(code, defaultMessage) {
        function CustomError(message) {
          Error.captureStackTrace(this, this.constructor);
          this.message = message || defaultMessage;
        }
        CustomError.prototype = new Error();
        CustomError.prototype.constructor = CustomError;
        CustomError.prototype.name = 'Error [' + code + ']';
        CustomError.prototype.code = code;
        return CustomError;
      }

      module.exports = wrap({ http: http, https: https });
      module.exports.wrap = wrap;
    },

    3788: (module) => {
      'use strict';

      module.exports = (flag, argv) => {
        argv = argv || process.argv;
        const prefix = flag.startsWith('-')
          ? ''
          : flag.length === 1
          ? '-'
          : '--';
        const pos = argv.indexOf(prefix + flag);
        const terminatorPos = argv.indexOf('--');
        return (
          pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos)
        );
      };
    },

    8422: (module) => {
      module.exports = function (obj) {
        return (
          obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
        );
      };

      function isBuffer(obj) {
        return (
          !!obj.constructor &&
          typeof obj.constructor.isBuffer === 'function' &&
          obj.constructor.isBuffer(obj)
        );
      }

      function isSlowBuffer(obj) {
        return (
          typeof obj.readFloatLE === 'function' &&
          typeof obj.slice === 'function' &&
          isBuffer(obj.slice(0, 0))
        );
      }
    },

    4505: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var isObject = __nccwpck_require__(4437);

      function isObjectObject(o) {
        return (
          isObject(o) === true &&
          Object.prototype.toString.call(o) === '[object Object]'
        );
      }

      module.exports = function isPlainObject(o) {
        var ctor, prot;

        if (isObjectObject(o) === false) return false;

        ctor = o.constructor;
        if (typeof ctor !== 'function') return false;

        prot = ctor.prototype;
        if (isObjectObject(prot) === false) return false;

        if (prot.hasOwnProperty('isPrototypeOf') === false) {
          return false;
        }

        return true;
      };
    },

    4437: (module) => {
      'use strict';

      module.exports = function isObject(val) {
        return (
          val != null && typeof val === 'object' && Array.isArray(val) === false
        );
      };
    },

    8978: (module) => {
      /*global Buffer*/

      var C = {};

      var LEFT_BRACE = (C.LEFT_BRACE = 0x1);
      var RIGHT_BRACE = (C.RIGHT_BRACE = 0x2);
      var LEFT_BRACKET = (C.LEFT_BRACKET = 0x3);
      var RIGHT_BRACKET = (C.RIGHT_BRACKET = 0x4);
      var COLON = (C.COLON = 0x5);
      var COMMA = (C.COMMA = 0x6);
      var TRUE = (C.TRUE = 0x7);
      var FALSE = (C.FALSE = 0x8);
      var NULL = (C.NULL = 0x9);
      var STRING = (C.STRING = 0xa);
      var NUMBER = (C.NUMBER = 0xb);

      var START = (C.START = 0x11);
      var STOP = (C.STOP = 0x12);
      var TRUE1 = (C.TRUE1 = 0x21);
      var TRUE2 = (C.TRUE2 = 0x22);
      var TRUE3 = (C.TRUE3 = 0x23);
      var FALSE1 = (C.FALSE1 = 0x31);
      var FALSE2 = (C.FALSE2 = 0x32);
      var FALSE3 = (C.FALSE3 = 0x33);
      var FALSE4 = (C.FALSE4 = 0x34);
      var NULL1 = (C.NULL1 = 0x41);
      var NULL2 = (C.NULL2 = 0x42);
      var NULL3 = (C.NULL3 = 0x43);
      var NUMBER1 = (C.NUMBER1 = 0x51);
      var NUMBER3 = (C.NUMBER3 = 0x53);
      var STRING1 = (C.STRING1 = 0x61);
      var STRING2 = (C.STRING2 = 0x62);
      var STRING3 = (C.STRING3 = 0x63);
      var STRING4 = (C.STRING4 = 0x64);
      var STRING5 = (C.STRING5 = 0x65);
      var STRING6 = (C.STRING6 = 0x66);

      var VALUE = (C.VALUE = 0x71);
      var KEY = (C.KEY = 0x72);

      var OBJECT = (C.OBJECT = 0x81);
      var ARRAY = (C.ARRAY = 0x82);

      var BACK_SLASH = '\\'.charCodeAt(0);
      var FORWARD_SLASH = '/'.charCodeAt(0);
      var BACKSPACE = '\b'.charCodeAt(0);
      var FORM_FEED = '\f'.charCodeAt(0);
      var NEWLINE = '\n'.charCodeAt(0);
      var CARRIAGE_RETURN = '\r'.charCodeAt(0);
      var TAB = '\t'.charCodeAt(0);

      var STRING_BUFFER_SIZE = 64 * 1024;

      function Parser() {
        this.tState = START;
        this.value = undefined;

        this.string = undefined;
        this.stringBuffer = Buffer.alloc
          ? Buffer.alloc(STRING_BUFFER_SIZE)
          : new Buffer(STRING_BUFFER_SIZE);
        this.stringBufferOffset = 0;
        this.unicode = undefined;
        this.highSurrogate = undefined;

        this.key = undefined;
        this.mode = undefined;
        this.stack = [];
        this.state = VALUE;
        this.bytes_remaining = 0;
        this.bytes_in_sequence = 0;
        this.temp_buffs = {
          2: new Buffer(2),
          3: new Buffer(3),
          4: new Buffer(4),
        };

        this.offset = -1;
      }

      Parser.toknam = function (code) {
        var keys = Object.keys(C);
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          if (C[key] === code) {
            return key;
          }
        }
        return code && '0x' + code.toString(16);
      };

      var proto = Parser.prototype;
      proto.onError = function (err) {
        throw err;
      };
      proto.charError = function (buffer, i) {
        this.tState = STOP;
        this.onError(
          new Error(
            'Unexpected ' +
              JSON.stringify(String.fromCharCode(buffer[i])) +
              ' at position ' +
              i +
              ' in state ' +
              Parser.toknam(this.tState),
          ),
        );
      };
      proto.appendStringChar = function (char) {
        if (this.stringBufferOffset >= STRING_BUFFER_SIZE) {
          this.string += this.stringBuffer.toString('utf8');
          this.stringBufferOffset = 0;
        }

        this.stringBuffer[this.stringBufferOffset++] = char;
      };
      proto.appendStringBuf = function (buf, start, end) {
        var size = buf.length;
        if (typeof start === 'number') {
          if (typeof end === 'number') {
            if (end < 0) {
              size = buf.length - start + end;
            } else {
              size = end - start;
            }
          } else {
            size = buf.length - start;
          }
        }

        if (size < 0) {
          size = 0;
        }

        if (this.stringBufferOffset + size > STRING_BUFFER_SIZE) {
          this.string += this.stringBuffer.toString(
            'utf8',
            0,
            this.stringBufferOffset,
          );
          this.stringBufferOffset = 0;
        }

        buf.copy(this.stringBuffer, this.stringBufferOffset, start, end);
        this.stringBufferOffset += size;
      };
      proto.write = function (buffer) {
        if (typeof buffer === 'string') buffer = new Buffer(buffer);
        var n;
        for (var i = 0, l = buffer.length; i < l; i++) {
          if (this.tState === START) {
            n = buffer[i];
            this.offset++;
            if (n === 0x7b) {
              this.onToken(LEFT_BRACE, '{');
            } else if (n === 0x7d) {
              this.onToken(RIGHT_BRACE, '}');
            } else if (n === 0x5b) {
              this.onToken(LEFT_BRACKET, '[');
            } else if (n === 0x5d) {
              this.onToken(RIGHT_BRACKET, ']');
            } else if (n === 0x3a) {
              this.onToken(COLON, ':');
            } else if (n === 0x2c) {
              this.onToken(COMMA, ',');
            } else if (n === 0x74) {
              this.tState = TRUE1;
            } else if (n === 0x66) {
              this.tState = FALSE1;
            } else if (n === 0x6e) {
              this.tState = NULL1;
            } else if (n === 0x22) {
              this.string = '';
              this.stringBufferOffset = 0;
              this.tState = STRING1;
            } else if (n === 0x2d) {
              this.string = '-';
              this.tState = NUMBER1;
            } else {
              if (n >= 0x30 && n < 0x40) {
                this.string = String.fromCharCode(n);
                this.tState = NUMBER3;
              } else if (n === 0x20 || n === 0x09 || n === 0x0a || n === 0x0d) {
              } else {
                return this.charError(buffer, i);
              }
            }
          } else if (this.tState === STRING1) {
            n = buffer[i];

            if (this.bytes_remaining > 0) {
              for (var j = 0; j < this.bytes_remaining; j++) {
                this.temp_buffs[this.bytes_in_sequence][
                  this.bytes_in_sequence - this.bytes_remaining + j
                ] = buffer[j];
              }

              this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
              this.bytes_in_sequence = this.bytes_remaining = 0;
              i = i + j - 1;
            } else if (this.bytes_remaining === 0 && n >= 128) {
              if (n <= 193 || n > 244) {
                return this.onError(
                  new Error(
                    'Invalid UTF-8 character at position ' +
                      i +
                      ' in state ' +
                      Parser.toknam(this.tState),
                  ),
                );
              }
              if (n >= 194 && n <= 223) this.bytes_in_sequence = 2;
              if (n >= 224 && n <= 239) this.bytes_in_sequence = 3;
              if (n >= 240 && n <= 244) this.bytes_in_sequence = 4;
              if (this.bytes_in_sequence + i > buffer.length) {
                for (var k = 0; k <= buffer.length - 1 - i; k++) {
                  this.temp_buffs[this.bytes_in_sequence][k] = buffer[i + k];
                }
                this.bytes_remaining =
                  i + this.bytes_in_sequence - buffer.length;
                i = buffer.length - 1;
              } else {
                this.appendStringBuf(buffer, i, i + this.bytes_in_sequence);
                i = i + this.bytes_in_sequence - 1;
              }
            } else if (n === 0x22) {
              this.tState = START;
              this.string += this.stringBuffer.toString(
                'utf8',
                0,
                this.stringBufferOffset,
              );
              this.stringBufferOffset = 0;
              this.onToken(STRING, this.string);
              this.offset += Buffer.byteLength(this.string, 'utf8') + 1;
              this.string = undefined;
            } else if (n === 0x5c) {
              this.tState = STRING2;
            } else if (n >= 0x20) {
              this.appendStringChar(n);
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === STRING2) {
            n = buffer[i];
            if (n === 0x22) {
              this.appendStringChar(n);
              this.tState = STRING1;
            } else if (n === 0x5c) {
              this.appendStringChar(BACK_SLASH);
              this.tState = STRING1;
            } else if (n === 0x2f) {
              this.appendStringChar(FORWARD_SLASH);
              this.tState = STRING1;
            } else if (n === 0x62) {
              this.appendStringChar(BACKSPACE);
              this.tState = STRING1;
            } else if (n === 0x66) {
              this.appendStringChar(FORM_FEED);
              this.tState = STRING1;
            } else if (n === 0x6e) {
              this.appendStringChar(NEWLINE);
              this.tState = STRING1;
            } else if (n === 0x72) {
              this.appendStringChar(CARRIAGE_RETURN);
              this.tState = STRING1;
            } else if (n === 0x74) {
              this.appendStringChar(TAB);
              this.tState = STRING1;
            } else if (n === 0x75) {
              this.unicode = '';
              this.tState = STRING3;
            } else {
              return this.charError(buffer, i);
            }
          } else if (
            this.tState === STRING3 ||
            this.tState === STRING4 ||
            this.tState === STRING5 ||
            this.tState === STRING6
          ) {
            n = buffer[i];

            if (
              (n >= 0x30 && n < 0x40) ||
              (n > 0x40 && n <= 0x46) ||
              (n > 0x60 && n <= 0x66)
            ) {
              this.unicode += String.fromCharCode(n);
              if (this.tState++ === STRING6) {
                var intVal = parseInt(this.unicode, 16);
                this.unicode = undefined;
                if (
                  this.highSurrogate !== undefined &&
                  intVal >= 0xdc00 &&
                  intVal < 0xdfff + 1
                ) {
                  //<56320,57343> - lowSurrogate
                  this.appendStringBuf(
                    new Buffer(String.fromCharCode(this.highSurrogate, intVal)),
                  );
                  this.highSurrogate = undefined;
                } else if (
                  this.highSurrogate === undefined &&
                  intVal >= 0xd800 &&
                  intVal < 0xdbff + 1
                ) {
                  //<55296,56319> - highSurrogate
                  this.highSurrogate = intVal;
                } else {
                  if (this.highSurrogate !== undefined) {
                    this.appendStringBuf(
                      new Buffer(String.fromCharCode(this.highSurrogate)),
                    );
                    this.highSurrogate = undefined;
                  }
                  this.appendStringBuf(new Buffer(String.fromCharCode(intVal)));
                }
                this.tState = STRING1;
              }
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === NUMBER1 || this.tState === NUMBER3) {
            n = buffer[i];

            switch (n) {
              case 0x30:
              case 0x31:
              case 0x32:
              case 0x33:
              case 0x34:
              case 0x35:
              case 0x36:
              case 0x37:
              case 0x38:
              case 0x39:
              case 0x2e:
              case 0x65:
              case 0x45:
              case 0x2b:
              case 0x2d:
                this.string += String.fromCharCode(n);
                this.tState = NUMBER3;
                break;
              default:
                this.tState = START;
                var result = Number(this.string);

                if (isNaN(result)) {
                  return this.charError(buffer, i);
                }

                if (
                  this.string.match(/[0-9]+/) == this.string &&
                  result.toString() != this.string
                ) {
                  this.onToken(STRING, this.string);
                } else {
                  this.onToken(NUMBER, result);
                }

                this.offset += this.string.length - 1;
                this.string = undefined;
                i--;
                break;
            }
          } else if (this.tState === TRUE1) {
            if (buffer[i] === 0x72) {
              this.tState = TRUE2;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === TRUE2) {
            if (buffer[i] === 0x75) {
              this.tState = TRUE3;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === TRUE3) {
            if (buffer[i] === 0x65) {
              this.tState = START;
              this.onToken(TRUE, true);
              this.offset += 3;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === FALSE1) {
            if (buffer[i] === 0x61) {
              this.tState = FALSE2;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === FALSE2) {
            if (buffer[i] === 0x6c) {
              this.tState = FALSE3;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === FALSE3) {
            if (buffer[i] === 0x73) {
              this.tState = FALSE4;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === FALSE4) {
            if (buffer[i] === 0x65) {
              this.tState = START;
              this.onToken(FALSE, false);
              this.offset += 4;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === NULL1) {
            if (buffer[i] === 0x75) {
              this.tState = NULL2;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === NULL2) {
            if (buffer[i] === 0x6c) {
              this.tState = NULL3;
            } else {
              return this.charError(buffer, i);
            }
          } else if (this.tState === NULL3) {
            if (buffer[i] === 0x6c) {
              this.tState = START;
              this.onToken(NULL, null);
              this.offset += 3;
            } else {
              return this.charError(buffer, i);
            }
          }
        }
      };
      proto.onToken = function (token, value) {};

      proto.parseError = function (token, value) {
        this.tState = STOP;
        this.onError(
          new Error(
            'Unexpected ' +
              Parser.toknam(token) +
              (value ? '(' + JSON.stringify(value) + ')' : '') +
              ' in state ' +
              Parser.toknam(this.state),
          ),
        );
      };
      proto.push = function () {
        this.stack.push({ value: this.value, key: this.key, mode: this.mode });
      };
      proto.pop = function () {
        var value = this.value;
        var parent = this.stack.pop();
        this.value = parent.value;
        this.key = parent.key;
        this.mode = parent.mode;
        this.emit(value);
        if (!this.mode) {
          this.state = VALUE;
        }
      };
      proto.emit = function (value) {
        if (this.mode) {
          this.state = COMMA;
        }
        this.onValue(value);
      };
      proto.onValue = function (value) {};
      proto.onToken = function (token, value) {
        if (this.state === VALUE) {
          if (
            token === STRING ||
            token === NUMBER ||
            token === TRUE ||
            token === FALSE ||
            token === NULL
          ) {
            if (this.value) {
              this.value[this.key] = value;
            }
            this.emit(value);
          } else if (token === LEFT_BRACE) {
            this.push();
            if (this.value) {
              this.value = this.value[this.key] = {};
            } else {
              this.value = {};
            }
            this.key = undefined;
            this.state = KEY;
            this.mode = OBJECT;
          } else if (token === LEFT_BRACKET) {
            this.push();
            if (this.value) {
              this.value = this.value[this.key] = [];
            } else {
              this.value = [];
            }
            this.key = 0;
            this.mode = ARRAY;
            this.state = VALUE;
          } else if (token === RIGHT_BRACE) {
            if (this.mode === OBJECT) {
              this.pop();
            } else {
              return this.parseError(token, value);
            }
          } else if (token === RIGHT_BRACKET) {
            if (this.mode === ARRAY) {
              this.pop();
            } else {
              return this.parseError(token, value);
            }
          } else {
            return this.parseError(token, value);
          }
        } else if (this.state === KEY) {
          if (token === STRING) {
            this.key = value;
            this.state = COLON;
          } else if (token === RIGHT_BRACE) {
            this.pop();
          } else {
            return this.parseError(token, value);
          }
        } else if (this.state === COLON) {
          if (token === COLON) {
            this.state = VALUE;
          } else {
            return this.parseError(token, value);
          }
        } else if (this.state === COMMA) {
          if (token === COMMA) {
            if (this.mode === ARRAY) {
              this.key++;
              this.state = VALUE;
            } else if (this.mode === OBJECT) {
              this.state = KEY;
            }
          } else if (
            (token === RIGHT_BRACKET && this.mode === ARRAY) ||
            (token === RIGHT_BRACE && this.mode === OBJECT)
          ) {
            this.pop();
          } else {
            return this.parseError(token, value);
          }
        } else {
          return this.parseError(token, value);
        }
      };

      Parser.C = C;

      module.exports = Parser;
    },

    4807: (module) => {
      var toString = Object.prototype.toString;

      module.exports = function kindOf(val) {
        if (val === void 0) return 'undefined';
        if (val === null) return 'null';

        var type = typeof val;
        if (type === 'boolean') return 'boolean';
        if (type === 'string') return 'string';
        if (type === 'number') return 'number';
        if (type === 'symbol') return 'symbol';
        if (type === 'function') {
          return isGeneratorFn(val) ? 'generatorfunction' : 'function';
        }

        if (isArray(val)) return 'array';
        if (isBuffer(val)) return 'buffer';
        if (isArguments(val)) return 'arguments';
        if (isDate(val)) return 'date';
        if (isError(val)) return 'error';
        if (isRegexp(val)) return 'regexp';

        switch (ctorName(val)) {
          case 'Symbol':
            return 'symbol';
          case 'Promise':
            return 'promise';

          case 'WeakMap':
            return 'weakmap';
          case 'WeakSet':
            return 'weakset';
          case 'Map':
            return 'map';
          case 'Set':
            return 'set';

          case 'Int8Array':
            return 'int8array';
          case 'Uint8Array':
            return 'uint8array';
          case 'Uint8ClampedArray':
            return 'uint8clampedarray';

          case 'Int16Array':
            return 'int16array';
          case 'Uint16Array':
            return 'uint16array';

          case 'Int32Array':
            return 'int32array';
          case 'Uint32Array':
            return 'uint32array';
          case 'Float32Array':
            return 'float32array';
          case 'Float64Array':
            return 'float64array';
        }

        if (isGeneratorObj(val)) {
          return 'generator';
        }

        type = toString.call(val);
        switch (type) {
          case '[object Object]':
            return 'object';

          case '[object Map Iterator]':
            return 'mapiterator';
          case '[object Set Iterator]':
            return 'setiterator';
          case '[object String Iterator]':
            return 'stringiterator';
          case '[object Array Iterator]':
            return 'arrayiterator';
        }

        return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
      };

      function ctorName(val) {
        return typeof val.constructor === 'function'
          ? val.constructor.name
          : null;
      }

      function isArray(val) {
        if (Array.isArray) return Array.isArray(val);
        return val instanceof Array;
      }

      function isError(val) {
        return (
          val instanceof Error ||
          (typeof val.message === 'string' &&
            val.constructor &&
            typeof val.constructor.stackTraceLimit === 'number')
        );
      }

      function isDate(val) {
        if (val instanceof Date) return true;
        return (
          typeof val.toDateString === 'function' &&
          typeof val.getDate === 'function' &&
          typeof val.setDate === 'function'
        );
      }

      function isRegexp(val) {
        if (val instanceof RegExp) return true;
        return (
          typeof val.flags === 'string' &&
          typeof val.ignoreCase === 'boolean' &&
          typeof val.multiline === 'boolean' &&
          typeof val.global === 'boolean'
        );
      }

      function isGeneratorFn(name, val) {
        return ctorName(name) === 'GeneratorFunction';
      }

      function isGeneratorObj(val) {
        return (
          typeof val.throw === 'function' &&
          typeof val.return === 'function' &&
          typeof val.next === 'function'
        );
      }

      function isArguments(val) {
        try {
          if (
            typeof val.length === 'number' &&
            typeof val.callee === 'function'
          ) {
            return true;
          }
        } catch (err) {
          if (err.message.indexOf('callee') !== -1) {
            return true;
          }
        }
        return false;
      }

      /**
       * If you need to support Safari 5-7 (8-10 yr-old browser),
       * take a look at https://github.com/feross/is-buffer
       */

      function isBuffer(val) {
        if (val.constructor && typeof val.constructor.isBuffer === 'function') {
          return val.constructor.isBuffer(val);
        }
        return false;
      }
    },

    1544: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var set = __nccwpck_require__(8513);

      /**
       * Cache results of the first function call to ensure only calling once.
       *
       * ```js
       * var utils = require('lazy-cache')(require);
       *
       * utils('ansi-yellow', 'yellow');
       *
       * console.log(utils.yellow('this is yellow'));
       * ```
       *
       * @param  {Function} `fn` Function that will be called only once.
       * @return {Function} Function that can be called to get the cached function
       * @api public
       */

      function lazyCache(requireFn) {
        var cache = {};

        return function proxy(name, alias) {
          var key = alias;

          if (typeof key !== 'string') {
            key = camelcase(name);
          }

          function getter() {
            return cache[key] || (cache[key] = requireFn(name));
          }

          if (unlazy(process.env)) {
            getter();
          }

          set(proxy, key, getter);
          return getter;
        };
      }

      /**
       * Return true if `process.env.LAZY` is true, or travis is running.
       */

      function unlazy(env) {
        return env.UNLAZY === 'true' || env.UNLAZY === true || env.TRAVIS;
      }

      /**
       * Camelcase the the given module `name`.
       */

      function camelcase(str) {
        if (str.length === 1) {
          return str.toLowerCase();
        }
        str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
        return str.replace(/[\W_]+(\w|$)/g, function (_, ch) {
          return ch.toUpperCase();
        });
      }

      /**
       * Expose `lazyCache`
       */

      module.exports = lazyCache;
    },

    9909: function (module, __unused_webpack_exports, __nccwpck_require__) {
      /* module decorator */ module = __nccwpck_require__.nmd(module);
      //! moment.js
      //! version : 2.29.1
      //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
      //! license : MIT
      //! momentjs.com

      (function (global, factory) {
        true ? (module.exports = factory()) : 0;
      })(this, function () {
        'use strict';

        var hookCallback;

        function hooks() {
          return hookCallback.apply(null, arguments);
        }

        function setHookCallback(callback) {
          hookCallback = callback;
        }

        function isArray(input) {
          return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
          );
        }

        function isObject(input) {
          return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
          );
        }

        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }

        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }

        function isUndefined(input) {
          return input === void 0;
        }

        function isNumber(input) {
          return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
          );
        }

        function isDate(input) {
          return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
          );
        }

        function map(arr, fn) {
          var res = [],
            i;
          for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }

        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }

          if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
          }

          return a;
        }

        function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
        }

        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
          };
        }

        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }

        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function (fun) {
            var t = Object(this),
              len = t.length >>> 0,
              i;

            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }

            return false;
          };
        }

        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m),
              parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
              }),
              isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
              isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }

        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }

          return m;
        }

        var momentProperties = (hooks.momentProperties = []),
          updateInProgress = false;

        function copyConfig(to, from) {
          var i, prop, val;

          if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
          }
          if (!isUndefined(from._i)) {
            to._i = from._i;
          }
          if (!isUndefined(from._f)) {
            to._f = from._f;
          }
          if (!isUndefined(from._l)) {
            to._l = from._l;
          }
          if (!isUndefined(from._strict)) {
            to._strict = from._strict;
          }
          if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
          }
          if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
          }
          if (!isUndefined(from._offset)) {
            to._offset = from._offset;
          }
          if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
          }
          if (!isUndefined(from._locale)) {
            to._locale = from._locale;
          }

          if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from[prop];
              if (!isUndefined(val)) {
                to[prop] = val;
              }
            }
          }

          return to;
        }

        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = new Date(NaN);
          }

          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }

        function isMoment(obj) {
          return (
            obj instanceof Moment ||
            (obj != null && obj._isAMomentObject != null)
          );
        }

        function warn(msg) {
          if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
          ) {
            console.warn('Deprecation warning: ' + msg);
          }
        }

        function deprecate(msg, fn) {
          var firstTime = true;

          return extend(function () {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [],
                arg,
                i,
                key;
              for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                  arg += '\n[' + i + '] ';
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ': ' + arguments[0][key] + ', ';
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(
                msg +
                  '\nArguments: ' +
                  Array.prototype.slice.call(args).join('') +
                  '\n' +
                  new Error().stack,
              );
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }

        var deprecations = {};

        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }

        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;

        function isFunction(input) {
          return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
          );
        }

        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this['_' + i] = prop;
              }
            }
          }
          this._config = config;

          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              '|' +
              /\d{1,2}/.source,
          );
        }

        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
            prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (
              hasOwnProp(parentConfig, prop) &&
              !hasOwnProp(childConfig, prop) &&
              isObject(parentConfig[prop])
            ) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }

        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }

        var keys;

        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function (obj) {
            var i,
              res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }

        var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        };

        function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
        }

        function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
          return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
          );
        }

        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {};

        function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;
          if (typeof callback === 'string') {
            func = function () {
              return this[callback]();
            };
          }
          if (token) {
            formatTokenFunctions[token] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function () {
              return zeroFill(
                func.apply(this, arguments),
                padded[1],
                padded[2],
              );
            };
          }
          if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
              return this.localeData().ordinal(
                func.apply(this, arguments),
                token,
              );
            };
          }
        }

        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
          }
          return input.replace(/\\/g, '');
        }

        function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
            i,
            length;

          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }

          return function (mom) {
            var output = '',
              i;
            for (i = 0; i < length; i++) {
              output += isFunction(array[i])
                ? array[i].call(mom, format)
                : array[i];
            }
            return output;
          };
        }

        function formatMoment(m, format) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

          return formatFunctions[format](m);
        }

        function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
              localFormattingTokens,
              replaceLongDateFormatTokens,
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }

          return format;
        }

        var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
        };

        function longDateFormat(key) {
          var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
            return format;
          }

          this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
              if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
              ) {
                return tok.slice(1);
              }
              return tok;
            })
            .join('');

          return this._longDateFormat[key];
        }

        var defaultInvalidDate = 'Invalid date';

        function invalidDate() {
          return this._invalidDate;
        }

        var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

        function ordinal(number) {
          return this._ordinal.replace('%d', number);
        }

        var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        };

        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
        }

        function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format)
            ? format(output)
            : format.replace(/%s/i, output);
        }

        var aliases = {};

        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[
            shorthand
          ] = unit;
        }

        function normalizeUnits(units) {
          return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
        }

        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
            normalizedProp,
            prop;

          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }

          return normalizedInput;
        }

        var priorities = {};

        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }

        function getPrioritizedUnits(unitsObj) {
          var units = [],
            u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function (a, b) {
            return a.priority - b.priority;
          });
          return units;
        }

        function isLeapYear(year) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }

        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }

        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
            value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }

          return value;
        }

        function makeGetSet(unit, keepTime) {
          return function (value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }

        function get(mom, unit) {
          return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
        }

        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (
              unit === 'FullYear' &&
              isLeapYear(mom.year()) &&
              mom.month() === 1 &&
              mom.date() === 29
            ) {
              value = toInt(value);
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                daysInMonth(value, mom.month()),
              );
            } else {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
          }
        }

        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }

        function stringSet(units, value) {
          if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
              i;
            for (i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }

        var match1 = /\d/,
          match2 = /\d\d/,
          match3 = /\d{3}/,
          match4 = /\d{4}/,
          match6 = /[+-]?\d{6}/,
          match1to2 = /\d\d?/,
          match3to4 = /\d\d\d\d?/,
          match5to6 = /\d\d\d\d\d\d?/,
          match1to3 = /\d{1,3}/,
          match1to4 = /\d{1,4}/,
          match1to6 = /[+-]?\d{1,6}/,
          matchUnsigned = /\d+/,
          matchSigned = /[+-]?\d+/,
          matchOffset = /Z|[+-]\d\d:?\d\d/gi,
          matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
          matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
          matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;

        regexes = {};

        function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                return isStrict && strictRegex ? strictRegex : regex;
              };
        }

        function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
        }

        function unescapeFormat(s) {
          return regexEscape(
            s
              .replace('\\', '')
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (matched, p1, p2, p3, p4) {
                  return p1 || p2 || p3 || p4;
                },
              ),
          );
        }

        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }

        var tokens = {};

        function addParseToken(token, callback) {
          var i,
            func = callback;
          if (typeof token === 'string') {
            token = [token];
          }
          if (isNumber(callback)) {
            func = function (input, array) {
              array[callback] = toInt(input);
            };
          }
          for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
          }
        }

        function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
          });
        }

        function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
          }
        }

        var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

        function mod(n, x) {
          return ((n % x) + x) % x;
        }

        var indexOf;

        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function (o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }

        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1
            ? isLeapYear(year)
              ? 29
              : 28
            : 31 - ((modMonth % 7) % 2);
        }

        addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
        });

        addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
        });

        addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
        });

        addUnitAlias('month', 'M');

        addUnitPriority('month', 8);

        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
        });

        addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
        });

        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict);

          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });

        var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
          defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_',
          ),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

        function localeMonths(m, format) {
          if (!m) {
            return isArray(this._months)
              ? this._months
              : this._months['standalone'];
          }
          return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
              ][m.month()];
        }

        function localeMonthsShort(m, format) {
          if (!m) {
            return isArray(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort['standalone'];
          }
          return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
        }

        function handleStrictParse(monthName, format, strict) {
          var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2000, i]);
              this._shortMonthsParse[i] = this.monthsShort(
                mom,
                '',
              ).toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(
                mom,
                '',
              ).toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }

          for (i = 0; i < 12; i++) {
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i',
              );
              this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i',
              );
            }
            if (!strict && !this._monthsParse[i]) {
              regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }

            if (
              strict &&
              format === 'MMMM' &&
              this._longMonthsParse[i].test(monthName)
            ) {
              return i;
            } else if (
              strict &&
              format === 'MMM' &&
              this._shortMonthsParse[i].test(monthName)
            ) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }

        function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
            return mom;
          }

          if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);

              if (!isNumber(value)) {
                return mom;
              }
            }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](
            value,
            dayOfMonth,
          );
          return mom;
        }

        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, 'Month');
          }
        }

        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }

        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex;
          }
        }

        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
              ? this._monthsStrictRegex
              : this._monthsRegex;
          }
        }

        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
          }

          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp(
            '^(' + mixedPieces.join('|') + ')',
            'i',
          );
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i',
          );
          this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i',
          );
        }

        addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : '+' + y;
        });

        addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
        });

        addFormatToken(0, ['YYYY', 4], 0, 'year');
        addFormatToken(0, ['YYYYY', 5], 0, 'year');
        addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

        addUnitAlias('year', 'y');

        addUnitPriority('year', 1);

        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);

        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array) {
          array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
        });

        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }

        hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
        };

        var getSetYear = makeGetSet('FullYear', true);

        function getIsLeapYear() {
          return isLeapYear(this.year());
        }

        function createDate(y, m, d, h, M, s, ms) {
          var date;

          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
        }

        function createUTCDate(y) {
          var date, args;

          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);

            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
        }

        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy,
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

          return -fwdlw + fwd - 1;
        }

        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }

          return {
            year: resYear,
            dayOfYear: resDayOfYear,
          };
        }

        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }

          return {
            week: resWeek,
            year: resYear,
          };
        }

        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }

        addFormatToken('w', ['ww', 2], 'wo', 'week');
        addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W');

        addUnitPriority('week', 5);
        addUnitPriority('isoWeek', 5);

        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);

        addWeekParseToken(
          ['w', 'ww', 'W', 'WW'],
          function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
          },
        );

        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }

        var defaultLocaleWeek = {
          dow: 0,
          doy: 6,
        };

        function localeFirstDayOfWeek() {
          return this._week.dow;
        }

        function localeFirstDayOfYear() {
          return this._week.doy;
        }

        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
        }

        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
        }

        addFormatToken('d', 0, 'do', 'day');

        addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
        });

        addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
        });

        addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
        });

        addFormatToken('e', 0, 0, 'weekday');
        addFormatToken('E', 0, 0, 'isoWeekday');

        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E');

        addUnitPriority('day', 11);
        addUnitPriority('weekday', 11);
        addUnitPriority('isoWeekday', 11);

        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
        });

        addWeekParseToken(
          ['dd', 'ddd', 'dddd'],
          function (input, week, config, token) {
            var weekday = config._locale.weekdaysParse(
              input,
              token,
              config._strict,
            );

            if (weekday != null) {
              week.d = weekday;
            } else {
              getParsingFlags(config).invalidWeekday = input;
            }
          },
        );

        addWeekParseToken(
          ['d', 'e', 'E'],
          function (input, week, config, token) {
            week[token] = toInt(input);
          },
        );

        function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
            return input;
          }

          if (!isNaN(input)) {
            return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);
          if (typeof input === 'number') {
            return input;
          }

          return null;
        }

        function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }

        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }

        var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_',
          ),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

        function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
              ];
          return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
        }

        function localeWeekdaysShort(m) {
          return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
        }

        function localeWeekdaysMin(m) {
          return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
        }

        function handleStrictParse$1(weekdayName, format, strict) {
          var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
              mom = createUTC([2000, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                '',
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                '',
              ).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(
                mom,
                '',
              ).toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i',
              );
              this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i',
              );
              this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i',
              );
            }
            if (!this._weekdaysParse[i]) {
              regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }

            if (
              strict &&
              format === 'dddd' &&
              this._fullWeekdaysParse[i].test(weekdayName)
            ) {
              return i;
            } else if (
              strict &&
              format === 'ddd' &&
              this._shortWeekdaysParse[i].test(weekdayName)
            ) {
              return i;
            } else if (
              strict &&
              format === 'dd' &&
              this._minWeekdaysParse[i].test(weekdayName)
            ) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }

        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
          } else {
            return day;
          }
        }

        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
        }

        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }

        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex;
          }
        }

        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex;
          }
        }

        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex;
          }
        }

        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }

          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          this._weekdaysRegex = new RegExp(
            '^(' + mixedPieces.join('|') + ')',
            'i',
          );
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;

          this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i',
          );
          this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i',
          );
          this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i',
          );
        }

        function hFormat() {
          return this.hours() % 12 || 12;
        }

        function kFormat() {
          return this.hours() || 24;
        }

        addFormatToken('H', ['HH', 2], 0, 'hour');
        addFormatToken('h', ['hh', 2], 0, hFormat);
        addFormatToken('k', ['kk', 2], 0, kFormat);

        addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });

        addFormatToken('hmmss', 0, 0, function () {
          return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
          );
        });

        addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
        });

        addFormatToken('Hmmss', 0, 0, function () {
          return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
          );
        });

        function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
              this.hours(),
              this.minutes(),
              lowercase,
            );
          });
        }

        meridiem('a', true);
        meridiem('A', false);

        addUnitAlias('hour', 'h');

        addUnitPriority('hour', 13);

        function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
        }

        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);

        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);

        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
            pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
            pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });

        function localeIsPM(input) {
          return (input + '').toLowerCase().charAt(0) === 'p';
        }

        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          getSetHour = makeGetSet('Hours', true);

        function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'pm' : 'PM';
          } else {
            return isLower ? 'am' : 'AM';
          }
        }

        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,

          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,

          week: defaultLocaleWeek,

          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,

          meridiemParse: defaultLocaleMeridiemParse,
        };

        var locales = {},
          localeFamilies = {},
          globalLocale;

        function commonPrefix(arr1, arr2) {
          var i,
            minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }

        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
        }

        function chooseLocale(names) {
          var i = 0,
            j,
            next,
            locale,
            split;

          while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));
              if (locale) {
                return locale;
              }
              if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
              ) {
                //the next array item is better than a shallower substring of this one
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }

        function loadLocale(name) {
          var oldLocale = null,
            aliasedRequire;

          if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports
          ) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = require;
              aliasedRequire('./locale/' + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }

        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }

            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                  'Locale ' + key + ' not found. Did you forget to load it?',
                );
              }
            }
          }

          return globalLocale._abbr;
        }

        function defineLocale(name, config) {
          if (config !== null) {
            var locale,
              parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                  'an existing locale. moment.defineLocale(localeName, ' +
                  'config) should only be used for creating a new locale ' +
                  'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
              );
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                  parentConfig = locale._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config,
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
              });
            }

            getSetGlobalLocale(name);

            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }

        function updateLocale(name, config) {
          if (config != null) {
            var locale,
              tmpLocale,
              parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale = new Locale(config);
              locale.parentLocale = locales[name];
              locales[name] = locale;
            }

            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }

        function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }

          if (!key) {
            return globalLocale;
          }

          if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
              return locale;
            }
            key = [key];
          }

          return chooseLocale(key);
        }

        function listLocales() {
          return keys(locales);
        }

        function checkOverflow(m) {
          var overflow,
            a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
            overflow =
              a[MONTH] < 0 || a[MONTH] > 11
                ? MONTH
                : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                ? DATE
                : a[HOUR] < 0 ||
                  a[HOUR] > 24 ||
                  (a[HOUR] === 24 &&
                    (a[MINUTE] !== 0 ||
                      a[SECOND] !== 0 ||
                      a[MILLISECOND] !== 0))
                ? HOUR
                : a[MINUTE] < 0 || a[MINUTE] > 59
                ? MINUTE
                : a[SECOND] < 0 || a[SECOND] > 59
                ? SECOND
                : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                ? MILLISECOND
                : -1;

            if (
              getParsingFlags(m)._overflowDayOfYear &&
              (overflow < YEAR || overflow > DATE)
            ) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
          }

          return m;
        }

        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
          ],
          isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
          ],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
          };

        function configFromISO(config) {
          var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

          if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || ' ') + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }

        function extractFromRFC2822Strings(
          yearStr,
          monthStr,
          dayStr,
          hourStr,
          minuteStr,
          secondStr,
        ) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
          ];

          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }

          return result;
        }

        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2000 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }

        function preprocessRFC2822(s) {
          return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
        }

        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(
                weekdayStr,
              ),
              weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2],
              ).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }

        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10),
              m = hm % 100,
              h = (hm - m) / 100;
            return h * 60 + m;
          }
        }

        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(
              match[4],
              match[3],
              match[2],
              match[5],
              match[6],
              match[7],
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }

        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }

          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }

          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }

          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }

        hooks.createFromInputFallback = deprecate(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
          },
        );

        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }

        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate(),
            ];
          }
          return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate(),
          ];
        }

        function configFromArray(config) {
          var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

          if (config._d) {
            return;
          }

          currentDate = currentDateArray(config);

          //compute day of the year from weeks and weekdays
          if (
            config._w &&
            config._a[DATE] == null &&
            config._a[MONTH] == null
          ) {
            dayOfYearFromWeekInfo(config);
          }

          //if the day of the year is set, figure out what it is
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
              config._dayOfYear > daysInYear(yearToUse) ||
              config._dayOfYear === 0
            ) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }

          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }

          for (; i < 7; i++) {
            config._a[i] = input[i] =
              config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
          }

          if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
          ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input,
          );
          expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
            config._a[HOUR] = 24;
          }

          if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
          ) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }

        function dayOfYearFromWeekInfo(config) {
          var w,
            weekYear,
            week,
            weekday,
            dow,
            doy,
            temp,
            weekdayOverflow,
            curWeek;

          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            weekYear = defaults(
              w.GG,
              config._a[YEAR],
              weekOfYear(createLocal(), 1, 4).year,
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }

        hooks.ISO_8601 = function () {};

        hooks.RFC_2822 = function () {};

        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;

          var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

          tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) ||
            [];

          for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
              [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length,
              );
              totalParsedInputLength += parsedInput.length;
            }

            if (formatTokenFunctions[token]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token);
              }
              addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token);
            }
          }

          getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }

          if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
          ) {
            getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;

          config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem,
          );

          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(
              era,
              config._a[YEAR],
            );
          }

          configFromArray(config);
          checkOverflow(config);
        }

        function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
            return hour;
          }
          if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }

        function configFromStringAndArray(config) {
          var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

          if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }

          for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
              validFormatFound = true;
            }

            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore +=
              getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
              if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
              ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }

          extend(config, bestMoment || tempConfig);
        }

        function configFromObject(config) {
          if (config._d) {
            return;
          }

          var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
          config._a = map(
            [
              i.year,
              i.month,
              dayOrDate,
              i.hour,
              i.minute,
              i.second,
              i.millisecond,
            ],
            function (obj) {
              return obj && parseInt(obj, 10);
            },
          );

          configFromArray(config);
        }

        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, 'd');
            res._nextDay = undefined;
          }

          return res;
        }

        function prepareConfig(config) {
          var input = config._i,
            format = config._f;

          config._locale = config._locale || getLocale(config._l);

          if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
          }

          if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format)) {
            configFromStringAndArray(config);
          } else if (format) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }

          if (!isValid(config)) {
            config._d = null;
          }

          return config;
        }

        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }

        function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (format === true || format === false) {
            strict = format;
            format = undefined;
          }

          if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
          }

          if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
          ) {
            input = undefined;
          }

          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;

          return createFromConfig(c);
        }

        function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
        }

        var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
              var other = createLocal.apply(null, arguments);
              if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
              } else {
                return createInvalid();
              }
            },
          ),
          prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
              var other = createLocal.apply(null, arguments);
              if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
              } else {
                return createInvalid();
              }
            },
          );

        //

        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }

        function min() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isBefore', args);
        }

        function max() {
          var args = [].slice.call(arguments, 0);

          return pickBy('isAfter', args);
        }

        var now = function () {
          return Date.now ? Date.now() : +new Date();
        };

        var ordering = [
          'year',
          'quarter',
          'month',
          'week',
          'day',
          'hour',
          'minute',
          'second',
          'millisecond',
        ];

        function isDurationValid(m) {
          var key,
            unitHasDecimal = false,
            i;
          for (key in m) {
            if (
              hasOwnProp(m, key) &&
              !(
                indexOf.call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
              )
            ) {
              return false;
            }
          }

          for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }

          return true;
        }

        function isValid$1() {
          return this._isValid;
        }

        function createInvalid$1() {
          return createDuration(NaN);
        }

        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

          this._isValid = isDurationValid(normalizedInput);

          this._milliseconds =
            +milliseconds +
            seconds * 1e3 +
            minutes * 6e4 +
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978

          this._days = +days + weeks * 7;

          this._months = +months + quarters * 3 + years * 12;

          this._data = {};

          this._locale = getLocale();

          this._bubble();
        }

        function isDuration(obj) {
          return obj instanceof Duration;
        }

        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }

        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
          for (i = 0; i < len; i++) {
            if (
              (dontConvert && array1[i] !== array2[i]) ||
              (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }

        function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
              sign = '+';
            if (offset < 0) {
              offset = -offset;
              sign = '-';
            }
            return (
              sign +
              zeroFill(~~(offset / 60), 2) +
              separator +
              zeroFill(~~offset % 60, 2)
            );
          });
        }

        offset('Z', ':');
        offset('ZZ', '');

        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });

        var chunkOffset = /([\+\-]|\d\d)/gi;

        function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

          if (matches === null) {
            return null;
          }

          chunk = matches[matches.length - 1] || [];
          parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          minutes = +(parts[1] * 60) + toInt(parts[2]);

          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
        }

        function cloneWithOffset(input, model) {
          var res, diff;
          if (model._isUTC) {
            res = model.clone();
            diff =
              (isMoment(input) || isDate(input)
                ? input.valueOf()
                : createLocal(input).valueOf()) - res.valueOf();

            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }

        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }

        hooks.updateOffset = function () {};

        //

        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
            localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === 'string') {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, 'm');
            }
            if (offset !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(
                  this,
                  createDuration(input - offset, 'm'),
                  1,
                  false,
                );
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset : getDateOffset(this);
          }
        }

        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== 'string') {
              input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
          } else {
            return -this.utcOffset();
          }
        }

        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }

        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
              this.subtract(getDateOffset(this), 'm');
            }
          }
          return this;
        }

        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }

        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;

          return (this.utcOffset() - input) % 60 === 0;
        }

        function isDaylightSavingTime() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }

        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }

          var c = {},
            other;

          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
              this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }

          return this._isDSTShifted;
        }

        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }

        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }

        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }

        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function createDuration(input, key) {
          var duration = input,
            match = null,
            sign,
            ret,
            diffRes;

          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months,
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign,
              h: toInt(match[HOUR]) * sign,
              m: toInt(match[MINUTE]) * sign,
              s: toInt(match[SECOND]) * sign,
              ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign,
            };
          } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign),
              M: parseIso(match[3], sign),
              w: parseIso(match[4], sign),
              d: parseIso(match[5], sign),
              h: parseIso(match[6], sign),
              m: parseIso(match[7], sign),
              s: parseIso(match[8], sign),
            };
          } else if (duration == null) {
            duration = {};
          } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
          ) {
            diffRes = momentsDifference(
              createLocal(duration.from),
              createLocal(duration.to),
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
          }

          if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
          }

          return ret;
        }

        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;

        function parseIso(inp, sign) {
          var res = inp && parseFloat(inp.replace(',', '.'));

          return (isNaN(res) ? 0 : res) * sign;
        }

        function positiveMomentsDifference(base, other) {
          var res = {};

          res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');

          return res;
        }

        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }

          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }

          return res;
        }

        function createAdder(direction, name) {
          return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(
                name,
                'moment().' +
                  name +
                  '(period, number) is deprecated. Please use moment().' +
                  name +
                  '(number, period). ' +
                  'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
              );
              tmp = val;
              val = period;
              period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }

        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

          if (!mom.isValid()) {
            return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
          }
          if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }
          if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days || months);
          }
        }

        var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

        function isString(input) {
          return typeof input === 'string' || input instanceof String;
        }

        function isMomentInput(input) {
          return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
          );
        }

        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
              'years',
              'year',
              'y',
              'months',
              'month',
              'M',
              'days',
              'day',
              'd',
              'dates',
              'date',
              'D',
              'hours',
              'hour',
              'h',
              'minutes',
              'minute',
              'm',
              'seconds',
              'second',
              's',
              'milliseconds',
              'millisecond',
              'ms',
            ],
            i,
            property;

          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
        }

        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input),
            dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest =
              input.filter(function (item) {
                return !isNumber(item) && isString(input);
              }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }

        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
              'sameDay',
              'nextDay',
              'lastDay',
              'nextWeek',
              'lastWeek',
              'sameElse',
            ],
            i,
            property;

          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
        }

        function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
        }

        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = undefined;
              formats = undefined;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = undefined;
            }
          }

          var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
              formats &&
              (isFunction(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

          return this.format(
            output ||
              this.localeData().calendar(format, this, createLocal(now)),
          );
        }

        function clone() {
          return new Moment(this);
        }

        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }

        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }

        function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || '()';
          return (
            (inclusivity[0] === '('
              ? this.isAfter(localFrom, units)
              : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
              ? this.isBefore(localTo, units)
              : !this.isAfter(localTo, units))
          );
        }

        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || 'millisecond';
          if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return (
              this.clone().startOf(units).valueOf() <= inputMs &&
              inputMs <= this.clone().endOf(units).valueOf()
            );
          }
        }

        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }

        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }

        function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
            return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
            return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

          units = normalizeUnits(units);

          switch (units) {
            case 'year':
              output = monthDiff(this, that) / 12;
              break;
            case 'month':
              output = monthDiff(this, that);
              break;
            case 'quarter':
              output = monthDiff(this, that) / 3;
              break;
            case 'second':
              output = (this - that) / 1e3;
              break;
            case 'minute':
              output = (this - that) / 6e4;
              break;
            case 'hour':
              output = (this - that) / 36e5;
              break;
            case 'day':
              output = (this - that - zoneDelta) / 864e5;
              break;
            case 'week':
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }

          return asFloat ? output : absFloor(output);
        }

        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }

          var wholeMonthDiff =
              (b.year() - a.year()) * 12 + (b.month() - a.month()),
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');

            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');

            adjust = (b - anchor) / (anchor2 - anchor);
          }

          //check for negative zero, return zero if negative zero
          return -(wholeMonthDiff + adjust) || 0;
        }

        hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
        hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

        function toString() {
          return this.clone()
            .locale('en')
            .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }

        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
              m,
              utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ',
            );
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', formatMoment(m, 'Z'));
            }
          }
          return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
          );
        }

        /**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */
        function inspect() {
          if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
          }
          var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
          }
          prefix = '[' + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          datetime = '-MM-DD[T]HH:mm:ss.SSS';
          suffix = zone + '[")]';

          return this.format(prefix + year + datetime + suffix);
        }

        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc()
              ? hooks.defaultFormatUtc
              : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }

        function from(time, withoutSuffix) {
          if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
            return createDuration({ to: this, from: time })
              .locale(this.locale())
              .humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }

        function to(time, withoutSuffix) {
          if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
          ) {
            return createDuration({ from: this, to: time })
              .locale(this.locale())
              .humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }

        function locale(key) {
          var newLocaleData;

          if (key === undefined) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }

        var lang = deprecate(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (key) {
            if (key === undefined) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          },
        );

        function localeData() {
          return this._locale;
        }

        var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

        function mod$1(dividend, divisor) {
          return ((dividend % divisor) + divisor) % divisor;
        }

        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }

        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }

        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (
            units === undefined ||
            units === 'millisecond' ||
            !this.isValid()
          ) {
            return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year(), 0, 1);
              break;
            case 'quarter':
              time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1,
              );
              break;
            case 'month':
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case 'week':
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday(),
              );
              break;
            case 'isoWeek':
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1),
              );
              break;
            case 'day':
            case 'date':
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case 'hour':
              time = this._d.valueOf();
              time -= mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR,
              );
              break;
            case 'minute':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case 'second':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }

        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (
            units === undefined ||
            units === 'millisecond' ||
            !this.isValid()
          ) {
            return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case 'quarter':
              time =
                startOfDate(
                  this.year(),
                  this.month() - (this.month() % 3) + 3,
                  1,
                ) - 1;
              break;
            case 'month':
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case 'week':
              time =
                startOfDate(
                  this.year(),
                  this.month(),
                  this.date() - this.weekday() + 7,
                ) - 1;
              break;
            case 'isoWeek':
              time =
                startOfDate(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7,
                ) - 1;
              break;
            case 'day':
            case 'date':
              time =
                startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case 'hour':
              time = this._d.valueOf();
              time +=
                MS_PER_HOUR -
                mod$1(
                  time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                  MS_PER_HOUR,
                ) -
                1;
              break;
            case 'minute':
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case 'second':
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }

          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }

        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
        }

        function unix() {
          return Math.floor(this.valueOf() / 1000);
        }

        function toDate() {
          return new Date(this.valueOf());
        }

        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
          ];
        }

        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
          };
        }

        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }

        function isValid$2() {
          return isValid(this);
        }

        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }

        function invalidAt() {
          return getParsingFlags(this).overflow;
        }

        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }

        addFormatToken('N', 0, 0, 'eraAbbr');
        addFormatToken('NN', 0, 0, 'eraAbbr');
        addFormatToken('NNN', 0, 0, 'eraAbbr');
        addFormatToken('NNNN', 0, 0, 'eraName');
        addFormatToken('NNNNN', 0, 0, 'eraNarrow');

        addFormatToken('y', ['y', 1], 'yo', 'eraYear');
        addFormatToken('y', ['yy', 2], 0, 'eraYear');
        addFormatToken('y', ['yyy', 3], 0, 'eraYear');
        addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

        addRegexToken('N', matchEraAbbr);
        addRegexToken('NN', matchEraAbbr);
        addRegexToken('NNN', matchEraAbbr);
        addRegexToken('NNNN', matchEraName);
        addRegexToken('NNNNN', matchEraNarrow);

        addParseToken(
          ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
          function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
              getParsingFlags(config).era = era;
            } else {
              getParsingFlags(config).invalidEra = input;
            }
          },
        );

        addRegexToken('y', matchUnsigned);
        addRegexToken('yy', matchUnsigned);
        addRegexToken('yyy', matchUnsigned);
        addRegexToken('yyyy', matchUnsigned);
        addRegexToken('yo', matchEraYearOrdinal);

        addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
        addParseToken(['yo'], function (input, array, config, token) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }

          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });

        function localeEras(m, format) {
          var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case 'string':
                date = hooks(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
            }

            switch (typeof eras[i].until) {
              case 'undefined':
                eras[i].until = +Infinity;
                break;
              case 'string':
                date = hooks(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }

        function localeErasParse(eraName, format, strict) {
          var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
          eraName = eraName.toUpperCase();

          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
              switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;

                case 'NNNN':
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;

                case 'NNNNN':
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }

        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? +1 : -1;
          if (year === undefined) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }

        function getEraName() {
          var i,
            l,
            val,
            eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }

          return '';
        }

        function getEraNarrow() {
          var i,
            l,
            val,
            eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }

          return '';
        }

        function getEraAbbr() {
          var i,
            l,
            val,
            eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }

          return '';
        }

        function getEraYear() {
          var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            val = this.clone().startOf('day').valueOf();

            if (
              (eras[i].since <= val && val <= eras[i].until) ||
              (eras[i].until <= val && val <= eras[i].since)
            ) {
              return (
                (this.year() - hooks(eras[i].since).year()) * dir +
                eras[i].offset
              );
            }
          }

          return this.year();
        }

        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }

        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }

        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }

        function matchEraAbbr(isStrict, locale) {
          return locale.erasAbbrRegex(isStrict);
        }

        function matchEraName(isStrict, locale) {
          return locale.erasNameRegex(isStrict);
        }

        function matchEraNarrow(isStrict, locale) {
          return locale.erasNarrowRegex(isStrict);
        }

        function matchEraYearOrdinal(isStrict, locale) {
          return locale._eraYearOrdinalRegex || matchUnsigned;
        }

        function computeErasParse() {
          var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }

          this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._erasNameRegex = new RegExp(
            '^(' + namePieces.join('|') + ')',
            'i',
          );
          this._erasAbbrRegex = new RegExp(
            '^(' + abbrPieces.join('|') + ')',
            'i',
          );
          this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i',
          );
        }

        addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
        });

        addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
        });

        function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
        }

        addWeekYearFormatToken('gggg', 'weekYear');
        addWeekYearFormatToken('ggggg', 'weekYear');
        addWeekYearFormatToken('GGGG', 'isoWeekYear');
        addWeekYearFormatToken('GGGGG', 'isoWeekYear');

        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG');

        addUnitPriority('weekYear', 1);
        addUnitPriority('isoWeekYear', 1);

        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);

        addWeekParseToken(
          ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
          function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
          },
        );

        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
        });

        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy,
          );
        }

        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4,
          );
        }

        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }

        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }

        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }

        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }

        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }

        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(
              weekYear,
              week,
              weekday,
              dow,
              doy,
            ),
            date = createUTCDate(
              dayOfYearData.year,
              0,
              dayOfYearData.dayOfYear,
            );

          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }

        addFormatToken('Q', 0, 'Qo', 'quarter');

        addUnitAlias('quarter', 'Q');

        addUnitPriority('quarter', 7);

        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });

        function getSetQuarter(input) {
          return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
        }

        addFormatToken('D', ['DD', 2], 'Do', 'date');

        addUnitAlias('date', 'D');

        addUnitPriority('date', 9);

        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
          return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
        });

        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });

        var getSetDayOfMonth = makeGetSet('Date', true);

        addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

        addUnitAlias('dayOfYear', 'DDD');

        addUnitPriority('dayOfYear', 4);

        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
        });

        function getSetDayOfYear(input) {
          var dayOfYear =
            Math.round(
              (this.clone().startOf('day') - this.clone().startOf('year')) /
                864e5,
            ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
        }

        addFormatToken('m', ['mm', 2], 0, 'minute');

        addUnitAlias('minute', 'm');

        addUnitPriority('minute', 14);

        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE);

        var getSetMinute = makeGetSet('Minutes', false);

        addFormatToken('s', ['ss', 2], 0, 'second');

        addUnitAlias('second', 's');

        addUnitPriority('second', 15);

        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND);

        var getSetSecond = makeGetSet('Seconds', false);

        addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
        });

        addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
        });

        addFormatToken(0, ['SSS', 3], 0, 'millisecond');
        addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
        });
        addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
        });
        addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
        });
        addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
        });

        addUnitAlias('millisecond', 'ms');

        addUnitPriority('millisecond', 16);

        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);

        var token, getSetMillisecond;
        for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
        }

        function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
        }

        for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
        }

        getSetMillisecond = makeGetSet('Milliseconds', false);

        addFormatToken('z', 0, 0, 'zoneAbbr');
        addFormatToken('zz', 0, 0, 'zoneName');

        function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
        }

        function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        }

        var proto = Moment.prototype;

        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== 'undefined' && Symbol.for != null) {
          proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
          };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate(
          'dates accessor is deprecated. Use date instead.',
          getSetDayOfMonth,
        );
        proto.months = deprecate(
          'months accessor is deprecated. Use month instead',
          getSetMonth,
        );
        proto.years = deprecate(
          'years accessor is deprecated. Use year instead',
          getSetYear,
        );
        proto.zone = deprecate(
          'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
          getSetZone,
        );
        proto.isDSTShifted = deprecate(
          'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
          isDaylightSavingTimeShifted,
        );

        function createUnix(input) {
          return createLocal(input * 1000);
        }

        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }

        function preParsePostFormat(string) {
          return string;
        }

        var proto$1 = Locale.prototype;

        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;

        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;

        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;

        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;

        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;

        function get$1(format, index, field, setter) {
          var locale = getLocale(),
            utc = createUTC().set(setter, index);
          return locale[field](utc, format);
        }

        function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';

          if (index != null) {
            return get$1(format, index, field, 'month');
          }

          var i,
            out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
          }
          return out;
        }

        function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          }

          var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

          if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
          }

          for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }
          return out;
        }

        function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
        }

        function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
        }

        function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
        }

        function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
        }

        function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
        }

        getSetGlobalLocale('en', {
          eras: [
            {
              since: '0001-01-01',
              until: +Infinity,
              offset: 1,
              name: 'Anno Domini',
              narrow: 'AD',
              abbr: 'AD',
            },
            {
              since: '0000-12-31',
              until: -Infinity,
              offset: 1,
              name: 'Before Christ',
              narrow: 'BC',
              abbr: 'BC',
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (number) {
            var b = number % 10,
              output =
                toInt((number % 100) / 10) === 1
                  ? 'th'
                  : b === 1
                  ? 'st'
                  : b === 2
                  ? 'nd'
                  : b === 3
                  ? 'rd'
                  : 'th';
            return number + output;
          },
        });

        hooks.lang = deprecate(
          'moment.lang is deprecated. Use moment.locale instead.',
          getSetGlobalLocale,
        );
        hooks.langData = deprecate(
          'moment.langData is deprecated. Use moment.localeData instead.',
          getLocale,
        );

        var mathAbs = Math.abs;

        function abs() {
          var data = this._data;

          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);

          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);

          return this;
        }

        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);

          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;

          return duration._bubble();
        }

        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }

        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }

        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }

        function bubble() {
          var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;
          if (
            !(
              (milliseconds >= 0 && days >= 0 && months >= 0) ||
              (milliseconds <= 0 && days <= 0 && months <= 0)
            )
          ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
          }

          data.milliseconds = milliseconds % 1000;

          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;

          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;

          hours = absFloor(minutes / 60);
          data.hours = hours % 24;

          days += absFloor(hours / 24);

          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays));

          years = absFloor(months / 12);
          months %= 12;

          data.days = days;
          data.months = months;
          data.years = years;

          return this;
        }

        function daysToMonths(days) {
          return (days * 4800) / 146097;
        }

        function monthsToDays(months) {
          return (months * 146097) / 4800;
        }

        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days,
            months,
            milliseconds = this._milliseconds;

          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
              case 'month':
                return months;
              case 'quarter':
                return months / 3;
              case 'year':
                return months / 12;
            }
          } else {
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case 'week':
                return days / 7 + milliseconds / 6048e5;
              case 'day':
                return days + milliseconds / 864e5;
              case 'hour':
                return days * 24 + milliseconds / 36e5;
              case 'minute':
                return days * 1440 + milliseconds / 6e4;
              case 'second':
                return days * 86400 + milliseconds / 1000;

              case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
              default:
                throw new Error('Unknown unit ' + units);
            }
          }
        }

        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
          );
        }

        function makeAs(alias) {
          return function () {
            return this.as(alias);
          };
        }

        var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

        function clone$1() {
          return createDuration(this);
        }

        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
        }

        function makeGetter(name) {
          return function () {
            return this.isValid() ? this._data[name] : NaN;
          };
        }

        var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

        function weeks() {
          return absFloor(this.days() / 7);
        }

        var round = Math.round,
          thresholds = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11,
          };

        function substituteTimeAgo(
          string,
          number,
          withoutSuffix,
          isFuture,
          locale,
        ) {
          return locale.relativeTime(
            number || 1,
            !!withoutSuffix,
            string,
            isFuture,
          );
        }

        function relativeTime$1(
          posNegDuration,
          withoutSuffix,
          thresholds,
          locale,
        ) {
          var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
              (seconds <= thresholds.ss && ['s', seconds]) ||
              (seconds < thresholds.s && ['ss', seconds]) ||
              (minutes <= 1 && ['m']) ||
              (minutes < thresholds.m && ['mm', minutes]) ||
              (hours <= 1 && ['h']) ||
              (hours < thresholds.h && ['hh', hours]) ||
              (days <= 1 && ['d']) ||
              (days < thresholds.d && ['dd', days]);

          if (thresholds.w != null) {
            a =
              a ||
              (weeks <= 1 && ['w']) ||
              (weeks < thresholds.w && ['ww', weeks]);
          }
          a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
        }

        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
            return round;
          }
          if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
          }
          return false;
        }

        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
            return false;
          }
          if (limit === undefined) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === 's') {
            thresholds.ss = limit - 1;
          }
          return true;
        }

        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var withSuffix = false,
            th = thresholds,
            locale,
            output;

          if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }

          locale = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale);

          if (withSuffix) {
            output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
        }

        var abs$1 = Math.abs;

        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }

        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

          if (!total) {
            return 'P0D';
          }

          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60;

          years = absFloor(months / 12);
          months %= 12;

          s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

          totalSign = total < 0 ? '-' : '';
          ymSign = sign(this._months) !== sign(total) ? '-' : '';
          daysSign = sign(this._days) !== sign(total) ? '-' : '';
          hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

          return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
          );
        }

        var proto$2 = Duration.prototype;

        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;

        proto$2.toIsoString = deprecate(
          'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
          toISOString$1,
        );
        proto$2.lang = lang;

        addFormatToken('X', 0, 0, 'unix');
        addFormatToken('x', 0, 0, 'valueOf');

        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input) * 1000);
        });
        addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
        });

        //! moment.js

        hooks.version = '2.29.1';

        setHookCallback(createLocal);

        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;

        hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
          DATE: 'YYYY-MM-DD',
          TIME: 'HH:mm',
          TIME_SECONDS: 'HH:mm:ss',
          TIME_MS: 'HH:mm:ss.SSS',
          WEEK: 'GGGG-[W]WW',
          MONTH: 'YYYY-MM',
        };

        return hooks;
      });
    },

    3262: (module) => {
      /**
       * Helpers.
       */

      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;

      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val;
        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(val),
        );
      };

      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str,
        );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;
          case 'weeks':
          case 'week':
          case 'w':
            return n * w;
          case 'days':
          case 'day':
          case 'd':
            return n * d;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
          default:
            return undefined;
        }
      }

      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + 'd';
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + 'h';
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + 'm';
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + 's';
        }
        return ms + 'ms';
      }

      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, 'day');
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, 'hour');
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, 'minute');
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, 'second');
        }
        return ms + ' ms';
      }

      /**
       * Pluralization helper.
       */

      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
      }
    },

    4132: (module, exports, __nccwpck_require__) => {
      'use strict';

      Object.defineProperty(exports, '__esModule', { value: true });

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex
          ? ex['default']
          : ex;
      }

      var Stream = _interopDefault(__nccwpck_require__(2413));
      var http = _interopDefault(__nccwpck_require__(8605));
      var Url = _interopDefault(__nccwpck_require__(8835));
      var https = _interopDefault(__nccwpck_require__(7211));
      var zlib = _interopDefault(__nccwpck_require__(8761));

      const Readable = Stream.Readable;

      const BUFFER = Symbol('buffer');
      const TYPE = Symbol('type');

      class Blob {
        constructor() {
          this[TYPE] = '';

          const blobParts = arguments[0];
          const options = arguments[1];

          const buffers = [];
          let size = 0;

          if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for (let i = 0; i < length; i++) {
              const element = a[i];
              let buffer;
              if (element instanceof Buffer) {
                buffer = element;
              } else if (ArrayBuffer.isView(element)) {
                buffer = Buffer.from(
                  element.buffer,
                  element.byteOffset,
                  element.byteLength,
                );
              } else if (element instanceof ArrayBuffer) {
                buffer = Buffer.from(element);
              } else if (element instanceof Blob) {
                buffer = element[BUFFER];
              } else {
                buffer = Buffer.from(
                  typeof element === 'string' ? element : String(element),
                );
              }
              size += buffer.length;
              buffers.push(buffer);
            }
          }

          this[BUFFER] = Buffer.concat(buffers);

          let type =
            options &&
            options.type !== undefined &&
            String(options.type).toLowerCase();
          if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
          }
        }
        get size() {
          return this[BUFFER].length;
        }
        get type() {
          return this[TYPE];
        }
        text() {
          return Promise.resolve(this[BUFFER].toString());
        }
        arrayBuffer() {
          const buf = this[BUFFER];
          const ab = buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength,
          );
          return Promise.resolve(ab);
        }
        stream() {
          const readable = new Readable();
          readable._read = function () {};
          readable.push(this[BUFFER]);
          readable.push(null);
          return readable;
        }
        toString() {
          return '[object Blob]';
        }
        slice() {
          const size = this.size;

          const start = arguments[0];
          const end = arguments[1];
          let relativeStart, relativeEnd;
          if (start === undefined) {
            relativeStart = 0;
          } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
          } else {
            relativeStart = Math.min(start, size);
          }
          if (end === undefined) {
            relativeEnd = size;
          } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
          } else {
            relativeEnd = Math.min(end, size);
          }
          const span = Math.max(relativeEnd - relativeStart, 0);

          const buffer = this[BUFFER];
          const slicedBuffer = buffer.slice(
            relativeStart,
            relativeStart + span,
          );
          const blob = new Blob([], { type: arguments[2] });
          blob[BUFFER] = slicedBuffer;
          return blob;
        }
      }

      Object.defineProperties(Blob.prototype, {
        size: { enumerable: true },
        type: { enumerable: true },
        slice: { enumerable: true },
      });

      Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
        value: 'Blob',
        writable: false,
        enumerable: false,
        configurable: true,
      });

      /**
       * fetch-error.js
       *
       * FetchError interface for operational errors
       */

      /**
       * Create FetchError instance
       *
       * @param   String      message      Error message for human
       * @param   String      type         Error type for machine
       * @param   String      systemError  For Node.js system error
       * @return  FetchError
       */
      function FetchError(message, type, systemError) {
        Error.call(this, message);

        this.message = message;
        this.type = type;

        if (systemError) {
          this.code = this.errno = systemError.code;
        }

        Error.captureStackTrace(this, this.constructor);
      }

      FetchError.prototype = Object.create(Error.prototype);
      FetchError.prototype.constructor = FetchError;
      FetchError.prototype.name = 'FetchError';

      let convert;
      try {
        convert = __nccwpck_require__(8402).convert;
      } catch (e) {}

      const INTERNALS = Symbol('Body internals');

      const PassThrough = Stream.PassThrough;

      /**
       * Body mixin
       *
       * Ref: https://fetch.spec.whatwg.org/#body
       *
       * @param   Stream  body  Readable stream
       * @param   Object  opts  Response options
       * @return  Void
       */
      function Body(body) {
        var _this = this;

        var _ref =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {},
          _ref$size = _ref.size;

        let size = _ref$size === undefined ? 0 : _ref$size;
        var _ref$timeout = _ref.timeout;
        let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

        if (body == null) {
          body = null;
        } else if (isURLSearchParams(body)) {
          body = Buffer.from(body.toString());
        } else if (isBlob(body));
        else if (Buffer.isBuffer(body));
        else if (
          Object.prototype.toString.call(body) === '[object ArrayBuffer]'
        ) {
          body = Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof Stream);
        else {
          body = Buffer.from(String(body));
        }
        this[INTERNALS] = {
          body,
          disturbed: false,
          error: null,
        };
        this.size = size;
        this.timeout = timeout;

        if (body instanceof Stream) {
          body.on('error', function (err) {
            const error =
              err.name === 'AbortError'
                ? err
                : new FetchError(
                    `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                    'system',
                    err,
                  );
            _this[INTERNALS].error = error;
          });
        }
      }

      Body.prototype = {
        get body() {
          return this[INTERNALS].body;
        },

        get bodyUsed() {
          return this[INTERNALS].disturbed;
        },

        /**
         * Decode response as ArrayBuffer
         *
         * @return  Promise
         */
        arrayBuffer() {
          return consumeBody.call(this).then(function (buf) {
            return buf.buffer.slice(
              buf.byteOffset,
              buf.byteOffset + buf.byteLength,
            );
          });
        },

        /**
         * Return raw response as Blob
         *
         * @return Promise
         */
        blob() {
          let ct = (this.headers && this.headers.get('content-type')) || '';
          return consumeBody.call(this).then(function (buf) {
            return Object.assign(
              new Blob([], {
                type: ct.toLowerCase(),
              }),
              {
                [BUFFER]: buf,
              },
            );
          });
        },

        /**
         * Decode response as json
         *
         * @return  Promise
         */
        json() {
          var _this2 = this;

          return consumeBody.call(this).then(function (buffer) {
            try {
              return JSON.parse(buffer.toString());
            } catch (err) {
              return Body.Promise.reject(
                new FetchError(
                  `invalid json response body at ${_this2.url} reason: ${err.message}`,
                  'invalid-json',
                ),
              );
            }
          });
        },

        /**
         * Decode response as text
         *
         * @return  Promise
         */
        text() {
          return consumeBody.call(this).then(function (buffer) {
            return buffer.toString();
          });
        },

        /**
         * Decode response as buffer (non-spec api)
         *
         * @return  Promise
         */
        buffer() {
          return consumeBody.call(this);
        },

        /**
         * Decode response as text, while automatically detecting the encoding and
         * trying to decode to UTF-8 (non-spec api)
         *
         * @return  Promise
         */
        textConverted() {
          var _this3 = this;

          return consumeBody.call(this).then(function (buffer) {
            return convertBody(buffer, _this3.headers);
          });
        },
      };

      Object.defineProperties(Body.prototype, {
        body: { enumerable: true },
        bodyUsed: { enumerable: true },
        arrayBuffer: { enumerable: true },
        blob: { enumerable: true },
        json: { enumerable: true },
        text: { enumerable: true },
      });

      Body.mixIn = function (proto) {
        for (const name of Object.getOwnPropertyNames(Body.prototype)) {
          if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
          }
        }
      };

      /**
       * Consume and convert an entire Body to a Buffer.
       *
       * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
       *
       * @return  Promise
       */
      function consumeBody() {
        var _this4 = this;

        if (this[INTERNALS].disturbed) {
          return Body.Promise.reject(
            new TypeError(`body used already for: ${this.url}`),
          );
        }

        this[INTERNALS].disturbed = true;

        if (this[INTERNALS].error) {
          return Body.Promise.reject(this[INTERNALS].error);
        }

        let body = this.body;

        if (body === null) {
          return Body.Promise.resolve(Buffer.alloc(0));
        }

        if (isBlob(body)) {
          body = body.stream();
        }

        if (Buffer.isBuffer(body)) {
          return Body.Promise.resolve(body);
        }

        if (!(body instanceof Stream)) {
          return Body.Promise.resolve(Buffer.alloc(0));
        }

        let accum = [];
        let accumBytes = 0;
        let abort = false;

        return new Body.Promise(function (resolve, reject) {
          let resTimeout;

          if (_this4.timeout) {
            resTimeout = setTimeout(function () {
              abort = true;
              reject(
                new FetchError(
                  `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                  'body-timeout',
                ),
              );
            }, _this4.timeout);
          }

          body.on('error', function (err) {
            if (err.name === 'AbortError') {
              abort = true;
              reject(err);
            } else {
              reject(
                new FetchError(
                  `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                  'system',
                  err,
                ),
              );
            }
          });

          body.on('data', function (chunk) {
            if (abort || chunk === null) {
              return;
            }

            if (_this4.size && accumBytes + chunk.length > _this4.size) {
              abort = true;
              reject(
                new FetchError(
                  `content size at ${_this4.url} over limit: ${_this4.size}`,
                  'max-size',
                ),
              );
              return;
            }

            accumBytes += chunk.length;
            accum.push(chunk);
          });

          body.on('end', function () {
            if (abort) {
              return;
            }

            clearTimeout(resTimeout);

            try {
              resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
              reject(
                new FetchError(
                  `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                  'system',
                  err,
                ),
              );
            }
          });
        });
      }

      /**
       * Detect buffer encoding and convert to target encoding
       * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
       *
       * @param   Buffer  buffer    Incoming buffer
       * @param   String  encoding  Target encoding
       * @return  String
       */
      function convertBody(buffer, headers) {
        if (typeof convert !== 'function') {
          throw new Error(
            'The package `encoding` must be installed to use the textConverted() function',
          );
        }

        const ct = headers.get('content-type');
        let charset = 'utf-8';
        let res, str;

        if (ct) {
          res = /charset=([^;]*)/i.exec(ct);
        }

        str = buffer.slice(0, 1024).toString();

        if (!res && str) {
          res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
        }

        if (!res && str) {
          res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
            str,
          );
          if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
              str,
            );
            if (res) {
              res.pop();
            }
          }

          if (res) {
            res = /charset=(.*)/i.exec(res.pop());
          }
        }

        if (!res && str) {
          res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
        }

        if (res) {
          charset = res.pop();

          if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
          }
        }

        return convert(buffer, 'UTF-8', charset).toString();
      }

      /**
       * Detect a URLSearchParams object
       * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
       *
       * @param   Object  obj     Object to detect by type or brand
       * @return  String
       */
      function isURLSearchParams(obj) {
        if (
          typeof obj !== 'object' ||
          typeof obj.append !== 'function' ||
          typeof obj.delete !== 'function' ||
          typeof obj.get !== 'function' ||
          typeof obj.getAll !== 'function' ||
          typeof obj.has !== 'function' ||
          typeof obj.set !== 'function'
        ) {
          return false;
        }

        return (
          obj.constructor.name === 'URLSearchParams' ||
          Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
          typeof obj.sort === 'function'
        );
      }

      /**
       * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
       * @param  {*} obj
       * @return {boolean}
       */
      function isBlob(obj) {
        return (
          typeof obj === 'object' &&
          typeof obj.arrayBuffer === 'function' &&
          typeof obj.type === 'string' &&
          typeof obj.stream === 'function' &&
          typeof obj.constructor === 'function' &&
          typeof obj.constructor.name === 'string' &&
          /^(Blob|File)$/.test(obj.constructor.name) &&
          /^(Blob|File)$/.test(obj[Symbol.toStringTag])
        );
      }

      /**
       * Clone body given Res/Req instance
       *
       * @param   Mixed  instance  Response or Request instance
       * @return  Mixed
       */
      function clone(instance) {
        let p1, p2;
        let body = instance.body;

        if (instance.bodyUsed) {
          throw new Error('cannot clone body after it is used');
        }

        if (body instanceof Stream && typeof body.getBoundary !== 'function') {
          p1 = new PassThrough();
          p2 = new PassThrough();
          body.pipe(p1);
          body.pipe(p2);

          instance[INTERNALS].body = p1;
          body = p2;
        }

        return body;
      }

      /**
       * Performs the operation "extract a `Content-Type` value from |object|" as
       * specified in the specification:
       * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
       *
       * This function assumes that instance.body is present.
       *
       * @param   Mixed  instance  Any options.body input
       */
      function extractContentType(body) {
        if (body === null) {
          return null;
        } else if (typeof body === 'string') {
          return 'text/plain;charset=UTF-8';
        } else if (isURLSearchParams(body)) {
          return 'application/x-www-form-urlencoded;charset=UTF-8';
        } else if (isBlob(body)) {
          return body.type || null;
        } else if (Buffer.isBuffer(body)) {
          return null;
        } else if (
          Object.prototype.toString.call(body) === '[object ArrayBuffer]'
        ) {
          return null;
        } else if (ArrayBuffer.isView(body)) {
          return null;
        } else if (typeof body.getBoundary === 'function') {
          return `multipart/form-data;boundary=${body.getBoundary()}`;
        } else if (body instanceof Stream) {
          return null;
        } else {
          return 'text/plain;charset=UTF-8';
        }
      }

      /**
       * The Fetch Standard treats this as if "total bytes" is a property on the body.
       * For us, we have to explicitly get it with a function.
       *
       * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
       *
       * @param   Body    instance   Instance of Body
       * @return  Number?            Number of bytes, or null if not possible
       */
      function getTotalBytes(instance) {
        const body = instance.body;

        if (body === null) {
          return 0;
        } else if (isBlob(body)) {
          return body.size;
        } else if (Buffer.isBuffer(body)) {
          return body.length;
        } else if (body && typeof body.getLengthSync === 'function') {
          if (
            (body._lengthRetrievers && body._lengthRetrievers.length == 0) ||
            (body.hasKnownLength && body.hasKnownLength())
          ) {
            return body.getLengthSync();
          }
          return null;
        } else {
          return null;
        }
      }

      /**
       * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
       *
       * @param   Body    instance   Instance of Body
       * @return  Void
       */
      function writeToStream(dest, instance) {
        const body = instance.body;

        if (body === null) {
          dest.end();
        } else if (isBlob(body)) {
          body.stream().pipe(dest);
        } else if (Buffer.isBuffer(body)) {
          dest.write(body);
          dest.end();
        } else {
          body.pipe(dest);
        }
      }

      Body.Promise = global.Promise;

      /**
       * headers.js
       *
       * Headers class offers convenient helpers
       */

      const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
      const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

      function validateName(name) {
        name = `${name}`;
        if (invalidTokenRegex.test(name) || name === '') {
          throw new TypeError(`${name} is not a legal HTTP header name`);
        }
      }

      function validateValue(value) {
        value = `${value}`;
        if (invalidHeaderCharRegex.test(value)) {
          throw new TypeError(`${value} is not a legal HTTP header value`);
        }
      }

      /**
       * Find the key in the map object given a header name.
       *
       * Returns undefined if not found.
       *
       * @param   String  name  Header name
       * @return  String|Undefined
       */
      function find(map, name) {
        name = name.toLowerCase();
        for (const key in map) {
          if (key.toLowerCase() === name) {
            return key;
          }
        }
        return undefined;
      }

      const MAP = Symbol('map');
      class Headers {
        /**
         * Headers class
         *
         * @param   Object  headers  Response headers
         * @return  Void
         */
        constructor() {
          let init =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : undefined;

          this[MAP] = Object.create(null);

          if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);

            for (const headerName of headerNames) {
              for (const value of rawHeaders[headerName]) {
                this.append(headerName, value);
              }
            }

            return;
          }

          if (init == null);
          else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
              if (typeof method !== 'function') {
                throw new TypeError('Header pairs must be iterable');
              }

              const pairs = [];
              for (const pair of init) {
                if (
                  typeof pair !== 'object' ||
                  typeof pair[Symbol.iterator] !== 'function'
                ) {
                  throw new TypeError('Each header pair must be iterable');
                }
                pairs.push(Array.from(pair));
              }

              for (const pair of pairs) {
                if (pair.length !== 2) {
                  throw new TypeError(
                    'Each header pair must be a name/value tuple',
                  );
                }
                this.append(pair[0], pair[1]);
              }
            } else {
              for (const key of Object.keys(init)) {
                const value = init[key];
                this.append(key, value);
              }
            }
          } else {
            throw new TypeError('Provided initializer must be an object');
          }
        }

        /**
         * Return combined header value given name
         *
         * @param   String  name  Header name
         * @return  Mixed
         */
        get(name) {
          name = `${name}`;
          validateName(name);
          const key = find(this[MAP], name);
          if (key === undefined) {
            return null;
          }

          return this[MAP][key].join(', ');
        }

        /**
         * Iterate over all headers
         *
         * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
         * @param   Boolean   thisArg   `this` context for callback function
         * @return  Void
         */
        forEach(callback) {
          let thisArg =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : undefined;

          let pairs = getHeaders(this);
          let i = 0;
          while (i < pairs.length) {
            var _pairs$i = pairs[i];
            const name = _pairs$i[0],
              value = _pairs$i[1];

            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
          }
        }

        /**
         * Overwrite header values given name
         *
         * @param   String  name   Header name
         * @param   String  value  Header value
         * @return  Void
         */
        set(name, value) {
          name = `${name}`;
          value = `${value}`;
          validateName(name);
          validateValue(value);
          const key = find(this[MAP], name);
          this[MAP][key !== undefined ? key : name] = [value];
        }

        /**
         * Append a value onto existing header
         *
         * @param   String  name   Header name
         * @param   String  value  Header value
         * @return  Void
         */
        append(name, value) {
          name = `${name}`;
          value = `${value}`;
          validateName(name);
          validateValue(value);
          const key = find(this[MAP], name);
          if (key !== undefined) {
            this[MAP][key].push(value);
          } else {
            this[MAP][name] = [value];
          }
        }

        /**
         * Check for header name existence
         *
         * @param   String   name  Header name
         * @return  Boolean
         */
        has(name) {
          name = `${name}`;
          validateName(name);
          return find(this[MAP], name) !== undefined;
        }

        /**
         * Delete all header values given name
         *
         * @param   String  name  Header name
         * @return  Void
         */
        delete(name) {
          name = `${name}`;
          validateName(name);
          const key = find(this[MAP], name);
          if (key !== undefined) {
            delete this[MAP][key];
          }
        }

        /**
         * Return raw headers (non-spec api)
         *
         * @return  Object
         */
        raw() {
          return this[MAP];
        }

        /**
         * Get an iterator on keys.
         *
         * @return  Iterator
         */
        keys() {
          return createHeadersIterator(this, 'key');
        }

        /**
         * Get an iterator on values.
         *
         * @return  Iterator
         */
        values() {
          return createHeadersIterator(this, 'value');
        }

        /**
         * Get an iterator on entries.
         *
         * This is the default iterator of the Headers object.
         *
         * @return  Iterator
         */
        [Symbol.iterator]() {
          return createHeadersIterator(this, 'key+value');
        }
      }
      Headers.prototype.entries = Headers.prototype[Symbol.iterator];

      Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
        value: 'Headers',
        writable: false,
        enumerable: false,
        configurable: true,
      });

      Object.defineProperties(Headers.prototype, {
        get: { enumerable: true },
        forEach: { enumerable: true },
        set: { enumerable: true },
        append: { enumerable: true },
        has: { enumerable: true },
        delete: { enumerable: true },
        keys: { enumerable: true },
        values: { enumerable: true },
        entries: { enumerable: true },
      });

      function getHeaders(headers) {
        let kind =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 'key+value';

        const keys = Object.keys(headers[MAP]).sort();
        return keys.map(
          kind === 'key'
            ? function (k) {
                return k.toLowerCase();
              }
            : kind === 'value'
            ? function (k) {
                return headers[MAP][k].join(', ');
              }
            : function (k) {
                return [k.toLowerCase(), headers[MAP][k].join(', ')];
              },
        );
      }

      const INTERNAL = Symbol('internal');

      function createHeadersIterator(target, kind) {
        const iterator = Object.create(HeadersIteratorPrototype);
        iterator[INTERNAL] = {
          target,
          kind,
          index: 0,
        };
        return iterator;
      }

      const HeadersIteratorPrototype = Object.setPrototypeOf(
        {
          next() {
            if (
              !this ||
              Object.getPrototypeOf(this) !== HeadersIteratorPrototype
            ) {
              throw new TypeError('Value of `this` is not a HeadersIterator');
            }

            var _INTERNAL = this[INTERNAL];
            const target = _INTERNAL.target,
              kind = _INTERNAL.kind,
              index = _INTERNAL.index;

            const values = getHeaders(target, kind);
            const len = values.length;
            if (index >= len) {
              return {
                value: undefined,
                done: true,
              };
            }

            this[INTERNAL].index = index + 1;

            return {
              value: values[index],
              done: false,
            };
          },
        },
        Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
      );

      Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
        value: 'HeadersIterator',
        writable: false,
        enumerable: false,
        configurable: true,
      });

      /**
       * Export the Headers object in a form that Node.js can consume.
       *
       * @param   Headers  headers
       * @return  Object
       */
      function exportNodeCompatibleHeaders(headers) {
        const obj = Object.assign({ __proto__: null }, headers[MAP]);

        const hostHeaderKey = find(headers[MAP], 'Host');
        if (hostHeaderKey !== undefined) {
          obj[hostHeaderKey] = obj[hostHeaderKey][0];
        }

        return obj;
      }

      /**
       * Create a Headers object from an object of headers, ignoring those that do
       * not conform to HTTP grammar productions.
       *
       * @param   Object  obj  Object of headers
       * @return  Headers
       */
      function createHeadersLenient(obj) {
        const headers = new Headers();
        for (const name of Object.keys(obj)) {
          if (invalidTokenRegex.test(name)) {
            continue;
          }
          if (Array.isArray(obj[name])) {
            for (const val of obj[name]) {
              if (invalidHeaderCharRegex.test(val)) {
                continue;
              }
              if (headers[MAP][name] === undefined) {
                headers[MAP][name] = [val];
              } else {
                headers[MAP][name].push(val);
              }
            }
          } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [obj[name]];
          }
        }
        return headers;
      }

      const INTERNALS$1 = Symbol('Response internals');

      const STATUS_CODES = http.STATUS_CODES;

      /**
       * Response class
       *
       * @param   Stream  body  Readable stream
       * @param   Object  opts  Response options
       * @return  Void
       */
      class Response {
        constructor() {
          let body =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          let opts =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};

          Body.call(this, body, opts);

          const status = opts.status || 200;
          const headers = new Headers(opts.headers);

          if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
              headers.append('Content-Type', contentType);
            }
          }

          this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter,
          };
        }

        get url() {
          return this[INTERNALS$1].url || '';
        }

        get status() {
          return this[INTERNALS$1].status;
        }

        /**
         * Convenience property representing if the request ended normally
         */
        get ok() {
          return (
            this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300
          );
        }

        get redirected() {
          return this[INTERNALS$1].counter > 0;
        }

        get statusText() {
          return this[INTERNALS$1].statusText;
        }

        get headers() {
          return this[INTERNALS$1].headers;
        }

        /**
         * Clone this response
         *
         * @return  Response
         */
        clone() {
          return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected,
          });
        }
      }

      Body.mixIn(Response.prototype);

      Object.defineProperties(Response.prototype, {
        url: { enumerable: true },
        status: { enumerable: true },
        ok: { enumerable: true },
        redirected: { enumerable: true },
        statusText: { enumerable: true },
        headers: { enumerable: true },
        clone: { enumerable: true },
      });

      Object.defineProperty(Response.prototype, Symbol.toStringTag, {
        value: 'Response',
        writable: false,
        enumerable: false,
        configurable: true,
      });

      const INTERNALS$2 = Symbol('Request internals');

      const parse_url = Url.parse;
      const format_url = Url.format;

      const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

      /**
       * Check if a value is an instance of Request.
       *
       * @param   Mixed   input
       * @return  Boolean
       */
      function isRequest(input) {
        return (
          typeof input === 'object' && typeof input[INTERNALS$2] === 'object'
        );
      }

      function isAbortSignal(signal) {
        const proto =
          signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
        return !!(proto && proto.constructor.name === 'AbortSignal');
      }

      /**
       * Request class
       *
       * @param   Mixed   input  Url or Request instance
       * @param   Object  init   Custom options
       * @return  Void
       */
      class Request {
        constructor(input) {
          let init =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};

          let parsedURL;

          if (!isRequest(input)) {
            if (input && input.href) {
              parsedURL = parse_url(input.href);
            } else {
              parsedURL = parse_url(`${input}`);
            }
            input = {};
          } else {
            parsedURL = parse_url(input.url);
          }

          let method = init.method || input.method || 'GET';
          method = method.toUpperCase();

          if (
            (init.body != null || (isRequest(input) && input.body !== null)) &&
            (method === 'GET' || method === 'HEAD')
          ) {
            throw new TypeError(
              'Request with GET/HEAD method cannot have body',
            );
          }

          let inputBody =
            init.body != null
              ? init.body
              : isRequest(input) && input.body !== null
              ? clone(input)
              : null;

          Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0,
          });

          const headers = new Headers(init.headers || input.headers || {});

          if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
              headers.append('Content-Type', contentType);
            }
          }

          let signal = isRequest(input) ? input.signal : null;
          if ('signal' in init) signal = init.signal;

          if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError(
              'Expected signal to be an instanceof AbortSignal',
            );
          }

          this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal,
          };

          this.follow =
            init.follow !== undefined
              ? init.follow
              : input.follow !== undefined
              ? input.follow
              : 20;
          this.compress =
            init.compress !== undefined
              ? init.compress
              : input.compress !== undefined
              ? input.compress
              : true;
          this.counter = init.counter || input.counter || 0;
          this.agent = init.agent || input.agent;
        }

        get method() {
          return this[INTERNALS$2].method;
        }

        get url() {
          return format_url(this[INTERNALS$2].parsedURL);
        }

        get headers() {
          return this[INTERNALS$2].headers;
        }

        get redirect() {
          return this[INTERNALS$2].redirect;
        }

        get signal() {
          return this[INTERNALS$2].signal;
        }

        /**
         * Clone this request
         *
         * @return  Request
         */
        clone() {
          return new Request(this);
        }
      }

      Body.mixIn(Request.prototype);

      Object.defineProperty(Request.prototype, Symbol.toStringTag, {
        value: 'Request',
        writable: false,
        enumerable: false,
        configurable: true,
      });

      Object.defineProperties(Request.prototype, {
        method: { enumerable: true },
        url: { enumerable: true },
        headers: { enumerable: true },
        redirect: { enumerable: true },
        clone: { enumerable: true },
        signal: { enumerable: true },
      });

      /**
       * Convert a Request to Node.js http request options.
       *
       * @param   Request  A Request instance
       * @return  Object   The options object to be passed to http.request
       */
      function getNodeRequestOptions(request) {
        const parsedURL = request[INTERNALS$2].parsedURL;
        const headers = new Headers(request[INTERNALS$2].headers);

        if (!headers.has('Accept')) {
          headers.set('Accept', '*/*');
        }

        if (!parsedURL.protocol || !parsedURL.hostname) {
          throw new TypeError('Only absolute URLs are supported');
        }

        if (!/^https?:$/.test(parsedURL.protocol)) {
          throw new TypeError('Only HTTP(S) protocols are supported');
        }

        if (
          request.signal &&
          request.body instanceof Stream.Readable &&
          !streamDestructionSupported
        ) {
          throw new Error(
            'Cancellation of streamed requests with AbortSignal is not supported in node < 8',
          );
        }

        let contentLengthValue = null;
        if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
          contentLengthValue = '0';
        }
        if (request.body != null) {
          const totalBytes = getTotalBytes(request);
          if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
          }
        }
        if (contentLengthValue) {
          headers.set('Content-Length', contentLengthValue);
        }

        if (!headers.has('User-Agent')) {
          headers.set(
            'User-Agent',
            'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
          );
        }

        if (request.compress && !headers.has('Accept-Encoding')) {
          headers.set('Accept-Encoding', 'gzip,deflate');
        }

        let agent = request.agent;
        if (typeof agent === 'function') {
          agent = agent(parsedURL);
        }

        if (!headers.has('Connection') && !agent) {
          headers.set('Connection', 'close');
        }

        return Object.assign({}, parsedURL, {
          method: request.method,
          headers: exportNodeCompatibleHeaders(headers),
          agent,
        });
      }

      /**
       * abort-error.js
       *
       * AbortError interface for cancelled requests
       */

      /**
       * Create AbortError instance
       *
       * @param   String      message      Error message for human
       * @return  AbortError
       */
      function AbortError(message) {
        Error.call(this, message);

        this.type = 'aborted';
        this.message = message;

        Error.captureStackTrace(this, this.constructor);
      }

      AbortError.prototype = Object.create(Error.prototype);
      AbortError.prototype.constructor = AbortError;
      AbortError.prototype.name = 'AbortError';

      const PassThrough$1 = Stream.PassThrough;
      const resolve_url = Url.resolve;

      /**
       * Fetch function
       *
       * @param   Mixed    url   Absolute url or Request instance
       * @param   Object   opts  Fetch options
       * @return  Promise
       */
      function fetch(url, opts) {
        if (!fetch.Promise) {
          throw new Error(
            'native promise missing, set fetch.Promise to your favorite alternative',
          );
        }

        Body.Promise = fetch.Promise;

        return new fetch.Promise(function (resolve, reject) {
          const request = new Request(url, opts);
          const options = getNodeRequestOptions(request);

          const send = (options.protocol === 'https:' ? https : http).request;
          const signal = request.signal;

          let response = null;

          const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof Stream.Readable) {
              request.body.destroy(error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
          };

          if (signal && signal.aborted) {
            abort();
            return;
          }

          const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
          };

          const req = send(options);
          let reqTimeout;

          if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
          }

          function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
          }

          if (request.timeout) {
            req.once('socket', function (socket) {
              reqTimeout = setTimeout(function () {
                reject(
                  new FetchError(
                    `network timeout at: ${request.url}`,
                    'request-timeout',
                  ),
                );
                finalize();
              }, request.timeout);
            });
          }

          req.on('error', function (err) {
            reject(
              new FetchError(
                `request to ${request.url} failed, reason: ${err.message}`,
                'system',
                err,
              ),
            );
            finalize();
          });

          req.on('response', function (res) {
            clearTimeout(reqTimeout);

            const headers = createHeadersLenient(res.headers);

            if (fetch.isRedirect(res.statusCode)) {
              const location = headers.get('Location');

              const locationURL =
                location === null ? null : resolve_url(request.url, location);

              switch (request.redirect) {
                case 'error':
                  reject(
                    new FetchError(
                      `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                      'no-redirect',
                    ),
                  );
                  finalize();
                  return;
                case 'manual':
                  if (locationURL !== null) {
                    try {
                      headers.set('Location', locationURL);
                    } catch (err) {
                      reject(err);
                    }
                  }
                  break;
                case 'follow':
                  if (locationURL === null) {
                    break;
                  }

                  if (request.counter >= request.follow) {
                    reject(
                      new FetchError(
                        `maximum redirect reached at: ${request.url}`,
                        'max-redirect',
                      ),
                    );
                    finalize();
                    return;
                  }

                  const requestOpts = {
                    headers: new Headers(request.headers),
                    follow: request.follow,
                    counter: request.counter + 1,
                    agent: request.agent,
                    compress: request.compress,
                    method: request.method,
                    body: request.body,
                    signal: request.signal,
                    timeout: request.timeout,
                    size: request.size,
                  };

                  if (
                    res.statusCode !== 303 &&
                    request.body &&
                    getTotalBytes(request) === null
                  ) {
                    reject(
                      new FetchError(
                        'Cannot follow redirect with body being a readable stream',
                        'unsupported-redirect',
                      ),
                    );
                    finalize();
                    return;
                  }

                  if (
                    res.statusCode === 303 ||
                    ((res.statusCode === 301 || res.statusCode === 302) &&
                      request.method === 'POST')
                  ) {
                    requestOpts.method = 'GET';
                    requestOpts.body = undefined;
                    requestOpts.headers.delete('content-length');
                  }

                  resolve(fetch(new Request(locationURL, requestOpts)));
                  finalize();
                  return;
              }
            }

            res.once('end', function () {
              if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());

            const response_options = {
              url: request.url,
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: headers,
              size: request.size,
              timeout: request.timeout,
              counter: request.counter,
            };

            const codings = headers.get('Content-Encoding');

            if (
              !request.compress ||
              request.method === 'HEAD' ||
              codings === null ||
              res.statusCode === 204 ||
              res.statusCode === 304
            ) {
              response = new Response(body, response_options);
              resolve(response);
              return;
            }

            const zlibOptions = {
              flush: zlib.Z_SYNC_FLUSH,
              finishFlush: zlib.Z_SYNC_FLUSH,
            };

            if (codings == 'gzip' || codings == 'x-gzip') {
              body = body.pipe(zlib.createGunzip(zlibOptions));
              response = new Response(body, response_options);
              resolve(response);
              return;
            }

            if (codings == 'deflate' || codings == 'x-deflate') {
              const raw = res.pipe(new PassThrough$1());
              raw.once('data', function (chunk) {
                if ((chunk[0] & 0x0f) === 0x08) {
                  body = body.pipe(zlib.createInflate());
                } else {
                  body = body.pipe(zlib.createInflateRaw());
                }
                response = new Response(body, response_options);
                resolve(response);
              });
              return;
            }

            if (
              codings == 'br' &&
              typeof zlib.createBrotliDecompress === 'function'
            ) {
              body = body.pipe(zlib.createBrotliDecompress());
              response = new Response(body, response_options);
              resolve(response);
              return;
            }

            response = new Response(body, response_options);
            resolve(response);
          });

          writeToStream(req, request);
        });
      }
      /**
       * Redirect code matching
       *
       * @param   Number   code  Status code
       * @return  Boolean
       */
      fetch.isRedirect = function (code) {
        return (
          code === 301 ||
          code === 302 ||
          code === 303 ||
          code === 307 ||
          code === 308
        );
      };

      fetch.Promise = global.Promise;

      module.exports = exports = fetch;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.default = exports;
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.FetchError = FetchError;
    },

    9952: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const axios = __nccwpck_require__(6882);

      module.exports = async function (url, options, next) {
        if (typeof url !== 'string') {
          return Promise.reject(new TypeError('expected "url" to be a string'));
        }

        if (typeof options === 'function') {
          next = options;
          options = null;
        }

        const opts = Object.assign({}, options);
        const acc = { orig: url, options, pages: [], urls: [] };
        let res;

        while (url && typeof url === 'string' && !acc.urls.includes(url)) {
          acc.urls.push(url);
          res = await axios.get(url, opts);
          url = await next(url, res, acc);
          acc.pages.push(res);
        }

        return acc;
      };
    },

    8513: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var toPath = __nccwpck_require__(4924);

      /**
       * Defines a getter function on an object using property path notation.
       *
       * ```js
       * var obj = {};
       * getter(obj, 'foo', function() {
       *   return 'bar';
       * });
       * ```
       * @param {Object} `obj` Object to add property to.
       * @param {String|Array} `prop` Property string or array to add.
       * @param {Function} `getter` Getter function to add as a property.
       * @api public
       */

      function setGetter(obj, prop, getter) {
        var key = toPath(arguments);
        return define(obj, key, getter);
      }

      /**
       * Define getter function on object or object hierarchy using dot notation.
       *
       * @param  {Object} `obj` Object to define getter property on.
       * @param  {String} `prop` Property string to define.
       * @param  {Function} `getter` Getter function to define.
       * @return {Object} Returns original object.
       */

      function define(obj, prop, getter) {
        if (!~prop.indexOf('.')) {
          defineProperty(obj, prop, getter);
          return obj;
        }

        var keys = prop.split('.');
        var last = keys.pop();
        var target = obj;
        var key;

        while ((key = keys.shift())) {
          while (key.slice(-1) === '\\') {
            key = key.slice(0, -1) + '.' + keys.shift();
          }
          target = target[key] || (target[key] = {});
        }

        defineProperty(target, last, getter);
        return obj;
      }

      /**
       * Define getter function on object as a configurable and enumerable property.
       *
       * @param  {Object} `obj` Object to define property on.
       * @param  {String} `prop` Property to define.
       * @param  {Function} `getter` Getter function to define.
       */

      function defineProperty(obj, prop, getter) {
        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          get: getter,
        });
      }

      /**
       * Expose `setGetter`
       */

      module.exports = setGetter;
    },

    9242: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';
      /*
       * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Released under the MIT License.
       */

      const valueOf = Symbol.prototype.valueOf;
      const typeOf = __nccwpck_require__(4807);

      function clone(val, deep) {
        switch (typeOf(val)) {
          case 'array':
            return val.slice();
          case 'object':
            return Object.assign({}, val);
          case 'date':
            return new val.constructor(Number(val));
          case 'map':
            return new Map(val);
          case 'set':
            return new Set(val);
          case 'buffer':
            return cloneBuffer(val);
          case 'symbol':
            return cloneSymbol(val);
          case 'arraybuffer':
            return cloneArrayBuffer(val);
          case 'float32array':
          case 'float64array':
          case 'int16array':
          case 'int32array':
          case 'int8array':
          case 'uint16array':
          case 'uint32array':
          case 'uint8clampedarray':
          case 'uint8array':
            return cloneTypedArray(val);
          case 'regexp':
            return cloneRegExp(val);
          case 'error':
            return Object.create(val);
          default: {
            return val;
          }
        }
      }

      function cloneRegExp(val) {
        const flags =
          val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
        const re = new val.constructor(val.source, flags);
        re.lastIndex = val.lastIndex;
        return re;
      }

      function cloneArrayBuffer(val) {
        const res = new val.constructor(val.byteLength);
        new Uint8Array(res).set(new Uint8Array(val));
        return res;
      }

      function cloneTypedArray(val, deep) {
        return new val.constructor(val.buffer, val.byteOffset, val.length);
      }

      function cloneBuffer(val) {
        const len = val.length;
        const buf = Buffer.allocUnsafe
          ? Buffer.allocUnsafe(len)
          : Buffer.from(len);
        val.copy(buf);
        return buf;
      }

      function cloneSymbol(val) {
        return valueOf ? Object(valueOf.call(val)) : {};
      }

      /**
       * Expose `clone`
       */

      module.exports = clone;
    },

    8458: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      const os = __nccwpck_require__(2087);
      const hasFlag = __nccwpck_require__(3788);

      const { env } = process;

      let forceColor;
      if (
        hasFlag('no-color') ||
        hasFlag('no-colors') ||
        hasFlag('color=false')
      ) {
        forceColor = 0;
      } else if (
        hasFlag('color') ||
        hasFlag('colors') ||
        hasFlag('color=true') ||
        hasFlag('color=always')
      ) {
        forceColor = 1;
      }
      if ('FORCE_COLOR' in env) {
        if (env.FORCE_COLOR === true || env.FORCE_COLOR === 'true') {
          forceColor = 1;
        } else if (env.FORCE_COLOR === false || env.FORCE_COLOR === 'false') {
          forceColor = 0;
        } else {
          forceColor =
            env.FORCE_COLOR.length === 0
              ? 1
              : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
        }
      }

      function translateLevel(level) {
        if (level === 0) {
          return false;
        }

        return {
          level,
          hasBasic: true,
          has256: level >= 2,
          has16m: level >= 3,
        };
      }

      function supportsColor(stream) {
        if (forceColor === 0) {
          return 0;
        }

        if (
          hasFlag('color=16m') ||
          hasFlag('color=full') ||
          hasFlag('color=truecolor')
        ) {
          return 3;
        }

        if (hasFlag('color=256')) {
          return 2;
        }

        if (stream && !stream.isTTY && forceColor === undefined) {
          return 0;
        }

        const min = forceColor || 0;

        if (env.TERM === 'dumb') {
          return min;
        }

        if (process.platform === 'win32') {
          const osRelease = os.release().split('.');
          if (
            Number(process.versions.node.split('.')[0]) >= 8 &&
            Number(osRelease[0]) >= 10 &&
            Number(osRelease[2]) >= 10586
          ) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
          }

          return 1;
        }

        if ('CI' in env) {
          if (
            ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(
              (sign) => sign in env,
            ) ||
            env.CI_NAME === 'codeship'
          ) {
            return 1;
          }

          return min;
        }

        if ('TEAMCITY_VERSION' in env) {
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)
            ? 1
            : 0;
        }

        if (env.COLORTERM === 'truecolor') {
          return 3;
        }

        if ('TERM_PROGRAM' in env) {
          const version = parseInt(
            (env.TERM_PROGRAM_VERSION || '').split('.')[0],
            10,
          );

          switch (env.TERM_PROGRAM) {
            case 'iTerm.app':
              return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
              return 2;
          }
        }

        if (/-256(color)?$/i.test(env.TERM)) {
          return 2;
        }

        if (
          /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            env.TERM,
          )
        ) {
          return 1;
        }

        if ('COLORTERM' in env) {
          return 1;
        }

        return min;
      }

      function getSupportLevel(stream) {
        const level = supportsColor(stream);
        return translateLevel(level);
      }

      module.exports = {
        supportsColor: getSupportLevel,
        stdout: getSupportLevel(process.stdout),
        stderr: getSupportLevel(process.stderr),
      };
    },

    717: (module, exports, __nccwpck_require__) => {
      var Stream = __nccwpck_require__(2413);

      //

      exports = module.exports = through;
      through.through = through;

      //create a readable writable stream.

      function through(write, end, opts) {
        write =
          write ||
          function (data) {
            this.queue(data);
          };
        end =
          end ||
          function () {
            this.queue(null);
          };

        var ended = false,
          destroyed = false,
          buffer = [],
          _ended = false;
        var stream = new Stream();
        stream.readable = stream.writable = true;
        stream.paused = false;

        stream.autoDestroy = !(opts && opts.autoDestroy === false);

        stream.write = function (data) {
          write.call(this, data);
          return !stream.paused;
        };

        function drain() {
          while (buffer.length && !stream.paused) {
            var data = buffer.shift();
            if (null === data) return stream.emit('end');
            else stream.emit('data', data);
          }
        }

        stream.queue = stream.push = function (data) {
          if (_ended) return stream;
          if (data === null) _ended = true;
          buffer.push(data);
          drain();
          return stream;
        };

        //this will be registered as the first 'end' listener
        //must call destroy next tick, to make sure we're after any
        //stream piped from here.
        //this is only a problem if end is not emitted synchronously.
        //a nicer way to do this is to make sure this is the last listener for 'end'

        stream.on('end', function () {
          stream.readable = false;
          if (!stream.writable && stream.autoDestroy)
            process.nextTick(function () {
              stream.destroy();
            });
        });

        function _end() {
          stream.writable = false;
          end.call(stream);
          if (!stream.readable && stream.autoDestroy) stream.destroy();
        }

        stream.end = function (data) {
          if (ended) return;
          ended = true;
          if (arguments.length) stream.write(data);
          _end();
          return stream;
        };

        stream.destroy = function () {
          if (destroyed) return;
          destroyed = true;
          ended = true;
          buffer.length = 0;
          stream.writable = stream.readable = false;
          stream.emit('close');
          return stream;
        };

        stream.pause = function () {
          if (stream.paused) return;
          stream.paused = true;
          return stream;
        };

        stream.resume = function () {
          if (stream.paused) {
            stream.paused = false;
            stream.emit('resume');
          }
          drain();
          //may have become paused again,
          //as drain emits 'data'.
          if (!stream.paused) stream.emit('drain');
          return stream;
        };
        return stream;
      }
    },

    4924: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';

      var typeOf = __nccwpck_require__(3211);

      module.exports = function toPath(args) {
        if (typeOf(args) !== 'arguments') {
          args = arguments;
        }
        return filter(args).join('.');
      };

      function filter(arr) {
        var len = arr.length;
        var idx = -1;
        var res = [];

        while (++idx < len) {
          var ele = arr[idx];
          if (typeOf(ele) === 'arguments' || Array.isArray(ele)) {
            res.push.apply(res, filter(ele));
          } else if (typeof ele === 'string') {
            res.push(ele);
          }
        }
        return res;
      }
    },

    3211: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var isBuffer = __nccwpck_require__(8422);
      var toString = Object.prototype.toString;

      /**
       * Get the native `typeof` a value.
       *
       * @param  {*} `val`
       * @return {*} Native javascript type
       */

      module.exports = function kindOf(val) {
        if (typeof val === 'undefined') {
          return 'undefined';
        }
        if (val === null) {
          return 'null';
        }
        if (val === true || val === false || val instanceof Boolean) {
          return 'boolean';
        }
        if (typeof val === 'string' || val instanceof String) {
          return 'string';
        }
        if (typeof val === 'number' || val instanceof Number) {
          return 'number';
        }

        if (typeof val === 'function' || val instanceof Function) {
          return 'function';
        }

        if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
          return 'array';
        }

        if (val instanceof RegExp) {
          return 'regexp';
        }
        if (val instanceof Date) {
          return 'date';
        }

        var type = toString.call(val);

        if (type === '[object RegExp]') {
          return 'regexp';
        }
        if (type === '[object Date]') {
          return 'date';
        }
        if (type === '[object Arguments]') {
          return 'arguments';
        }
        if (type === '[object Error]') {
          return 'error';
        }

        if (isBuffer(val)) {
          return 'buffer';
        }

        if (type === '[object Set]') {
          return 'set';
        }
        if (type === '[object WeakSet]') {
          return 'weakset';
        }
        if (type === '[object Map]') {
          return 'map';
        }
        if (type === '[object WeakMap]') {
          return 'weakmap';
        }
        if (type === '[object Symbol]') {
          return 'symbol';
        }

        if (type === '[object Int8Array]') {
          return 'int8array';
        }
        if (type === '[object Uint8Array]') {
          return 'uint8array';
        }
        if (type === '[object Uint8ClampedArray]') {
          return 'uint8clampedarray';
        }
        if (type === '[object Int16Array]') {
          return 'int16array';
        }
        if (type === '[object Uint16Array]') {
          return 'uint16array';
        }
        if (type === '[object Int32Array]') {
          return 'int32array';
        }
        if (type === '[object Uint32Array]') {
          return 'uint32array';
        }
        if (type === '[object Float32Array]') {
          return 'float32array';
        }
        if (type === '[object Float64Array]') {
          return 'float64array';
        }

        return 'object';
      };
    },

    8402: (module) => {
      module.exports = eval('require')('encoding');
    },

    2357: (module) => {
      'use strict';
      module.exports = require('assert');
    },

    8605: (module) => {
      'use strict';
      module.exports = require('http');
    },

    7211: (module) => {
      'use strict';
      module.exports = require('https');
    },

    2087: (module) => {
      'use strict';
      module.exports = require('os');
    },

    2413: (module) => {
      'use strict';
      module.exports = require('stream');
    },

    3867: (module) => {
      'use strict';
      module.exports = require('tty');
    },

    8835: (module) => {
      'use strict';
      module.exports = require('url');
    },

    1669: (module) => {
      'use strict';
      module.exports = require('util');
    },

    8761: (module) => {
      'use strict';
      module.exports = require('zlib');
    },
  };

  var __webpack_module_cache__ = {};
  function __nccwpck_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }

    var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {},
    });

    var threw = true;
    try {
      __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __nccwpck_require__,
      );
      threw = false;
    } finally {
      if (threw) delete __webpack_module_cache__[moduleId];
    }

    module.loaded = true;

    return module.exports;
  }

  (() => {
    __nccwpck_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    __nccwpck_require__.nmd = (module) => {
      module.paths = [];
      if (!module.children) module.children = [];
      return module;
    };
  })();
  __nccwpck_require__.ab = __dirname + '/';
  return __nccwpck_require__(9031);
})();
