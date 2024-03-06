
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


export const CalenderForm = () => {
  return (
    <>
       <Dialog open={istDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle><p className="text-2xl">New Appointment</p></DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={closeDialog}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
