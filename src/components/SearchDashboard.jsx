import { IoSearch } from "react-icons/io5";

export default function SearchForm() {
  return (
    <form className="flex items-center">
      <div className="relative w-1/2">
        <input
          type="text"
          className="bg-[#0E1421] py-4 px-7 w-full rounded-[20px] pr-10 text-[#676B73]"
          placeholder="enter your city name..."
        />
        <button>
          <IoSearch className="absolute right-5 top-3 text-[#742BEC] w-7 h-7" />
        </button>
      </div>
    </form>
  );
}
