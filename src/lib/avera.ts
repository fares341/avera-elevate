import ballroom from "@/assets/venue-ballroom.jpg";
import nile from "@/assets/venue-nile.jpg";
import giza from "@/assets/venue-giza.jpg";
import modern from "@/assets/venue-modern.jpg";

export const WHATSAPP_NUMBER = "201001200697";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export type Region =
  | "Nile & Downtown"
  | "New Cairo & East"
  | "Giza & Pyramids"
  | "New Capital & Heliopolis";

export const REGIONS: Region[] = [
  "Nile & Downtown",
  "New Cairo & East",
  "Giza & Pyramids",
  "New Capital & Heliopolis",
];

export type Venue = {
  name: string;
  location: string;
  region: Region;
  capacity: string;
  image: string;
};

export const VENUES: Venue[] = [
  {
    name: "JW Marriott Hotel Cairo",
    location: "Mirage City, New Cairo",
    region: "New Cairo & East",
    capacity: "Up to 1,200 guests",
    image: ballroom,
  },
  {
    name: "The Westin Cairo Golf Resort & Spa",
    location: "Katameya Dunes, New Cairo",
    region: "New Cairo & East",
    capacity: "Up to 800 guests",
    image: modern,
  },
  {
    name: "Dusit Thani LakeView Cairo",
    location: "New Cairo",
    region: "New Cairo & East",
    capacity: "Up to 900 guests",
    image: modern,
  },
  {
    name: "Royal Maxim Palace Kempinski Cairo",
    location: "New Cairo",
    region: "New Cairo & East",
    capacity: "Up to 1,000 guests",
    image: ballroom,
  },
  {
    name: "The St. Regis Almasa Hotel",
    location: "New Administrative Capital",
    region: "New Capital & Heliopolis",
    capacity: "Up to 1,500 guests",
    image: modern,
  },
  {
    name: "The St. Regis Cairo",
    location: "Corniche El Nile, Downtown",
    region: "Nile & Downtown",
    capacity: "Up to 700 guests",
    image: nile,
  },
  {
    name: "Waldorf Astoria Cairo Heliopolis",
    location: "Heliopolis",
    region: "New Capital & Heliopolis",
    capacity: "Up to 1,100 guests",
    image: ballroom,
  },
  {
    name: "Hilton Cairo Heliopolis",
    location: "Heliopolis",
    region: "New Capital & Heliopolis",
    capacity: "Up to 1,000 guests",
    image: modern,
  },
  {
    name: "InterContinental Cairo Citystars",
    location: "Heliopolis",
    region: "New Capital & Heliopolis",
    capacity: "Up to 1,300 guests",
    image: modern,
  },
  {
    name: "Marriott Mena House, Cairo",
    location: "Pyramids View, Giza",
    region: "Giza & Pyramids",
    capacity: "Up to 600 guests",
    image: giza,
  },
  {
    name: "Cairo Marriott Hotel & Omar Khayyam Casino",
    location: "Zamalek",
    region: "Nile & Downtown",
    capacity: "Up to 1,400 guests",
    image: ballroom,
  },
  {
    name: "The Nile Ritz-Carlton, Cairo",
    location: "Downtown Nile",
    region: "Nile & Downtown",
    capacity: "Up to 800 guests",
    image: nile,
  },
  {
    name: "Four Seasons Hotel Cairo at Nile Plaza",
    location: "Garden City, Nile",
    region: "Nile & Downtown",
    capacity: "Up to 900 guests",
    image: nile,
  },
  {
    name: "Fairmont Nile City",
    location: "Nile Corniche",
    region: "Nile & Downtown",
    capacity: "Up to 750 guests",
    image: nile,
  },
  {
    name: "Four Seasons Hotel Cairo at The First Residence",
    location: "Giza",
    region: "Giza & Pyramids",
    capacity: "Up to 550 guests",
    image: giza,
  },
  {
    name: "Grand Nile Tower",
    location: "Garden City / Roda Island",
    region: "Nile & Downtown",
    capacity: "Up to 1,000 guests",
    image: nile,
  },
  {
    name: "Sofitel Cairo Downtown",
    location: "Downtown",
    region: "Nile & Downtown",
    capacity: "Up to 600 guests",
    image: modern,
  },
  {
    name: "Sofitel Cairo Nile El Gezirah",
    location: "Zamalek / El Gezirah Island",
    region: "Nile & Downtown",
    capacity: "Up to 850 guests",
    image: nile,
  },
  {
    name: "Semiramis InterContinental Cairo",
    location: "Downtown Nile",
    region: "Nile & Downtown",
    capacity: "Up to 1,200 guests",
    image: nile,
  },
];

export const PHILOSOPHY = [
  {
    letter: "A",
    title: "Art",
    text: "Inspiration: beauty in every detail — florals, sketch concepts and artisanal design.",
  },
  {
    letter: "V",
    title: "Vision",
    text: "We don't just imagine, we visualize the extraordinary. A clear vision today, an unforgettable reality tomorrow.",
  },
  {
    letter: "E",
    title: "Emotion",
    text: "It's not just what you see, it's what you feel. The most beautiful emotions are the ones we share.",
  },
  {
    letter: "R",
    title: "Reality",
    text: "Where ideas come to life. Behind the scenes: planning, design, details, coordination, execution, perfection.",
  },
  {
    letter: "A",
    title: "Attention to Details",
    text: "The beauty is in the details, the magic is in how they come together.",
  },
];

export const TIMELINE = [
  { time: "09:00 AM", title: "Setup & Styling", text: "Every piece in its perfect place." },
  { time: "11:00 AM", title: "Details Check", text: "Nothing overlooked, everything aligned." },
  { time: "02:00 PM", title: "Final Touches", text: "The little things that make it unforgettable." },
  {
    time: "05:00 PM",
    title: "Guests Arrival",
    text: "A seamless experience from the very first moment.",
  },
  { time: "07:00 PM", title: "The Moment", text: "All the details, one beautiful story." },
  { time: "11:30 PM", title: "A Perfect Ending", text: "Because every detail made it a memory." },
];

export const CORPORATE_SERVICES = [
  {
    title: "3D Max Spatial & Stage Concept Design",
    text: "Photoreal previsualisation of every stage, set and spatial flow before build.",
  },
  {
    title: "Custom Booths & Exhibition Architecture",
    text: "Bespoke fabrication and brand architecture engineered for high-traffic halls.",
  },
  {
    title: "Ultra HD LED Screens & Video Wall Systems",
    text: "Seamless fine-pitch LED, mapped content and live show playback.",
  },
  {
    title: "Concert-Grade Sound & Dynamic Lighting",
    text: "Line-array audio systems with programmed intelligent lighting design.",
  },
  {
    title: "Full Hotel Accommodation & VIP Guest Logistics",
    text: "Room blocks, transfers, protocol and delegate management end to end.",
  },
  {
    title: "Cinematic Photo & Video Production",
    text: "Multi-camera coverage, same-day edits and brand films.",
  },
  {
    title: "Red Carpet Layouts, Stages & Special Effects",
    text: "Arrival experiences with cold sparks, pyrotechnics and atmospherics.",
  },
];

export const TECH_REQUIREMENTS = [
  "LED Screens & Video Walls",
  "Stage & Truss Structure",
  "Sound System",
  "Lighting Design",
  "3D Design & Renders",
  "Custom Booth Build",
  "Photo & Video Production",
  "Special Effects (Cold Sparks / Pyro)",
  "Hotel Accommodation & Logistics",
];
