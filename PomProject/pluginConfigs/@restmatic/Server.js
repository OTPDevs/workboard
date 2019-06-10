/*
 * Runtime settings for plugin: @restmatic/Server
 * Created On: Mon Jun 10 2019
 * Created with "pomegranate build config -e"
 *
 * The Env parameter in the function below refers to process.env
 * feel free to use it as such.
 */

module.exports = function(Env){
  return {
    RouteSecurity: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {}
    },
    Core: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        routerOptions: {
          caseSensitive: true,
          mergeParams: false,
          strict: false
        }
      }
    },
    ExpressConfiguration: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {}
    },
    CaptureError: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {}
    },
    BundledMiddleware: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        skipLogging: [
          '/health'
        ]
      }
    },
    Middleware: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {}
    },
    StaticFiles: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        serve: true
      }
    },
    PreRouter: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        middlewareOrder: [
          'compression',
          'serveStatic',
          'responseTime',
          'logger'
        ]
      }
    },
    Router: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {}
    },
    PostRouter: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        middlewareOrder: [
          '404',
          '500'
        ]
      }
    },
    ExpressServer: {
      config: {
        disabled: false,
        additionalDependencies: [],
        //logLevel: 0,
        //timeout: 10000
      },
      variables: {
        port: 8080,
        address: 'localhost'
      }
    }
  }
}
