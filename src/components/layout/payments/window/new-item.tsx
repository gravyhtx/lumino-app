"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PopupWindow } from "../../window/popup-window";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NewItemProps {
  onClose: () => void;
  onSave?: (data: Record<string, unknown>) => void;
}

export default function NewItem({ onClose, onSave }: NewItemProps) {
  const [tab, setTab] = useState("product");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [taxable, setTaxable] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave({ tab, name, price, category, description, taxable, image });
    }
  };

  return (
    <PopupWindow onClose={onClose} onSave={handleSave} saveButtonText="Add Item">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Add Item</h2>

        {/* Tabs */}
        <Tabs defaultValue="product" value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image">Photo</Label>
            <div className="border h-[112px] flex items-center justify-center rounded-md relative">
              {image ? (
                <Image src={image} alt="Uploaded" fill className="object-contain rounded-md" />
              ) : (
                <label className="cursor-pointer text-sm text-muted-foreground flex items-center gap-2">
                  <Input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  <span className="border px-4 py-2 rounded-md">+ Add Image</span>
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              placeholder="No Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="p-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="taxable"
            checked={taxable}
            // onCheckedChange={setTaxable}
            />
            <Label htmlFor="taxable">Taxable</Label>
          </div>
        </div>
      </div>
    </PopupWindow>
  );
}