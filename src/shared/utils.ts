import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export async function getCookiesData(name: string) {
  const data = Cookies.get(name);
  return data;
}

export async function removeCookiesData(name: string): Promise<boolean> {
  try {
    if (Cookies.get(name)) {
      Cookies.remove(name);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function removeCookiesSignIn(name: string): Promise<boolean> {
  try {
    if (!Cookies.get(name)) {
      return false;
    }

    const domains = ["localhost", "demo.app"];
    const paths = ["/en", "/it", "/da"];

    domains.forEach((domain) => {
      paths.forEach((path) => {
        Cookies.remove(name, { domain, path });
      });
    });

    return true;
  } catch (error) {
    return false;
  }
}

export function setCookiesData(
  name: string,
  value: string,
  expires: number,
  sameSite: "strict" | "Strict" | "lax" | "Lax" | "none" | "None",
): void {
  Cookies.set(name, value, { expires: expires, path: "/", sameSite: sameSite });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
