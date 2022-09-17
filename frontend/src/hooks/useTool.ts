import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';
import { INewToolType } from '../shared/validations';

import { api } from '../services/axios';

export type ITool = {
  id: string;
  title: string;
  url: string;
  description: string;
  tags?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

interface ToolsState {
  toolList: ITool[];
  createNewTool: (data: INewToolType) => Promise<void>;
  editTool: (id: string, data: INewToolType) => Promise<void>;
  deleteTool: (id: string) => Promise<void>;
  getOneTool: (id: string) => Promise<INewToolType>;
  getAllTools: () => Promise<void>;
  searchTool: (title: string) => Promise<void>;
}

export const useTool = create<ToolsState>((set) => ({
  toolList: [],
  createNewTool: async (tool: INewToolType) => {
    await api.post('/tools', {
      id: uuidv4(),
      title: tool.title,
      url: tool.url,
      tags: tool.tags,
      description: tool.description,
      createdAt: format(new Date(), 'dd/mm/yyyy'),
      updated: format(new Date(), 'dd/mm/yyyy')
    });
  },
  getAllTools: async () => {
    const { data } = await api.get('/tools');
    set(() => ({
      toolList: data
    }))
  },
  deleteTool: async (id: string) => {
    await api.delete(`/tools/${id}`);
  },
  editTool: async (id: string, data: INewToolType) => {
    await api.put(`/tools/${id}`, {
      ...data
    });
  },
  searchTool: async (title: string) => {
    await api.get(`/tools/${title}`);
  },
  getOneTool: async (id: string) => {
    const { data } = await api.get(`/tools/${id}`);

    return data;
  }
}));
