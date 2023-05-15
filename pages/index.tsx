import Icon from "@/components/shared/Icon/Icon";
import Demo from "@/components/views/Demo/Demo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Demo>
        <Icon className="text-red-500" variant="user" />
        Hello components! Our first component has been rendered
      </Demo>
    </main>
  );
}
