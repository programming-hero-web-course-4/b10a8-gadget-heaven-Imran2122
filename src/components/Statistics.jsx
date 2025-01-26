import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  // Transform data for Recharts
  const chartData = data.map((item) => ({
    name: item.product_title,
    price: item.price,
    rating: item.rating * 80, 
  }));

  return (
    <div className="w-full p-5">
      <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8A2BE2" name="Price" />
          <Bar dataKey="rating" fill="#FF4500" name="Rating" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
