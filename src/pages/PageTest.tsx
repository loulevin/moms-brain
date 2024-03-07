'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";

import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  })
})

export const PageTest = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

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
      </Button>{" "}
      <Form {...form}>
        <Dialog open={isDialogOpen}>
          <DialogContent onClick={closeDialog}>
            
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
