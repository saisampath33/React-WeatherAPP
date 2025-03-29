import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";
import type { WeatherData, GeocodingResponse } from "@/api/types";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

export function CurrentWeather({ data, locationName }: CurrentWeatherProps) {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  // Format temperature
  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 shadow-lg border-none rounded-lg">
      <CardContent className="p-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Location and Weather Info */}
          <div className="space-y-6 text-white">
            <div className="space-y-2">
              <div className="flex items-center">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {locationName?.name}
                </h2>
                {locationName?.state && (
                  <span className="ml-2 text-lg text-gray-300">
                    , {locationName.state}
                  </span>
                )}
              </div>
              <p className="text-lg text-gray-300">{locationName?.country}</p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-8xl font-bold tracking-tighter text-yellow-400">
                {formatTemp(temp)}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">
                  Feels like {formatTemp(feels_like)}
                </p>
                <div className="flex gap-3 text-sm font-medium">
                  <span className="flex items-center gap-1 text-blue-400">
                    <ArrowDown className="h-4 w-4" />
                    {formatTemp(temp_min)}
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <ArrowUp className="h-4 w-4" />
                    {formatTemp(temp_max)}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Droplets className="h-6 w-6 text-blue-300" />
                <div className="space-y-1">
                  <p className="text-lg font-medium">Humidity</p>
                  <p className="text-lg text-gray-300">{humidity}%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="h-6 w-6 text-blue-300" />
                <div className="space-y-1">
                  <p className="text-lg font-medium">Wind Speed</p>
                  <p className="text-lg text-gray-300">{speed} m/s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Icon & Description */}
          <div className="flex flex-col items-center justify-center rounded-lg">
            <div className="relative flex aspect-square w-full max-w-[250px] items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
                alt={currentWeather.description}
                className="h-full w-full object-contain drop-shadow-lg"
              />
              <div className="absolute bottom-0 text-center bg-black/40 rounded-lg px-2 py-1">
                <p className="text-lg font-medium capitalize text-white">
                  {currentWeather.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
