import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { z } from "zod";

import { useState } from "react";

const formSchema = z.object({
  is_buiness: z.boolean().default(false)
})

export const PageTest = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [ ...form ] 

  const openDialog = () => {
    setDialogOpen(true);
  };
}
  
  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <p>Test</p>
      <Button variant="outline" onClick={openDialog}>
        Test
      </Button>{" "}
      <Form {...form} >
        <Dialog open={isDialogOpen}>
          <DialogContent onClick={closeDialog}>
            <form onSubmit></form>
            <DialogHeader>
              <DialogTitle>TestForm</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                vitae cumque accusamus minima adipisci voluptatem voluptates
                atque dolorem dolor reprehenderit.
              </DialogDescription>
            </DialogHeader>

            <form></form>
          </DialogContent>
        </Dialog>
      </Form>
    </>
  );
};
