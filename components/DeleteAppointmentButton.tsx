"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteAppointment } from "@/lib/actions/appointment.actions";
import { Trash } from "lucide-react";

export const DeleteAppointmentButton = ({
  appointmentId,
}: {
  appointmentId: string;
}) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteAppointment(appointmentId);
      if (result.success) {
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to delete appointment:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-red-600/20"
          title="Delete cancelled appointment"
        >
          <Trash className="text-red-500 cursor-pointer" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Appointment</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to permanently delete this cancelled
            appointment? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-dark-500 bg-dark-400 text-light-200 hover:bg-dark-500">
            Keep it
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="shad-danger-btn"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Yes, delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
