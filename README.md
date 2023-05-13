# Word Occurrence Histogram

This is a React.js application that fetches the contents of a text file, counts the frequency of occurrence of each word, and displays a histogram of the 20 most occurring words on the frontend.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and visit `http://localhost:3000` to see the application.

## Dependencies

This project utilizes the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **recharts**: A composable charting library for React.
- **useState**: A React hook for managing state within functional components.

## Components

### App

The `App` component is the main entry point of the application. It contains the state for the histogram data and loading status. It fetches the text file content from the given URL, counts the word occurrences, and updates the histogram data state accordingly. It also provides a button to export the histogram data as a CSV file.

#### Methods

- **fetchData**: A function that fetches the text file content, counts word occurrences, and updates the histogram data state.
- **exportCSV**: A function that generates a CSV file from the histogram data and triggers its download.

#### Dependencies

- **BarChart**: A component from the `recharts` library used to render the bar chart.
- **Bar**: A component from the `recharts` library used to render the bars in the chart.
- **XAxis**: A component from the `recharts` library used to render the X-axis of the chart.
- **YAxis**: A component from the `recharts` library used to render the Y-axis of the chart.
- **CartesianGrid**: A component from the `recharts` library used to render the grid lines in the chart.
- **Tooltip**: A component from the `recharts` library used to display tooltips on the chart.
- **Legend**: A component from the `recharts` library used to render the legend of the chart.

## Usage

1. On the initial load, only a "Submit" button is displayed.
2. Clicking the "Submit" button triggers the `fetchData` function.
3. The content of the text file located at `https://www.terriblytinytales.com/test.txt` is fetched.
4. The content is parsed, and the frequency of occurrence of each word is counted.
5. The top 20 most occurring words are extracted and used to update the histogram data state.
6. If there was an error during the fetch request, an error message is logged to the console.
7. The loading status is toggled during the fetch request.
8. Once the histogram data is available, a bar chart is rendered with the top 20 words and their occurrences.
9. The X-axis represents the top 20 words with the highest occurrence, and the Y-axis represents the number of times each word occurred in the file.
10. An "Export" button is provided to download a CSV file containing the histogram data.
11. Clicking the "Export" button triggers the `exportCSV` function, generating the CSV file and initiating its download.

Feel free to modify and customize the code according to your requirements.
