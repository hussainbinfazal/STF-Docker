import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Welcome to Smart Fiber Internet</h2>
      <h2>We are checking the NextAuth integration in progress</h2>
      <div className="max-w-xl text-center mt-8">
        <p>
          Experience blazing fast and reliable fiber internet for your home and
          business. Our service ensures seamless connectivity, low latency, and
          top-notch customer support.
        </p>
        <ul className="list-disc list-inside mt-4 text-left">
          <li>Ultra-fast speeds up to 1Gbps</li>
          <li>24/7 technical support</li>
          <li>Easy installation and setup</li>
          <li>Secure and private connection</li>
        </ul>
        <p className="mt-6">
          <strong>Sign up today</strong> and enjoy the future of internet
          connectivity!
        </p>
      </div>
    </div>
  );
}
