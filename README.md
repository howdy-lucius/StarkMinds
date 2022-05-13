Starks Minds
============

Welcome to the Stark Minds Homepage.

This site is built as a single page application using React. Specifically, we are using the [CRA structure of react](https://create-react-app.dev/).

Configuration
-------------

### Email

We are using [EmailJS](https://www.emailjs.com/) as an email service. This service relies on three environment variables to be set

1.  `REACT_APP_EMAILJS_SERVICE_ID`

2.  `REACT_APP_EMAILJS_TEMPLATE_ID`

3.  `REACT_APP_EMAILJS_PUBLIC_KEY`

### Marquee

The Grid section of the site features four marquees. Each marquee is a component that is populated with random facts from an array of sayings.

To add more sayings, please update the array in `src/components/sections/grid/Sayings.js`

### Styling

The styling of the site is handled with SASS. These styling files can be found in `src/scss`.

If you just want to update the brand styling site wide, please update `src/scss/_variables.scss` first

### About SVGS

SVG's are used a lot on this homepage. The SVG's are built as components so we can more easily use react goodies.

Most of the SVG animation is handled with a combination of react properties and css transitions.

The one expectation is the header logo animation, which is handled with the `lottie-react-web` package.