import styles from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Loading from './components/Loading/Loading'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import useWeather from './hooks/useWeather'
function App() {

const {fetchWeather, weather, loading, hasWeatherData, noFound} = useWeather()
  
  return (
    <>
     <h1 className={styles.title}>Buscador de Clima</h1>
    
    <div className={styles.container}>

      <Form
      fetchWeather= {fetchWeather}
      />
      {loading && <Loading/>}
      {hasWeatherData && <WeatherDetails weather={weather}/> }
      {noFound && <Alert>Ciudad No Encontrada</Alert>}
     
    </div>
    </>
  )
}

export default App
