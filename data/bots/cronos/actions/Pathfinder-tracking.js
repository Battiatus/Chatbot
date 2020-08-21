  const axios = require('axios')

  /**
   * Gets shipment status
   * @title Get Shipment status
   * @category Shipment tracking
   * @author Kronos
   */

  const myAction = async () => {
    const config = await bp.config.getModuleConfig('examples')
    const awb = user.awb
    const prefix = user.prefix
    let response

    try {
      response = await axios.get(
        `https://back-end-2.azurewebsites.net/getAWB?serial=${awb}&prefix=${prefix}`
        //`https://back-end-2.azurewebsites.net/getAWB?serial=88888888&prefix=191`
        //`https://back-end-2.azurewebsites.net/getAWB?serial=12211065&prefix=612`
      )
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Request failed with status code 401. ')
      }
      console.log(error.error)
      throw error
    }

    var statusNames = {
      RCF: 'Received from flight',
      RCS: 'Received from shipper',
      DEP: 'Departed',
      DLV: 'Delivered',
      NFD: 'Notified consignee',
      DEP_TRUCK: 'Departed on truck',
      MAN: 'Manifested'
    }
    // const updatetime = new (response.data.status_info.length > 0 ? response.data.status_info[0].time_stamp : '')()
    // //const d = new Date('2010-08-05')
    // const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(updatetime)
    // const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(updatetime)
    // const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(updatetime)

    const origin = response.data.awb_info.origin
    const destination = response.data.awb_info.dest
    const awbnumber = response.data.awb_info.serial
    const airlinecode = response.data.awb_info.prefix
    const weight = response.data.awb_info.weight
    const volume = response.data.awb_info.volume
    const pieces = response.data.awb_info.pieces

    //status.info node

    const updatetime = response.data.status_info.length > 1 ? response.data.status_info[0].time_stamp : ''
    const lastweight = response.data.status_info.length > 1 ? response.data.status_info[0].weight : ''
    const lastpieces = response.data.status_info.length > 1 ? response.data.status_info[0].pieces : ''
    const laststatus = response.data.status_info.length > 1 ? response.data.status_info[0].status : ''
    const lastposition = response.data.status_info.length > 1 ? response.data.status_info[0].airport : ''

    //flight details

    //*Segment #1

    const flightsorigin = response.data.flights.length > 1 ? response.data.flights[0].origin : ''
    const flightsdest = response.data.flights.length > 1 ? response.data.flights[0].dest : ''
    const flightscarrier = response.data.flights.length > 1 ? response.data.flights[0].carrier : ''
    const flightnumber = response.data.flights.length > 1 ? response.data.flights[0].flight_number : ''
    const flightsaircraft = response.data.flights.length > 1 ? response.data.flights[0].aircraft_type : ''
    const flightsdep = response.data.flights.length > 1 ? response.data.flights[0].departure_date : ''
    const flightsarrival = response.data.flights.length > 1 ? response.data.flights[0].arrival_date : ''
    const flightspieces = response.data.flights.length > 1 ? response.data.flights[0].pieces : ''
    const flightsweight = response.data.flights.length > 1 ? response.data.flights[0].weight : ''

    //*Segment #2

    const flightsorigin2 = response.data.flights.length > 2 ? response.data.flights[1].origin : ''
    const flightsdest2 = response.data.flights.length > 2 ? response.data.flights[1].dest : ''
    const flightscarrier2 = response.data.flights.length > 2 ? response.data.flights[1].carrier : ''
    const flightnumber2 = response.data.flights.length > 2 ? response.data.flights[1].flight_number : ''
    const flightsaircraft2 = response.data.flights.length > 2 ? response.data.flights[1].aircraft_type : ''
    const flightsdep2 = response.data.flights.length > 2 ? response.data.flights[1].departure_date : ''
    const flightsarrival2 = response.data.flights.length > 2 ? response.data.flights[1].arrival_date : ''
    const flightspieces2 = response.data.flights.length > 2 ? response.data.flights[1].pieces : ''
    const flightsweight2 = response.data.flights.length > 2 ? response.data.flights[1].weight : ''

    //*Segment #3

    const flightsorigin3 = response.data.flights.length > 3 ? response.data.flights[2].origin : ''
    const flightsdest3 = response.data.flights.length > 3 ? response.data.flights[2].dest : ''
    const flightscarrier3 = response.data.flights.length > 3 ? response.data.flights[2].carrier : ''
    const flightnumber3 = response.data.flights.length > 3 ? response.data.flights[2].flight_number : ''
    const flightsaircraft3 = response.data.flights.length > 3 ? response.data.flights[2].aircraft_type : ''
    const flightsdep3 = response.data.flights.length > 3 ? response.data.flights[2].departure_date : ''
    const flightsarrival3 = response.data.flights.length > 3 ? response.data.flights[2].arrival_date : ''
    const flightspieces3 = response.data.flights.length > 3 ? response.data.flights[2].pieces : ''
    const flightsweight3 = response.data.flights.length > 3 ? response.data.flights[2].weight : ''

    temp.status = {
      origin,
      destination,
      updatetime,
      laststatus,
      lastposition,
      awbnumber,
      airlinecode,
      weight,
      volume,
      pieces,
      lastweight,
      lastpieces,
      flightsorigin,
      flightsdest,
      flightscarrier,
      flightnumber,
      flightsaircraft,
      flightsdep,
      flightsarrival,
      flightspieces,
      flightsweight,
      flightsorigin2,
      flightsdest2,
      flightscarrier2,
      flightnumber2,
      flightsaircraft2,
      flightsdep2,
      flightsarrival2,
      flightspieces2,
      flightsweight2,
      flightsorigin3,
      flightsdest3,
      flightscarrier3,
      flightnumber3,
      flightsaircraft3,
      flightsdep3,
      flightsarrival3,
      flightspieces3,
      flightsweight3
    }
  }

  return myAction()
  //# sourceMappingURL=getshipmenttracking.js.map