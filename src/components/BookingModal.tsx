import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { VENUES, WHATSAPP_LINK, TECH_REQUIREMENTS } from "@/lib/avera";

const text = (max = 120) => z.string().trim().min(1, "Required").max(max);

const weddingSchema = z.object({
  couple: text(120),
  date: text(40),
  venue: text(120),
  guests: z.coerce.number().int().min(1).max(10000),
  whatsapp: text(30),
});

const corporateSchema = z.object({
  company: text(120),
  contact: text(120),
  eventType: text(60),
  venue: text(120),
  whatsapp: text(30),
});

const venueNames = VENUES.map((v) => v.name);

function selectClass() {
  return "h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground";
}

export function BookingModal({
  open,
  onOpenChange,
  preselectedVenue,
  defaultTab = "wedding",
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  preselectedVenue?: string;
  defaultTab?: "wedding" | "corporate";
}) {
  const [tab, setTab] = useState<string>(defaultTab);
  const [reqs, setReqs] = useState<string[]>([]);

  const send = (message: string) => {
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Inquiry ready", {
      description: "Your details were prepared and sent to our team on WhatsApp.",
    });
    onOpenChange(false);
  };

  const onWedding = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = weddingSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    const d = parsed.data;
    send(
      `AVERA Wedding Inquiry\nCouple: ${d.couple}\nDate: ${d.date}\nVenue: ${d.venue}\nGuests: ${d.guests}\nWhatsApp: ${d.whatsapp}`,
    );
  };

  const onCorporate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = corporateSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    const d = parsed.data;
    send(
      `AVERA Corporate RFP\nCompany: ${d.company}\nContact: ${d.contact}\nEvent Type: ${d.eventType}\nVenue: ${d.venue}\nRequirements: ${reqs.length ? reqs.join(", ") : "To be discussed"}\nWhatsApp: ${d.whatsapp}`,
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl tracking-wide">
            Book a Consultation
          </DialogTitle>
          <DialogDescription>
            Share a few details and we will continue the conversation on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wedding">Wedding</TabsTrigger>
            <TabsTrigger value="corporate">Corporate RFP</TabsTrigger>
          </TabsList>

          <TabsContent value="wedding">
            <form className="space-y-4 pt-2" onSubmit={onWedding}>
              <div className="space-y-2">
                <Label htmlFor="couple">Couple names</Label>
                <Input id="couple" name="couple" maxLength={120} placeholder="Nour & Karim" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="w-date">Wedding date</Label>
                  <Input id="w-date" name="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Estimated guests</Label>
                  <Input id="guests" name="guests" type="number" min={1} max={10000} placeholder="350" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="w-venue">Venue</Label>
                <select
                  id="w-venue"
                  name="venue"
                  className={selectClass()}
                  defaultValue={preselectedVenue ?? venueNames[0]}
                >
                  {venueNames.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                  <option>Other / Private Venue</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="w-wa">WhatsApp number</Label>
                <Input id="w-wa" name="whatsapp" maxLength={30} placeholder="+20 100 000 0000" />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                Send Wedding Inquiry
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="corporate">
            <form className="space-y-4 pt-2" onSubmit={onCorporate}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" maxLength={120} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact person</Label>
                  <Input id="contact" name="contact" maxLength={120} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="etype">Event type</Label>
                <select id="etype" name="eventType" className={selectClass()} defaultValue="Conference">
                  <option>Conference</option>
                  <option>Exhibition</option>
                  <option>Custom Booth</option>
                  <option>Gala</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-venue">Venue</Label>
                <select
                  id="c-venue"
                  name="venue"
                  className={selectClass()}
                  defaultValue={preselectedVenue ?? venueNames[0]}
                >
                  {venueNames.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                  <option>Custom Venue</option>
                </select>
              </div>
              <fieldset className="space-y-3 rounded-md border border-border p-4">
                <legend className="px-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Technical requirements
                </legend>
                {TECH_REQUIREMENTS.map((r) => (
                  <label key={r} className="flex items-center gap-3 text-sm">
                    <Checkbox
                      checked={reqs.includes(r)}
                      onCheckedChange={(c) =>
                        setReqs((prev) => (c ? [...prev, r] : prev.filter((x) => x !== r)))
                      }
                    />
                    {r}
                  </label>
                ))}
              </fieldset>
              <div className="space-y-2">
                <Label htmlFor="c-wa">WhatsApp number</Label>
                <Input id="c-wa" name="whatsapp" maxLength={30} placeholder="+20 100 000 0000" />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                Send Corporate RFP
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
