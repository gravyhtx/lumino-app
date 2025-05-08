import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PopupWindow } from "../../window/popup-window"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

interface NewPayLinkProps {
  onClose: () => void
  onSave?: () => void
}

export default function NewPayLink({ onClose }: NewPayLinkProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [invoiceNumberOption, setInvoiceNumberOption] = useState("optional")
  const [validateInvoice, setValidateInvoice] = useState("yes")
  const [noteOption, setNoteOption] = useState("optional")
  const [disclaimer, setDisclaimer] = useState("")
  const [submitButtonLabel, setSubmitButtonLabel] = useState("")
  const [applyCashDiscount, setApplyCashDiscount] = useState(true)
  const [autoAdjustPrices, setAutoAdjustPrices] = useState(false)
  const [requirePaymentOnFile, setRequirePaymentOnFile] = useState(false)

  const showInvoice = invoiceNumberOption !== "no"
  const showNote = noteOption !== "no"

  const isFinalStep = currentStep === 2

  return (
    <PopupWindow onClose={onClose} onSave={onClose} saveButtonText="Send Pay Link" columns>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-6 border-r space-y-8 overflow-y-auto">
          {!isFinalStep ? (
            <>
              {/* Invoice Options */}
              <div className="space-y-4">
                <p className="text-base">
                  Would you like to ask the customer for an <span className="font-medium">invoice number</span>?
                </p>
                <RadioGroup value={invoiceNumberOption} onValueChange={setInvoiceNumberOption} className="space-y-2 text-muted-foreground">
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

              {/* Validate Invoice */}
              <div className="space-y-4">
                <p className="text-base">
                  Would you like to validate the <span className="font-medium">invoice number</span>?
                </p>
                <RadioGroup value={validateInvoice} onValueChange={setValidateInvoice} className="space-y-2 text-muted-foreground">
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

              {/* Note Option */}
              <div className="space-y-4">
                <p className="text-base">
                  Would you like to allow the customer to provide a <span className="font-medium">note</span>?
                </p>
                <RadioGroup value={noteOption} onValueChange={setNoteOption} className="space-y-2 text-muted-foreground">
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

              {/* Disclaimer */}
              <div className="space-y-4">
                <p className="text-base">Would you like to show a custom disclaimer message?</p>
                <Textarea
                  value={disclaimer}
                  onChange={(e) => setDisclaimer(e.target.value)}
                  className="min-h-[100px] p-4"
                  placeholder="Enter your disclaimer message here..."
                />
              </div>
            </>
          ) : (
            <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-medium text-muted-foreground mb-6">Configure Button</h2>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="submit-label" className="text-base">
                      Custom label for <span className="font-semibold">'Submit'</span> button
                    </Label>
                    <Input
                      id="submit-label"
                      value={submitButtonLabel}
                      onChange={(e) => setSubmitButtonLabel(e.target.value)}
                      placeholder="Pay Now"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="h-px bg-gray-200 my-6"></div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="cash-discount"
                      checked={applyCashDiscount}
                      onCheckedChange={setApplyCashDiscount}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="cash-discount" className="text-lg font-medium">
                        Apply Cash Discount
                      </Label>
                      <p className="text-gray-500 text-xs mt-1">
                        Offer the customer a 4% discount if they pay with cash or eCheck. By enabling this feature, I
                        agree that the invoice provided to the customer includes the card price and it is expected
                        that the customer will input the card price into the amount field.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="auto-adjust"
                      checked={autoAdjustPrices}
                      onCheckedChange={setAutoAdjustPrices}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="auto-adjust" className="text-lg font-medium">
                        Auto Adjust Prices
                      </Label>
                      <p className="text-gray-500 text-xs mt-1">
                        The amount entered by the customer will be considered the cash price and will be automatically
                        increased by 4% to calculate the card price
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <p className="text-base">
                    Would you like to require the customer to save their{" "}
                    <span className="font-medium">payment-on-file</span>?
                  </p>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment-on-file"
                      checked={requirePaymentOnFile}
                      onCheckedChange={setRequirePaymentOnFile}
                    />
                    <Label htmlFor="payment-on-file">Yes, require the payment-on-file</Label>
                  </div>
                </div>
              </div>
          )}

          <div className="flex justify-between items-center mt-8">
              <Button disabled={isFinalStep} variant="outline" onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}>
                Back
              </Button>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2,].map((step) => (
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

        {/* Preview Panel */}
        <div className="bg-gray-50 p-6 overflow-y-auto max-h-[calc(700px)]">

            <PaymentFormPreview disclaimer={disclaimer} submitLabel={submitButtonLabel??"Pay Now"} showInvoice={showInvoice} showNote={showNote} />
        </div>
      </div>
    </PopupWindow>
  )
}

const PaymentFormPreview = ({ submitLabel, disclaimer, showNote, showInvoice }: { submitLabel: string; disclaimer: string; showNote: boolean; showInvoice: boolean }) => {
  return (
    <div className="w-full max-w-[320px] mx-auto border border-gray-300 rounded-xl overflow-hidden bg-white shadow-lg">
      <div className="relative h-[40px] bg-gray-800">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="p-4 space-y-6 mb-4">
        <div className="flex justify-center">
          <div className="w-32 h-20">
            <Image
              src={"/images/blue-buildings-logo.png"}
              alt="Company Logo"
              width={128}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl text-gray-600 font-bold focus:outline-none" contentEditable>Business Name</h2>
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
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
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
          {disclaimer && (
            <div className="space-y-4 mt-4 text-xs text-muted-foreground/80 italic">
              {disclaimer}
            </div>
          )}
        </div>

        <div className="mt-4">
          <Button className="w-full">{submitLabel===""?"Pay Now":submitLabel}</Button>
        </div>
      </div>
    </div>
  )
}
