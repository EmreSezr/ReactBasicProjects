# API Request React

This is a simple React application that demonstrates how to make API requests using the `axios` library. It allows you to fetch data from a specified API and display the results on the webpage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EmreSezr/apiRequestReact.git
   ```

2. Navigate to the project directory:

   ```bash
   cd apiRequestReact
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Axios 
* To make API requests to Unsplash and retrieve photos, you can utilize the Unsplash API. Unsplash is a popular platform that offers a vast collection of freely usable high-quality images.


* To get photos from Unsplash using their API, follow these steps:

* Sign up and create an application: To access the Unsplash API, you need to create an account on Unsplash and register a new application. This will provide you with an access key (API key) that you'll use to authenticate your requests.



Install Axios: Axios is a widely used JavaScript library for making HTTP requests. You can install Axios using npm or yarn:

```bash
npm install axios
 ```

* Change api.js with your Unsplash API key

```bash
axios
  .get('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID API_KEY`,
```

## Usage

1. Open the `src/App.js` file and replace the `API_URL` constant with the URL of the API you want to fetch data from.

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to see the application in action.

4. Click the "Fetch Data" button to make an API request. The response will be displayed on the webpage.

## Customization

You can customize the application according to your needs:

- Modify the UI in the `src/App.js` file to match your desired design.
- Add additional functionality or components to enhance the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was created by Emre Sezer as a demonstration of making API requests using React and the `axios` library. Special thanks to the React community and the developers of the dependencies used in this project.

## Contact

If you have any questions or feedback regarding this project, you can reach out to the project owner, Emre Sezer, through the GitHub repository mentioned above.
