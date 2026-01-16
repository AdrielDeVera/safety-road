export type RouteStats = {
  lighting: number;
  crime_rate: number;
  foot_traffic: number;
};

export type RouteShapePoint = {
  latitude: number;
  longitude: number;
};

export type SafeRoute = {
  id: string;
  label: string;
  score: number;
  color: string;
  etaMinutes: number;
  distanceKm: number;
  stats: RouteStats;
  coordinates: RouteShapePoint[];
};

export const MOCK_ROUTES: SafeRoute[] = [
  {
    id: 'route_1',
    label: 'Safest Path (Queen St)',
    score: 94,
    color: '#4CAF50',
    etaMinutes: 18,
    distanceKm: 4.3,
    stats: { lighting: 90, crime_rate: 10, foot_traffic: 85 },
    coordinates: [
      { latitude: 43.6405, longitude: -79.3839 },
      { latitude: 43.6438, longitude: -79.3776 },
      { latitude: 43.6472, longitude: -79.3714 },
      { latitude: 43.6509, longitude: -79.3642 },
      { latitude: 43.6539, longitude: -79.3578 },
    ],
  },
  {
    id: 'route_2',
    label: 'Fastest Path (King St)',
    score: 72,
    color: '#FFC107',
    etaMinutes: 15,
    distanceKm: 4.0,
    stats: { lighting: 60, crime_rate: 30, foot_traffic: 90 },
    coordinates: [
      { latitude: 43.6405, longitude: -79.3839 },
      { latitude: 43.6419, longitude: -79.3785 },
      { latitude: 43.6446, longitude: -79.3722 },
      { latitude: 43.6473, longitude: -79.3660 },
      { latitude: 43.6499, longitude: -79.3601 },
    ],
  },
  {
    id: 'route_3',
    label: 'Quiet Path (Back Alleys)',
    score: 45,
    color: '#FF5722',
    etaMinutes: 20,
    distanceKm: 4.6,
    stats: { lighting: 20, crime_rate: 50, foot_traffic: 10 },
    coordinates: [
      { latitude: 43.6392, longitude: -79.3865 },
      { latitude: 43.6415, longitude: -79.3803 },
      { latitude: 43.6430, longitude: -79.3730 },
      { latitude: 43.6440, longitude: -79.3664 },
      { latitude: 43.6452, longitude: -79.3599 },
    ],
  },
];
