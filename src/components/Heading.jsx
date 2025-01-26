/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle }) => {
  return (
    <div className="mt-4 text-center flex flex-col justify-center items-center space-y-4  w-11/12 mx-auto">
      <h2 className="text-2xl w-2/3 text-center">{title}</h2>
      <p className="w-2/3">{subtitle}</p>
    
    </div>
  );
};

export default Heading;
