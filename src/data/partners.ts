// Set the official HTTPS destinations when they are ready. Shared by the
// homepage and philanthropy page; unset destinations render as unavailable.
export const partnerUrls = {
  vigil360: process.env.NEXT_PUBLIC_VIGIL_360_URL || "",
  guardiansKeeper: process.env.NEXT_PUBLIC_TGK_URL || "https://theguardianskeeper.com/",
} as const;
