import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://www.jswonemsme.com/_nuxt/img/JSW%20MSME-01.2420457.svg"
        alt="JSW One MSME"
        width={100}
        height={35}
        priority
      />
    </div>
  );
};

export default Logo;
