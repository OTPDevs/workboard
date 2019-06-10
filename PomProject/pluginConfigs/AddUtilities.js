/*
 * Runtime settings for plugin: AddUtilities
 * Created On: Mon Jun 10 2019
 * Created with "pomegranate build config -e"
 *
 * The Env parameter in the function below refers to process.env
 * feel free to use it as such.
 */

module.exports = function(Env){
  return {
    config: {
      disabled: false,
      additionalDependencies: [],
      //logLevel: 0,
      //timeout: 10000
    },
    variables: {
      Utilities: {
        HelloPomegranate: () => {
              // These can be Objects, Functions, Strings etc. that don' need any other Dependencies.
              console.log('Hello, I am a function that has been added to the injector.');
          }
      }
    }
  }
}
