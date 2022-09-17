import { BackgroundNewTool } from '../assets/background-new-tool';
import { FormNewTool } from '../components/Tools/FormNewTool';

export function CreateTool() {
  return (
    <div className="w-[100vw] h-[80vh] flex flex-col gap-4 items-center justify-center ">
      <div className="flex w-60 h-40 items-center justify-center mr-auto absolute top-28 left-1">
        <BackgroundNewTool />
      </div>
      <FormNewTool />
    </div>
  );
}
