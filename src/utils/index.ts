export const formatTemperature = (temperature : number) : number => {
    const kervin = 273.15
    return parseInt((temperature - kervin).toString())
}