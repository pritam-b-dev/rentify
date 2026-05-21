"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
  TextArea,
} from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "../../../lib/auth-client";

const AddCarPage = () => {
  const { data: session } = authClient.useSession();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const myCar = Object.fromEntries(formData.entries());

    myCar.userId = session?.user?.id;

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:5000/car`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(myCar),
    });

    if (res.ok) {
      const dbResponseFromBackend = await res.json();
      console.log("Database Response:", dbResponseFromBackend);
      e.target.reset();
      toast.success("Successfully inserted data!");
    } else {
      toast.error(`Error: Server returned status ${res.status}`);
    }
  };

  return (
    <div className="p-5 container mx-auto">
      <h1 className="font-bold text-2xl">Add your car</h1>
      <form onSubmit={onSubmit} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Car Name */}
          <div className="md:col-span-2">
            <TextField name="carName" isRequired>
              <Label>Car Name</Label>
              <Input placeholder="Toyota Camry 2024" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Daily Rent Price */}
          <TextField name="dailyPrice" type="number" isRequired>
            <Label>Daily Rent Price (USD)</Label>
            <Input type="number" placeholder="50" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Car Type (Select Component) */}
          <div>
            <Select
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
          <TextField name="seatCapacity" type="number" isRequired>
            <Label>Seat Capacity</Label>
            <Input type="number" placeholder="5" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Availability Status (Select Component) */}
          <div>
            <Select
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
                  <ListBox.Item id="Unavailable" textValue="Unavailable">
                    Unavailable
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Pickup Location */}
          <div className="md:col-span-2">
            <TextField name="pickupLocation" isRequired>
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
            <TextField name="imageUrl" isRequired>
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
            <TextField name="description" isRequired>
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
          className="rounded-md w-full bg-neutral-500 hover:bg-neutral-700 text-white"
        >
          Add Car
        </Button>
      </form>
    </div>
  );
};

export default AddCarPage;
