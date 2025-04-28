"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoogleMapProps {
  address: string;
  address2: string;
  postcode: string;
  myMapPb?: string;
}

const GoogleMap = ({
  address,
  address2,
  postcode,
  myMapPb,
}: GoogleMapProps) => {
  // 住所をエンコードしてGoogle Maps埋め込みURLを作成
  const encodedAddress = encodeURIComponent(`${address}`);

  // pbパラメータが提供されている場合はそれを使用、ない場合は通常のマップURLを使用
  const mapSrc = myMapPb
    ? `https://www.google.com/maps/embed?pb=${myMapPb}`
    : `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&output=embed&markers=color:red%7C${encodedAddress}`;

  return (
    <div
      className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <div className="relative w-full h-full">
        <iframe
          src={mapSrc}
          title="Google Maps"
          className="absolute inset-0 w-full h-full border-0"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-auto p-4 bg-white border-t">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">DESIGN STUDIO</h3>
            <p className="text-sm text-neutral-600">
              {postcode} {address} {address2}
            </p>
          </div>
        </div>
        <Button variant="link" className="h-auto p-0 mt-2" asChild>
          <Link
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            GoogleMap
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GoogleMap;