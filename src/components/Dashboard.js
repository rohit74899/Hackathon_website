
import * as React from 'react';
import { useState  ,useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



function Dashboard() {
    


    const [userInput, setUserInput] = useState('');
  const [chartData, setChartData] = useState({ xAxis: [], series: [] });

  // Step 2: Handle form submissions to update localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Split user input by commas (assuming it's a comma-separated list)
    const inputArray = userInput.split(',');

    // Step 3: Store data in localStorage
    localStorage.setItem('userChartData', JSON.stringify(inputArray));
  };
    
      // Step 4: Read data from localStorage and update the chartData state
  useEffect(() => {
    const storedData = localStorage.getItem('userChartData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setChartData({
        xAxis: [{ scaleType: 'band', data: parsedData }],
        series: [{ data: parsedData.map(Number) }],
      });
    }
  }, []);
    return (
      <>
     

     <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter data (comma-separated)"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Step 4: Render the bar chart */}
      <BarChart
        xAxis={chartData.xAxis}
        series={chartData.series}
        width={500}
        height={300}
      />
            {/* <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
            /> */}
 
      </>
        
    );
}

export default Dashboard







