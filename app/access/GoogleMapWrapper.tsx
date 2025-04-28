"use client";

import GoogleMap from "@/components/GoogleMap";

const GoogleMapWrapper = () => {
  return (
    <GoogleMap
      postcode="150-0002"
      address="東京都渋谷区渋谷3-2-3"
      address2="＊＊ビル1F"
      myMapPb="!1m14!1m8!1m3!1d6483.607135192137!2d139.707486!3d35.657211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0048e35015%3A0x11aa6d13dbb7f87d!2z5bid6YO96Z2S5bGx44OT44Or!5e0!3m2!1sja!2sus!4v1743063722795!5m2!1sja!2sus"
    />
  );
};

export default GoogleMapWrapper;