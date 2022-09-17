import * as zod from 'zod';

export type INewToolType = zod.infer<typeof newToolSchema>;

export const defaultToolsForm: INewToolType = {
  title: '',
  url: '',
  description: '',
  tags: ''
};

export const newToolSchema = zod.object({
  title: zod.string(),
  url: zod.string(),
  description: zod.string(),
  tags: zod.string()
});
