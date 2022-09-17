import { blackA, gray } from '@radix-ui/colors';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { keyframes, styled } from '@stitches/react';
import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: '#e8e8e8',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
});

interface ContentProps extends AlertDialogPrimitive.AlertDialogContentProps {
  children: React.ReactNode;
}

function Content({ children, ...props }: ContentProps) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: gray.gray12,
  fontSize: '1.225rem',
  fontWeight: 500
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginTop: 20,
  marginBottom: 20,
  color: gray.gray12,
  fontSize: '1rem',
  lineHeight: 1.5
});

const AlertDialogRoot = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogContent = Content;
const AlertDialogTitle = StyledTitle;
const AlertDialogDescription = StyledDescription;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

interface AlertDialogProps extends AlertDialogPrimitive.AlertDialogProps {
  triggerOpenDialog: ReactNode;
  title: string;
  description: string;
  handleRemoveTool?: () => void;
}

const AlertDialogComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  AlertDialogProps
> = ({ triggerOpenDialog, title, description, handleRemoveTool }, ref) => (
  <AlertDialogRoot>
    <AlertDialogTrigger asChild>
      <span>{triggerOpenDialog}</span>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>{description}</AlertDialogDescription>
      <div className="flex gap-4 items-center justify-end">
        <AlertDialogCancel className="cursor-pointer gap-2 w-28 h-6 font-bold p-4 rounded-md items-center justify-center  border-solid border-2  shadow-sm shadow-gray-800 flex  hover:border-blue-600 focus:border-blue-800 focus:outline-none transition-all ease-linear bg-transparent text-zinc-700 border-zinc-700 hover:bg-zinc-200 hover:text-blue-700 focus:bg-zinc-200 focus:text-blue-700">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          type="button"
          className="cursor-pointer gap-2 w-28 h-6 font-bold p-4 rounded-md items-center justify-center  border-solid border-2  shadow-sm shadow-gray-800 flex  hover:border-blue-600 focus:border-blue-800 focus:outline-none transition-all ease-linear bg-blue-700 text-gray-200 border-blue-700  hover:bg-blue-600"
          onClick={handleRemoveTool}
        >
          Yes
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialogRoot>
);

export const AlertDialog = forwardRef(AlertDialogComponent);
