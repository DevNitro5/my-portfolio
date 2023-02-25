import { firstName } from '@/utils/config';

export default function Head() {
  return (
    <>
      <title>{firstName} | Blogs</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Get in touch with me" />
      <link rel="icon" href="/A_Black.png" />
    </>
  );
}
