/*
* Pomegranate Application: workboardOTP
* Created On: Mon Jun 10 2019
*
* Pomegranate Runtime Settings.
*
*/

module.exports = {
  buildDirectory: '.PomBuild', // Compiled output
  projectDirectory: 'PomProject', // Local plugins, plugin configs, plugin application directories live here.
  applicationDirectory: './application', // Main directory for plugins to store files.
  pluginDirectory: './plugins', // Local plugin directory.
  pluginConfigDirectory: './pluginConfigs', // Plugin settings and variables.
  pluginNamespaces: ['restmatic'], // Loads plugins from these namespaces. Internally contains @pomOfficial and @pomApplications
  logger: console, // The logging interface to use.
  timeout: 2000, // Global plugin hook timeout
  logLevel: 2, // Verbocity
  colorOutput: true, // Pretty console?
  telemetry: true // Enables anonymous collection of statistical data from the Pomegranate CLI.
}
