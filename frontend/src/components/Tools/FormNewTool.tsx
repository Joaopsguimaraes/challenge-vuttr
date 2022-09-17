import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

import { useActionsSystemByRoutes } from '../../hooks/useActionsSystem';
import { ITool, useTool } from '../../hooks/useTool';
import { Button } from '../../shared/components/Button';
import { Textfield } from '../../shared/components/Textfield';
import {
  defaultToolsForm,
  INewToolType,
  newToolSchema
} from '../../shared/validations';

export const FormNewTool = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, setValue, reset } = useForm<INewToolType>({
    resolver: zodResolver(newToolSchema),
    defaultValues: defaultToolsForm
  });
  const location = useLocation();
  const stateLocation = location.state as ITool;
  const { createNewTool, getOneTool, editTool } = useTool((state) => state);
  const { isActionEdit, isActionView, actionRoutes, actions } =
    useActionsSystemByRoutes((state) => state);

  const handleActionsRoutes = useCallback(() => {
    actionRoutes(location);
  }, [location.pathname]);

  const verifyActionRouteIsView = useCallback(() => {
    isActionView() &&
      getOneTool(stateLocation.id).then((tool) => {
        reset(tool);
      });
  }, [location.pathname]);

  const verifyActionRouteIsEdit = useCallback(() => {
    isActionEdit() &&
      getOneTool(stateLocation.id).then((tool) => {
        setValue('title', tool.title);
        setValue('url', tool.url);
        setValue('tags', tool.tags);
        setValue('description', tool.description);
      });
  }, [location.pathname]);

  function handleEditTool(data: INewToolType) {
    editTool(stateLocation.id, data)
      .then(() => {
        toast.success('Tool has edited!');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  async function onSubmitForm(data: INewToolType) {
    isActionEdit()
      ? handleEditTool(data)
      : createNewTool(data)
          .then(() => {
            toast.success('Tool created successfully');
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
          });
  }

  useEffect(() => {
    handleActionsRoutes(), verifyActionRouteIsEdit(), verifyActionRouteIsView();
  }, [location.pathname]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col gap-4 w-[900px] border-gray-100 bg-slate-50 rounded-xl shadow-xl"
    >
      <h2 className="text-xl text-gray-100 flex-1 bg-blue-700 p-4">
        New tool 🚀
      </h2>
      <div className="flex flex-col items-center px-8 pb-4 ">
        <Controller
          control={control}
          name="title"
          render={({ field }) => {
            return (
              <Textfield
                label="Name"
                type="text"
                id="title"
                placeholder="Link to your tool"
                disabled={actions.view}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="url"
          render={({ field }) => {
            return (
              <Textfield
                label="Link"
                type="text"
                id="url"
                placeholder="Link to your tool"
                disabled={actions.view}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field }) => {
            return (
              <Textfield
                label="Tags"
                type="text"
                id="tags"
                placeholder="Tags separated by commas"
                disabled={actions.view}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => {
            return (
              <Textfield
                multipleLine
                label="Description"
                type="text"
                id="description"
                placeholder="Link to your tool"
                disabled={actions.view}
                {...field}
              />
            );
          }}
        />
        <div className="w-full mt-10 flex items-center gap-4 justify-end">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              navigate('/');
            }}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={actions.view}>
            {actions.create ? 'Create' : 'Salve'}
          </Button>
        </div>
      </div>
    </form>
  );
};
