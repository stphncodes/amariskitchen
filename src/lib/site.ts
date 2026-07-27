/**
 * Single source of truth for brand info, links, and images.
 *
 * Images: each slot's `src` currently points at a free Unsplash food photo.
 * To use your own photography, drop files into /public/images and change the
 * `src` values (e.g. "/images/jollof.jpg"). If a remote image ever fails to
 * load, the branded gradient placeholder renders automatically.
 *
 * Logo: the header/footer logo is an SVG recreation of the brand artwork.
 * To use the original logo file instead, save it as /public/logo.png and set
 * LOGO_IMAGE.src to "/logo.png".
 */

export const SITE = {
  name: "Amari's Kitchen",
  tagline: "Great Taste - Quality Service",
  location:
    "Federal Low-Cost, Opposite St. Mary Church, Maiduguri, Borno State, Nigeria",
  phone: "+234 902 595 6773",
  phoneHref: "tel:+2349025956773",
  deliveryPhone: "0902 595 6773",
  deliveryPhoneHref: "tel:+2349025956773",
  email: "amariskitchen83@gmail.com",
  emailHref: "mailto:amariskitchen83@gmail.com",
  whatsapp: "https://wa.me/2349025956773",
  whatsappOrderMessage:
    "https://wa.me/2349025956773?text=Hello%20Amari%27s%20Kitchen!%20I%27d%20like%20to%20place%20an%20order.",
  instagram: "https://instagram.com/amariskitchen83",
  tiktok: "https://tiktok.com/@amariskitchen83",
  socialHandle: "@amariskitchen83",
  hours: "10:00 AM – 7:30 PM, daily",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Federal+Low-Cost+St+Mary+Church+Maiduguri+Borno+State+Nigeria",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

/** Set src to "/logo.png" after saving the original logo file in /public. */
export const LOGO_IMAGE: { src: string | null } = {
  src: null,
};

export type ImageSlot = {
  /** A /public path or URL. null (or a failed load) shows the placeholder. */
  src: string | null;
  alt: string;
  emoji: string;
  label: string;
  /** Tailwind gradient classes used as the fallback while src is null/broken. */
  gradient: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const HERO_IMAGE: ImageSlot = {
  src: unsplash("photo-1665332195309-9d75071138f0"),
  alt: "A Nigerian party spread: smoky jollof rice with peppers, grilled fish and chicken skewers",
  emoji: "🍛",
  label: "Fresh From the Kitchen",
  gradient: "from-orange-600 via-amber-500 to-yellow-400",
};

export const ABOUT_IMAGE: ImageSlot = {
  src: unsplash("photo-1763048443535-1243379234e2"),
  alt: "A bowl of rich Nigerian egusi soup with assorted meat, held out with pride",
  emoji: "🥘",
  label: "Made With Pride",
  gradient: "from-orange-600 via-amber-500 to-yellow-400",
};

export const STORY_IMAGE: ImageSlot = {
  src: unsplash("photo-1765584829997-12ab011bb5b3"),
  alt: "A Nigerian food vendor preparing fresh food at her stall",
  emoji: "👩🏾‍🍳",
  label: "Our Kitchen",
  gradient: "from-amber-500 via-orange-500 to-red-500",
};

export const GALLERY_IMAGES: ImageSlot[] = [
  {
    src: unsplash("photo-1664992960082-0ea299a9c53e"),
    alt: "Smoky party jollof rice topped with grilled chicken skewers",
    emoji: "🍚",
    label: "Party Jollof",
    gradient: "from-orange-500 to-red-500",
  },
  {
    src: unsplash("photo-1585032226651-759b368d7246"),
    alt: "Stir-fried noodles with peppered chicken and vegetables",
    emoji: "🍜",
    label: "Peppered Noodles",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    src: unsplash("photo-1578985545062-69928b1d9587"),
    alt: "A rich celebration cake finished with elegant icing",
    emoji: "🎂",
    label: "Celebration Cakes",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    src: unsplash("photo-1624128082323-beb6b8b508db"),
    alt: "A platter of golden freshly baked meat pies",
    emoji: "🥧",
    label: "Meat Pies & Pastries",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    src: unsplash("photo-1765584830134-12d879ad13bd"),
    alt: "Spicy suya with fresh peppers hot off the street grill",
    emoji: "🍢",
    label: "Suya & Small Chops",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    src: unsplash("photo-1654923064899-2d78d94a7f80"),
    alt: "A chilled glass of deep-red zobo garnished with orange",
    emoji: "🧃",
    label: "Natural Drinks",
    gradient: "from-red-500 to-rose-500",
  },
  {
    src: unsplash("photo-1562967914-608f82629710"),
    alt: "Crispy golden fried chicken",
    emoji: "🍗",
    label: "Fried Chicken",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    src: unsplash("photo-1549465220-1a8b9238cd48"),
    alt: "A wrapped surprise package with cake, drinks and treats",
    emoji: "🎁",
    label: "Surprise Packages",
    gradient: "from-fuchsia-500 to-orange-500",
  },
];
