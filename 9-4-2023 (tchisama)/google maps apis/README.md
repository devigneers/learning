# google maps apis

### Step 1: Set Up Your Project

1. **Get an API Key**: Go to the [Google Cloud Console](https://console.cloud.google.com/), create a new project or use an existing one, and enable the Google Maps JavaScript API. Then, generate an API key.

2. **Configure API Key**: In your React project, create a `.env` file and add your API key:

   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
   ```

   Replace `YOUR_API_KEY_HERE` with your actual API key.

### Step 2: Install Dependencies

Install the necessary dependencies for your project:

```bash
npm install axios react-google-maps react-google-autocomplete
```

### Step 3: Create a Map Component

In your React project, create a `Map.js` component that will contain the map. Here's a basic example:

```jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ markers }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
```

### Step 4: Customize Styles

You can customize the map styles by adding a `mapOptions` object to your `GoogleMap` component. Here's an example:

```jsx
const mapOptions = {
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e9e9e9',
        },
        {
          lightness: 17,
        },
      ],
    },
    // Add more styles as needed
  ],
};

// Inside the GoogleMap component
<GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter} options={mapOptions}>
```

### Step 5: Custom Markers

To use custom markers, you can create your own `Marker` component and provide an icon image URL:

```jsx
<Marker
  key={index}
  position={marker.position}
  icon={{
    url: 'path/to/your/icon.png',
    scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
  }}
/>
```

### Step 6: Distance and Routes

To calculate distance between two points and display routes, you can use the Directions API from Google Maps. First, create a new component for handling routes:

```jsx
import React, { useEffect, useState } from 'react';
import { DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Route = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          console.error(`Directions request failed: ${status}`);
        }
      }
    );
  }, [origin, destination]);

  return directions ? <DirectionsRenderer directions={directions} /> : null;
};

export default Route;
```

Then, you can use the `Route` component in your main component to display the route between two points.

Remember to handle state and data flow as needed for your specific application.

### Step 7: Displaying Routes and Distances

You can use the `DirectionsService` to calculate routes and the `DistanceMatrixService` to calculate distances between multiple points. Be sure to import these services and use them in your components to achieve the desired functionality.

That's a basic guide to using the Google Maps API with React. Depending on your project's complexity, you may need to handle additional features like geocoding, info windows, or user interactions. Be sure to consult the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/overview) for more details and examples.