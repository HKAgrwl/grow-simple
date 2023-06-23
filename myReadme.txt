exec : npx create-react-app grow-simple
exec : npm i react-google-maps

Added Leaflet map using leaflet and react-leaflet.
Used leaflet-Routing-Machine for routing between two points, The waypoints are apssed as 'start'
and 'end' props to the RoutingMachine() function. Since the route is diplayed when the function
is first loaded, useEffect has been used for reredering the updated route whenever there is 
a change in 'start' or 'end'.

