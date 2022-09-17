import { Location } from 'react-router-dom';
import create from 'zustand';

type ActionsForm = {
  view: boolean;
  edit: boolean;
  create: boolean;
};

export enum Actions {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view'
}

interface IUseActionSystem {
  actions: ActionsForm;
  actionRoutes: (location: Location) => void;
  isActionView: () => boolean;
  isActionCreate: () => boolean;
  isActionEdit: () => boolean;
}

export const useActionsSystemByRoutes = create<IUseActionSystem>(
  (set, get) => ({
    actions: {
      view: false,
      create: false,
      edit: false
    },
    actionRoutes: (location: Location) =>
      set(() => ({
        actions: {
          view: location.pathname.includes(Actions.VIEW),
          create: location.pathname.includes(Actions.CREATE),
          edit: location.pathname.includes(Actions.EDIT)
        }
      })),
    isActionView: (): boolean => {
      return get().actions.view;
    },
    isActionCreate: (): boolean => {
      return get().actions.create;
    },
    isActionEdit: (): boolean => {
      return get().actions.edit;
    }
  })
);
