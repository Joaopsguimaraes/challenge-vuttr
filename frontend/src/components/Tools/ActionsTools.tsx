import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useTool } from '../../hooks/useTool';

import { Button } from '../../shared/components/Button';

export const ActionsTools = () => {
  const [searchName, setSearchName] = useState<string | null>();
  const navigate = useNavigate();
  const { searchTool } = useTool((state) => state);

  async function handleSearchTools() {
    searchTool(searchName!).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="w-[768px] m-auto flex mt-8 justify-between items-center">
      <div className="flex px-3 py-1 items-center border border-solid rounded-md border-gray-700  hover:border-gray-900 focus:border-gray-900 focus:outline-none transition-all ease-linear">
        <MagnifyingGlass className="text-gray-800 text-lg " />
        <input
          type="text"
          placeholder="Search tools"
          className="w-64 h-8 border-none bg-transparent text-gray-900  px-3 py-0.5 focus:outline-none transition-all ease-linear placeholder:text-gray-500"
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button
          className="px-2 bg-zinc-300 rounded-lg hover:text-blue-500 transition-all ease-linear"
          onClick={handleSearchTools}
        >
          search
        </button>
      </div>
      <Button
        type="button"
        onClick={() => {
          navigate('/create');
        }}
      >
        <FiPlus fontWeight="bold" fontSize={18} />
        New
      </Button>
    </div>
  );
};
