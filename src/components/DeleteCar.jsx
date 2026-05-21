"use client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const DeleteCar = ({ carDetails }) => {
  const router = useRouter();
  const { _id, carName } = carDetails;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5000/car/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    if (res.ok) {
      const dbResponseFromBackend = await res.json();
      console.log("Database Response:", dbResponseFromBackend);
      toast.success("Successfully deleted data!");
      router.push("/all-cars");
      router.refresh();
    } else {
      toast.error(`Error: Server returned status ${res.status}`);
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className={
          "rounded-lg bg-neutral-200 hover:bg-neutral-400 text-black px-10 py-2"
        }
      >
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {carName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCar;
