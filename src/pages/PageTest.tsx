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

export const PageTest = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <p>Test</p>
      <Button variant="outline" onClick={openDialog}>
        Test
      </Button>
      <Dialog open={isDialogOpen}>
        <DialogContent onClick={closeDialog}>
          <DialogHeader>
            <DialogTitle>TestForm</DialogTitle>
            <DialogDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vitae cumque accusamus minima adipisci voluptatem voluptates atque dolorem dolor reprehenderit.</DialogDescription>
            <Form {...form}></Form>
          </DialogHeader>
            
        </DialogContent>
      </Dialog>
    </>
  );
};
