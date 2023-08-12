# IP Address Tracker Frontend App

This is a frontend application that allows users to track IP addresses and view their corresponding geographical and network information. This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).T

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Components](#components)
- [Challenge Requirements](#challenge-requirements)
- [Technology Used](#Technologies-Used)

## Description

The IP Address Tracker app is a solution to the IP Address Tracker challenge provided by Frontend Mentor. It fetches geo-location and network information based on the user's input IP address or their current IP address. The app consists of several React components, each responsible for a specific part of the functionality:

- `App`: The main component that orchestrates data fetching, handling user input, and rendering other components.
- `Search`: A component for inputting IP addresses or domains.
- `Result`: Displays the tracked IP address's geographical and network information.
- `Map`: Renders a map with a marker at the specified latitude and longitude.

## Components

### App

The main component that manages the state and handles data fetching. It renders the following child components:

- `Search`: Allows users to input IP addresses or domains.
- `Result`: Displays tracked IP address information.
- `Map`: Displays a map with a marker at the specified latitude and longitude.

### Search

This component provides an input field for users to enter IP addresses or domains and a search button to initiate tracking.

### Result

Displays the tracked IP address's geographical and network information, including IP address, location, timezone, and ISP.

### Map

Renders a Leaflet map with a marker at the specified latitude and longitude. Uses the `react-leaflet` library.

## Challenge Requirements

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


## Technologies Used

- React: JavaScript library for building user interfaces.
- HTML: Markup language for structuring the web page.
- CSS: Styling the components and layout.

