import { HomeTypeExamCard } from "./HomeTypeExamCard";

export const RadioSelectionType = ({ type, value, name }) => {
  <div className="flex flex-col justify-center items-center space-y-5">
    <HomeTypeExamCard type={type} />
    <input
      type="radio"
      value={value}
      name={name}
      className="accent-green-600 w-5 h-5 duration-300 transition-all"
    />
  </div>;
};
