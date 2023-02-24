import Link from 'next/link';
import Image from 'next/image';

export function NavbarBrand() {
  return (
    <Link href="/" className="font-semibold text-xl">
      <Image src={'/anish.png'} alt="anish" width={60} height={60} priority />
    </Link>
  );
}
