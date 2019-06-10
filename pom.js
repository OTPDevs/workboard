
/*
 * Pomegranate Application: workboardOTP
 * Created On: Mon Jun 10 2019
 *
 * Pomegranate application start up.
 *
 */

'use strict';

const Pomegranate = require('pomegranate')
const PomSettings = require('./PomegranateSettings')

async function startPomegranate(){
  const Pom = await Pomegranate.Run(PomSettings)
  Pom.start()
}

module.exports = ((Env) => {
  if(Env.POM_COMMAND_MODE){
    return {PomSettings, Pomegranate}
  }
  
  startPomegranate()

})(process.env)

