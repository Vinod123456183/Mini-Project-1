import Item from "./index"; // Ensure correct import path

const MovingDiv2 = () => {
  return (
    <div className=" mb-20  mx-auto w-full ">
      <div className=" text-gray-600  flex items-center mx-auto justify-between gap-10">
        {Item.map((item) => (
          <div key={item.id} className="    p-2   ">
            <img src={item.src} alt={item.alt} className="md:h-10 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingDiv2;
