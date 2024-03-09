import { CalenderCard } from "@/components/CalenderCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const PageCalender = () => {
  const [istDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className="flex justify-between">
        <h2>Calender</h2>
        <Button variant="outline" onClick={openDialog}>
          New Appointment
        </Button>
      </div>

      <CalenderCard />

      <Dialog open={istDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Appointment</DialogTitle>
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
