  const axios = require('axios')

  /**
   * mail
   * @title send mail
   * @category send mail
   * @author Kronos
   */

  const myAction = async () => {
    const config = await bp.config.getModuleConfig('examples')
    const awb = user.awb
    const prefix = user.prefix
    const mail = user.mail
    let response

    try {
      response = await axios.get(
        `https://back-end-2.azurewebsites.net/sendAWB?email=${mail}&awb_prefix=${prefix}&awb_serial=${awb}&isMobile=false`
        //`https://back-end-2.azurewebsites.net/getAWB?serial=88888888&prefix=191`
      )
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Request failed with status code 401. Have you set up your OpenWeather API Key properly?')
      }

      throw error
    }
  }

  return myAction()
  //# sourceMappingURL=getshipmenttracking.js.map