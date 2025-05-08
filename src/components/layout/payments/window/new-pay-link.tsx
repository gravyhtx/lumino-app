import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PopupWindow } from "../../window/popup-window";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface NewPayLinkProps {
  onClose: () => void;
  onSave?: () => void;
}
interface PaymentFormPreviewProps {
  showNote: boolean
  showInvoice: boolean
}

const PaymentFormPreview = ({showNote, showInvoice}: PaymentFormPreviewProps) => {
  return (
    <div className="w-full max-w-[320px] border border-gray-300 rounded-xl overflow-hidden bg-white shadow-lg">
      <div className="relative h-[40px] bg-gray-800">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="flex justify-center">
          <div className="w-32 h-20 relative">
            <Image
              src="/images/blue-buildings-logo.png"
              alt="Company Logo"
              width={128}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl text-gray-600">Services</h2>
          <div className="text-right">
            <button className="text-sm text-orange-500">Clear Form</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preview-amount" className="text-sm text-muted-foreground">
              Payment Amount <span className="text-red-500">*</span>
            </Label>
            <Input id="preview-amount" placeholder="Amount" className="h-9" />
          </div>

          {showInvoice && (
            <div className="flex items-center space-x-2">
              <Checkbox id="preview-invoice" />
              <label
                htmlFor="preview-invoice"
                className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have an invoice
              </label>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="preview-firstname" className="text-sm text-muted-foreground">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input id="preview-firstname" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preview-lastname" className="text-sm text-muted-foreground">
              Last Name<span className="text-red-500">*</span>
            </Label>
            <Input id="preview-lastname" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preview-email" className="text-sm text-muted-foreground">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input id="preview-email" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preview-phone" className="text-sm text-muted-foreground">
              Phone
            </Label>
            <Input id="preview-phone" className="h-9" />
          </div>

          {showNote && (
            <div className="space-y-2">
              <Label htmlFor="preview-note" className="text-sm text-muted-foreground">
                Note
              </Label>
              <Input id="preview-note" className="h-9" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function NewPayLink({ onClose, onSave }: NewPayLinkProps) {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [invoiceNumberOption, setInvoiceNumberOption] = useState("optional")
  const [validateInvoice, setValidateInvoice] = useState("yes")
  const [noteOption, setNoteOption] = useState("optional")
  const [disclaimer, setDisclaimer] = useState("")
  const showNote = true; // Replace with actual condition
  const showInvoice = true; // Replace with actual condition
  return (
    <PopupWindow onClose={onClose} onSave={onClose} saveButtonText="Send Pay Link" columns= {true}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 border-r">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-base">
                    Would you like to ask the customer for an <span className="font-medium">invoice number</span> ?
                  </p>
                  <RadioGroup value={invoiceNumberOption} onValueChange={setInvoiceNumberOption} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="optional" id="invoice-optional" />
                      <Label htmlFor="invoice-optional">Yes, but it is optional</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="required" id="invoice-required" />
                      <Label htmlFor="invoice-required">Yes, and it is required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="invoice-no" />
                      <Label htmlFor="invoice-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <p className="text-base">
                    Would you like to validate the <span className="font-medium">invoice number</span> ?
                  </p>
                  <RadioGroup value={validateInvoice} onValueChange={setValidateInvoice} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="validate-yes" />
                      <Label htmlFor="validate-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="validate-no" />
                      <Label htmlFor="validate-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <p className="text-base">
                    Would you like to allow the customer to provide a <span className="font-medium">note</span> ?
                  </p>
                  <RadioGroup value={noteOption} onValueChange={setNoteOption} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="optional" id="note-optional" />
                      <Label htmlFor="note-optional">Yes, but it is optional</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="required" id="note-required" />
                      <Label htmlFor="note-required">Yes, and it is required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="note-no" />
                      <Label htmlFor="note-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <p className="text-base">Would you like to show a custom disclaimer message?</p>
                  <Textarea
                    value={disclaimer}
                    onChange={(e) => setDisclaimer(e.target.value)}
                    className="min-h-[100px]"
                    placeholder="Enter your disclaimer message here..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Back
                </Button>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-2 w-2 rounded-full ${step === currentStep ? "bg-primary" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                  <Button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}>Next</Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 flex justify-center">
              <PaymentFormPreview showInvoice={invoiceNumberOption !== "no"} showNote={noteOption !== "no"} />
            </div>
          </div>
    </PopupWindow>
  )
}
