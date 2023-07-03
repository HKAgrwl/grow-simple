exec : npx create-react-app grow-simple
exec : npm i react-google-maps //did not use (may remove later)

Added Leaflet map using leaflet and react-leaflet.
Used leaflet-Routing-Machine for routing between two points, The waypoints are passed as 'start'
and 'end' props to the RoutingMachine() function. Since the route is diplayed when the function
is first loaded, useEffect has been used for reredering the updated route whenever there is 
a change in 'start' or 'end'.

Home.js contains the form and controls for entering delivery locations.I have used a free 
geocoding API to get the latitude and longitude of the entered location which are extracted
from the response header.The delivaryLocation,latitude,longitude,id are stored in an aaray 
of objects : "locationList"."location" is used to temporarily store the user input.

Then, I setup a global context for the app under 'context' folder.



