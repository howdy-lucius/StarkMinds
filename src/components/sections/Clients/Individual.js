import variables from "../../../scss/_exports.module.scss";

function Individual() {
    return (
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.2 214.67">
            <path
                d="M55.26,204.7c-.49,5.48-5.39,9.97-10.89,9.97H23.19c-5.5,0-10.45-4.48-10.99-9.96L.07,81.94c-.54-5.48,2.21-13.13,6.12-17.01,0,0,5.64-5.59,26.87-5.59s26.87,5.59,26.87,5.59c3.91,3.88,6.71,11.54,6.22,17.02l-10.89,122.75Z"
                fill={variables['stark-dark']} />
            <ellipse cx="33.06" cy="32.17" rx="26.11" ry="32.17" fill={variables['stark-dark']} />
        </svg>
    )
}

export default Individual;