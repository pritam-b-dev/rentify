"use client";
import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const EditCarDetails = ({ carDetails }) => {
  const router = useRouter();
  const {
    _id,
    carName,
    dailyPrice,
    carType,
    seatCapacity,
    availabilityStatus,
    pickupLocation,
    imageUrl,
    description,
  } = carDetails;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const myCar = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/car/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(myCar),
      },
    );
    if (res.ok) {
      const dbResponseFromBackend = await res.json();
      console.log("Database Response:", dbResponseFromBackend);
      router.refresh();
      e.target.reset();
      toast.success("Successfully umdated data!");
    } else {
      toast.error(`Error: Server returned status ${res.status}`);
    }
  };

  return (
    <Modal>
      <Button
        variant="outline"
        className={
          "rounded-lg bg-neutral-200 hover:bg-neutral-400 text-black px-10 py-2 mr-4"
        }
      >
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PencilToSquare className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Here</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Car Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={carName}
                        name="carName"
                        isRequired
                      >
                        <Label>Car Name</Label>
                        <Input
                          placeholder="Toyota Camry 2024"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Daily Rent Price */}
                    <TextField
                      defaultValue={dailyPrice}
                      name="dailyPrice"
                      type="number"
                      isRequired
                    >
                      <Label>Daily Rent Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="50"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Car Type (Select Component) */}
                    <div>
                      <Select
                        defaultValue={carType}
                        name="carType"
                        isRequired
                        className="w-full"
                        placeholder="Select car type"
                      >
                        <Label>Car Type</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="SUV" textValue="SUV">
                              SUV
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Sedan" textValue="Sedan">
                              Sedan
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Hatchback" textValue="Hatchback">
                              Hatchback
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Truck" textValue="Truck">
                              Truck
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Seat Capacity */}
                    <TextField
                      defaultValue={seatCapacity}
                      name="seatCapacity"
                      type="number"
                      isRequired
                    >
                      <Label>Seat Capacity</Label>
                      <Input
                        type="number"
                        placeholder="5"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Availability Status (Select Component) */}
                    <div>
                      <Select
                        defaultValue={availabilityStatus}
                        name="availabilityStatus"
                        isRequired
                        className="w-full"
                        placeholder="Select status"
                      >
                        <Label>Availability Status</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Available" textValue="Available">
                              Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                              id="Unavailable"
                              textValue="Unavailable"
                            >
                              Unavailable
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Pickup Location */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={pickupLocation}
                        name="pickupLocation"
                        isRequired
                      >
                        <Label>Pickup Location</Label>
                        <Input
                          placeholder="Dhaka Airport, Terminal 1"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://i.ibb.co/example/car.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the car condition, features (AC, Automatic, etc.)..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="outline"
                    className="rounded-none w-full bg-cyan-500 text-white"
                  >
                    Update Information
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditCarDetails;
