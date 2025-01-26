/* eslint-disable react/prop-types */


const Heading2 = ({title,subtitle}) => {
    return (
        <div className="bg-[#9538E2] text-center p-9 w-11/12 mx-auto space-y-4">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div className="flex gap-3 items-center justify-center">
     
            </div>
        </div>
    );
};

export default Heading2;