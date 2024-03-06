import { CalenderCard } from "@/components/CalenderCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
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
        <DialogContent onClick={closeDialog}>
          <DialogHeader>
            <DialogTitle><p className="text-2xl">New Appointment</p></DialogTitle>
            <DialogDescription>
           
            </DialogDescription>
          </DialogHeader>
         
        </DialogContent>
      </Dialog>
    </>
  );
};
