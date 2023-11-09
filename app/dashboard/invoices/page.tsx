import { revalidatePath } from "next/cache";
import { RedirectType, permanentRedirect, redirect } from "next/navigation";

export default async function Page() {
  console.log('invoices');
  await fetch("http://localhost:3000/api");
  const create = async(formData: FormData) => {
    "use server";
    revalidatePath('/dashboard/customers');
    redirect('/dashboard/customers');
  }
  return <form method="POST" action={create}>
    <button type="submit">submit</button>
  </form>
}
