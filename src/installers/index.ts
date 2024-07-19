import { envVariablesInstaller } from "~/installers/envVars.js";
import { nextAuthInstaller } from "~/installers/nextAuth.js";
import { prismaInstaller } from "~/installers/prisma.js";
import { tailwindInstaller } from "~/installers/tailwind.js";
import { trpcInstaller } from "~/installers/trpc.js";
import { type PackageManager } from "~/utils/getUserPkgManager.js";
import { dbContainerInstaller } from "./dbContainer.js";
import { drizzleInstaller } from "./drizzle.js";
import { dynamicEslintInstaller } from "./eslint.js";
import { encryptionInstaller } from "./encryption.js";
import { intlInstaller } from "./intl.js";
import { chakraInstaller } from "./chakra.js";
import { shadcnInstaller } from "./shadcn.js";
import { translationInstaller } from "./translation.js";

// Turning this into a const allows the list to be iterated over for programmatically creating prompt options
// Should increase extensibility in the future
export const availablePackages = [
  "nextAuthWithGoogle",
  "prisma",
  "drizzle",
  "tailwind",
  "trpc",
  "envVariables",
  "eslint",
  "dbContainer",
  "shadcn",
  "chakra",
  "nextAuthWithFirebase",
  "nextAuthWithMockUserEncryption",
  "intl",
  "encryption",
  "translation"
] as const;
export type AvailablePackages = (typeof availablePackages)[number];

export const databaseProviders = [
  "mysql",
  "postgres",
  "sqlite",
  "planetscale",
] as const;
export type DatabaseProvider = (typeof databaseProviders)[number];

export interface InstallerOptions {
  projectDir: string;
  pkgManager: PackageManager;
  noInstall: boolean;
  packages?: PkgInstallerMap;
  projectName: string;
  scopedAppName: string;
  databaseProvider: DatabaseProvider;
}

export type Installer = (opts: InstallerOptions) => void;

export type PkgInstallerMap = {
  [pkg in AvailablePackages]: {
    inUse: boolean;
    installer: Installer;
  };
};

export const buildPkgInstallerMap = (
  packages: AvailablePackages[],
  databaseProvider: DatabaseProvider
): PkgInstallerMap => ({
  nextAuthWithGoogle: {
    inUse: packages.includes("nextAuthWithGoogle"),
    installer: nextAuthInstaller,
  },
  prisma: {
    inUse: packages.includes("prisma"),
    installer: prismaInstaller,
  },
  drizzle: {
    inUse: packages.includes("drizzle"),
    installer: drizzleInstaller,
  },
   nextAuthWithFirebase: {
    inUse: packages.includes("nextAuthWithFirebase"),
    installer: nextAuthInstaller,
  },
  nextAuthWithMockUserEncryption: {
    inUse: packages.includes("nextAuthWithMockUserEncryption"),
    installer: nextAuthInstaller,
  },
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller,
  },
  shadcn: {
    inUse: packages.includes("shadcn"),
    installer: shadcnInstaller,
  },
  chakra: {
    inUse: packages.includes("chakra"),
    installer: chakraInstaller,
  },
  trpc: {
    inUse: packages.includes("trpc"),
    installer: trpcInstaller,
  },
  dbContainer: {
    inUse: ["mysql", "postgres"].includes(databaseProvider),
    installer: dbContainerInstaller,
  },
  envVariables: {
    inUse: true,
    installer: envVariablesInstaller,
  },
  eslint: {
    inUse: true,
    installer: dynamicEslintInstaller,
  },
  intl: {
    inUse: packages.includes("intl"),
    installer: intlInstaller,
  },
  translation: {
    inUse: packages.includes("translation"),
    installer: translationInstaller,
  },
  encryption: {
    inUse: packages.includes("encryption"),
    installer: encryptionInstaller,
  },
});
