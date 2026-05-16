import { Link } from "react-router-dom";

const HomeBottomSection = () => {
  return (
    <>
      <div
        className="
          w-full
          font-[font2]
          flex
          justify-center
          items-center
          px-4
          pb-2
        "
      >
        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-3
            w-full
            max-w-[90%]
          "
        >
          {["Agency", "Work"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="
                border-2
                border-amber-50/70
                uppercase
                rounded-full
                text-center

                w-full
                sm:flex-1

                px-6
                py-4

                text-[1.5rem]
                sm:text-[clamp(24px,4.5vw,56px)]

                leading-tight
                text-amber-50

                transition-all
                duration-300

                hover:bg-amber-50
                hover:text-black
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBottomSection;