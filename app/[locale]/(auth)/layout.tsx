import Link from "next/link";
import { notFound } from "next/navigation";
import { createTranslator } from "next-intl";

import "@/app/[locale]/globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/app/[locale]/(routes)/components/Footer";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

type Props = {
  params: { locale: string };
};

async function getLocales(locale: string) {
  try {
    return (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getLocales(locale);
  const t = createTranslator({ locale, messages });
  return {
    title: t("RootLayout.title"),
    description: t("RootLayout.description"),
  };
}

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="flex justify-end items-center space-x-5 w-full p-5">
        <Link
          href={process.env.NEXT_PUBLIC_GITHUB_REPO_URL || "#"}
          className=" border rounded-md p-2"
        >
        </Link>

        <div className="flex items-center border rounded-md p-2">
          <Link href="https://discord.gg/Dd4Aj6S4Dz">
            <DiscordLogoIcon className="size-5" />
          </Link>
        </div>
        <ThemeToggle />
      </div>
      <div className="flex items-center grow h-full overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
