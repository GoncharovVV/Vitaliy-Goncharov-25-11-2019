const weatherShort = [
  {
    LocalObservationDateTime: '2019-11-27T13:21:00+02:00',
    EpochTime: 1574853660,
    WeatherText: 'Cloudy',
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: { Value: 1.1, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 34.0, Unit: 'F', UnitType: 18 }
    },
    MobileLink: 'http://m.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us',
    Link: 'http://www.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us'
  }
];
const autocomplite = [
  {
    Version: 1,
    Key: '323903',
    Type: 'City',
    Rank: 21,
    LocalizedName: 'Kharkiv',
    Country: { ID: 'UA', LocalizedName: 'Ukraine' },
    AdministrativeArea: { ID: '63', LocalizedName: 'Kharkiv' }
  },
  {
    Version: 1,
    Key: '1215508',
    Type: 'City',
    Rank: 85,
    LocalizedName: 'Kharkivske',
    Country: { ID: 'UA', LocalizedName: 'Ukraine' },
    AdministrativeArea: { ID: '14', LocalizedName: "Donets'k" }
  },
  {
    Version: 1,
    Key: '1215506',
    Type: 'City',
    Rank: 85,
    LocalizedName: 'Kharkivtsi',
    Country: { ID: 'UA', LocalizedName: 'Ukraine' },
    AdministrativeArea: { ID: '53', LocalizedName: 'Poltava' }
  },
  {
    Version: 1,
    Key: '1215510',
    Type: 'City',
    Rank: 85,
    LocalizedName: 'Kharkivka',
    Country: { ID: 'UA', LocalizedName: 'Ukraine' },
    AdministrativeArea: { ID: '59', LocalizedName: 'Sumy' }
  },
  {
    Version: 1,
    Key: '1215507',
    Type: 'City',
    Rank: 85,
    LocalizedName: 'Kharkivtsi',
    Country: { ID: 'UA', LocalizedName: 'Ukraine' },
    AdministrativeArea: { ID: '68', LocalizedName: "Khmel'nyts'kyy" }
  }
];
const Cities = [
  {
    id: '323903',
    localizedName: 'Kharkiv',
    country: 'Ukraine',
    administrative: 'test'
  },
  {
    id: '1215508',
    localizedName: 'Kharkivske',
    country: 'Rus',
    administrative: 'test'
  },
  {
    id: '1215506',
    localizedName: 'Kharkivtsi',
    country: 'Ne rus',
    administrative: 'test'
  },
  {
    id: '1215510',
    localizedName: 'Kharkivka',
    country: 'NDND',
    administrative: 'test'
  },
  {
    id: '1215507',
    localizedName: 'Kharkivtsi',
    country: 'Test',
    administrative: 'test'
  }
];
const weatherFewDaysResp = {
  Headline: {
    EffectiveDate: '2019-11-29T07:00:00+02:00',
    EffectiveEpochDate: 1575003600,
    Severity: 4,
    Text: 'Rain Friday',
    Category: 'rain',
    EndDate: '2019-11-29T19:00:00+02:00',
    EndEpochDate: 1575046800,
    MobileLink:
      'http://m.accuweather.com/en/ua/kharkiv/323903/extended-weather-forecast/323903?lang=en-us',
    Link: 'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?lang=en-us'
  },
  DailyForecasts: [
    {
      Date: '2019-11-27T07:00:00+02:00',
      EpochDate: 1574830800,
      Temperature: {
        Minimum: { Value: 32.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 34.0, Unit: 'F', UnitType: 18 }
      },
      Day: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light'
      },
      Night: { Icon: 38, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&lang=en-us'
    },
    {
      Date: '2019-11-28T07:00:00+02:00',
      EpochDate: 1574917200,
      Temperature: {
        Minimum: { Value: 34.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 38.0, Unit: 'F', UnitType: 18 }
      },
      Day: { Icon: 6, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Night: { Icon: 7, IconPhrase: 'Cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&lang=en-us'
    },
    {
      Date: '2019-11-29T07:00:00+02:00',
      EpochDate: 1575003600,
      Temperature: {
        Minimum: { Value: 41.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 44.0, Unit: 'F', UnitType: 18 }
      },
      Day: {
        Icon: 18,
        IconPhrase: 'Rain',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light'
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Moderate'
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&lang=en-us'
    },
    {
      Date: '2019-11-30T07:00:00+02:00',
      EpochDate: 1575090000,
      Temperature: {
        Minimum: { Value: 30.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 43.0, Unit: 'F', UnitType: 18 }
      },
      Day: { Icon: 6, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Night: { Icon: 38, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&lang=en-us'
    },
    {
      Date: '2019-12-01T07:00:00+02:00',
      EpochDate: 1575176400,
      Temperature: {
        Minimum: { Value: 26.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 34.0, Unit: 'F', UnitType: 18 }
      },
      Day: { Icon: 4, IconPhrase: 'Intermittent clouds', HasPrecipitation: false },
      Night: { Icon: 36, IconPhrase: 'Intermittent clouds', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&lang=en-us'
    }
  ]
};
const weatherFewDays = [
  {
    id: 'lw1',
    date: '2019-11-27T07:00:00+02:00',
    temperatureImp: '32.0 F',
    temperatureMetr: '0 C',
    type:'Showers',
    icon: 12
  },
  {
    id: 'lw2',
    date: '2019-11-28T07:00:00+02:00',
    temperatureImp: '34.0 F',
    temperatureMetr: '1 C',
    type: 'Mostly cloudy',
    icon: 6
  },
  {
    id: 'lw3',
    date: '2019-11-29T07:00:00+02:00',
    temperatureImp: '41.0 F',
    temperatureMetr: '5 C',
    icon: 18,
    type: 'Rain',
  },
  {
    id: 'lw4',
    date: '2019-11-30T07:00:00+02:00',
    temperatureImp: '30.0 F',
    temperatureMetr: '-1 C',
    icon: 6,
    type: 'Mostly cloudy'
  },
  {
    id: 'lw5',
    date: '2019-12-01T07:00:00+02:00',
    temperatureImp: '26.0 F',
    temperatureMetr: '-3 C',
    icon: 4,
    type: 'Intermittent clouds'
  }
];
const favouritesList: Array<{title: string, cityKey: number}> = [

];
const cels = {
  Headline: {
    EffectiveDate: '2019-11-29T07:00:00+02:00',
    EffectiveEpochDate: 1575003600,
    Severity: 4,
    Text: 'Rain Friday',
    Category: 'rain',
    EndDate: '2019-11-29T19:00:00+02:00',
    EndEpochDate: 1575046800,
    MobileLink:
      'http://m.accuweather.com/en/ua/kharkiv/323903/extended-weather-forecast/323903?unit=c&lang=en-us',
    Link:
      'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?unit=c&lang=en-us'
  },
  DailyForecasts: [
    {
      Date: '2019-11-27T07:00:00+02:00',
      EpochDate: 1574830800,
      Temperature: {
        Minimum: { Value: -0.2, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 1.2, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light'
      },
      Night: { Icon: 38, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&unit=c&lang=en-us'
    },
    {
      Date: '2019-11-28T07:00:00+02:00',
      EpochDate: 1574917200,
      Temperature: {
        Minimum: { Value: 1.3, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 3.5, Unit: 'C', UnitType: 17 }
      },
      Day: { Icon: 6, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Night: { Icon: 7, IconPhrase: 'Cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&unit=c&lang=en-us'
    },
    {
      Date: '2019-11-29T07:00:00+02:00',
      EpochDate: 1575003600,
      Temperature: {
        Minimum: { Value: 5.1, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 6.9, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 18,
        IconPhrase: 'Rain',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light'
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Moderate'
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&unit=c&lang=en-us'
    },
    {
      Date: '2019-11-30T07:00:00+02:00',
      EpochDate: 1575090000,
      Temperature: {
        Minimum: { Value: -1.1, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 6.3, Unit: 'C', UnitType: 17 }
      },
      Day: { Icon: 6, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Night: { Icon: 38, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&unit=c&lang=en-us'
    },
    {
      Date: '2019-12-01T07:00:00+02:00',
      EpochDate: 1575176400,
      Temperature: {
        Minimum: { Value: -3.4, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 0.9, Unit: 'C', UnitType: 17 }
      },
      Day: { Icon: 4, IconPhrase: 'Intermittent clouds', HasPrecipitation: false },
      Night: { Icon: 36, IconPhrase: 'Intermittent clouds', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&unit=c&lang=en-us'
    }
  ]
};
export {
  autocomplite,
  weatherShort,
  weatherFewDaysResp,
  weatherFewDays,
  favouritesList,
  cels,
  Cities
}