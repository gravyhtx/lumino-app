import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

interface ResponsiveDialogProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: {
    desktop?: string;
    mobile?: string;
  }
  width?: string | number;
  drawerCancel?: React.ReactNode | true;
}

/**
 * Responsive dialog component that switches between Dialog and Drawer
 * based on the screen size.
 * 
 * @param children - The content to be displayed inside the dialog/drawer.
 * @param isOpen - Boolean indicating whether the dialog/drawer is open.
 * @param setIsOpen - Function to set the open state of the dialog/drawer.
 * @param title - The title of the dialog/drawer.
 * @param description - Optional description of the dialog/drawer.
 * 
 * @example
 * const [isOpen, setIsOpen] = React.useState(false);
 * return (
 *   <>
 *     <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
 *     <ResponsiveDialog
 *       isOpen={isOpen}
 *       setIsOpen={setIsOpen}
 *       title="Dialog Title"
 *       description="This is a description"
 *     >
 *       <p>Dialog Content</p>
 *     </ResponsiveDialog>
 *   </>
 * );
 */
export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  children,
  open,
  onOpenChange,
  title,
  description,
  footer,
  className,
  width,
  drawerCancel
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const dialogWidth = width ? (typeof width === 'number' ? `${width}px` : width) : '425px';

  const Cancel = () => drawerCancel === true ? <Button variant="outline">Cancel</Button> : drawerCancel;

  return isDesktop ? (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(`sm:max-w-[${dialogWidth}]`, className?.desktop)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={className?.mobile}>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
        {footer &&
        <DrawerFooter className="pt-2">
          {drawerCancel &&
            <DrawerClose asChild>
              <Cancel />
            </DrawerClose>}
        </DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
}