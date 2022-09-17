import { CircleNotch } from 'phosphor-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { NoDataFound } from '../../assets/no-data-found';
import { ITool, useTool } from '../../hooks/useTool';
import { AlertDialog } from '../../shared/components/AlertDialog';

export function ToolList() {
  const { deleteTool, getAllTools, toolList } = useTool((state) => state);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  function handleDeleteTool(id: string) {
    deleteTool(id)
      .then(() => {
        toast.success('Tool deleted successfully');
        location.reload();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  useEffect(() => {
    getAllTools().then(() => {
      setIsFetching(false);
    });
  }, []);

  return (
    <main className="flex-col items-center justify-center m-auto mt-20">
      {toolList?.length === 0 && (
        <div className="w-[600px] h-[600px] flex flex-col flex-1 items-center justify-center m-auto">
          <span className="text-4xl text-zinc-700 font-bold">
            Don't have tools created yet 😢
          </span>
          <NoDataFound />
        </div>
      )}
      {isFetching ? (
        <div className="w-[100vw] h-[50vh] flex items-center justify-center">
          <CircleNotch
            weight="fill"
            className="w-28 h-28 animate-spin text-zinc-700"
          />
        </div>
      ) : (
        <>
          {toolList?.map((tool: ITool) => (
            <div
              key={tool.title}
              className="w-[768px] m-auto mb-6 bg-white shadow-md shadow-zinc-400 flex justify-between items-center flex-col rounded-md p-4"
            >
              <div className="flex justify-between w-full pl-4">
                <h2 className="text-2xl text-zinc-700 font-bold leading-tight tracking-wider">
                  {tool.title}
                </h2>
                <div className="flex items-start gap-2">
                  <button
                    className="text-blue-600 text-lg font-bold hover:text-blue-700 transition-all  ease-linear"
                    onClick={() => {
                      navigate(`view/${tool.id}`, {
                        state: tool
                      });
                    }}
                  >
                    <FiEye />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      navigate(`edit/${tool.id}`, {
                        state: tool
                      });
                    }}
                    className="text-green-600 text-lg font-bold hover:text-green-700 transition-all  ease-linear"
                  >
                    <FiEdit />
                  </button>
                  <AlertDialog
                    triggerOpenDialog={
                      <button>
                        <FiTrash2 className="text-red-500 text-lg font-bold hover:text-red-700 transition-all  ease-linear" />
                      </button>
                    }
                    title="Delete"
                    description="Are you sure you want to delete?"
                    handleRemoveTool={() => {
                      handleDeleteTool(tool.id);
                    }}
                  />
                </div>
              </div>
              <p className="text-gray-400 font-medium flex mr-auto pl-4 pt-6">
                <a
                  href={tool.url}
                  target="_blank"
                  className="hover:underline transition-all delay-200 ease-linear "
                >
                  {tool.url}
                </a>
              </p>
              <p className="text-zinc-700 font-medium flex mr-auto pl-4 pt-6">
                {tool.description}
              </p>
              <div className="w-full text-zinc-700 font-medium flex items-center justify-between mr-auto pl-4 pt-6">
                <div>
                  {tool.tags
                    ?.replace(/\s/g, '')
                    .split(',')
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-700 shadow-md shadow-zinc-400 rounded-full px-3 py-1 text-sm font-medium text-zinc-100 mr-2"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>
                <span className="text-xs text-zinc-400">{}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
