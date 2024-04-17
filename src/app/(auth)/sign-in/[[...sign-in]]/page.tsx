import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-20 flex h-full flex-col items-center">
      <SignIn />
    </div>
  );
}
