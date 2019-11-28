import * as React from 'react';
import { WeatherServiceConsumer } from '../WeatherServiceContext';

const WithWeatherService = (Wrapped:any, mapMethodsToProps: any) => {
  return (props:any) => {
    return (
      <WeatherServiceConsumer>
        {
          (weatherService:any) => {
            const serviceProps = mapMethodsToProps(weatherService)
            return (
              <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </WeatherServiceConsumer>
    )
  }
}

export default WithWeatherService;