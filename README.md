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

In the EmailJS portal, you will need to create an email template with the parameters:

1. `email` - the email address
2. `message` - the email body
3. `completed_puzzle` - gives a YES or NO based on if the user completed the logo puzzle

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

DEPLOYMENT
-------------

To deploy to AWS

1. `npm run build` to build the production ready site
2. Use `aws cli` or the AWS S3 Console to upload the code. Please only upload the `build` folder
3. Set up an EmailJS account
4. Make sure you have an env file in your s3 bucket with the relevant data (above)