import Link from "next/link";

export default async function Page() {
  console.log('customers rendered');
  
  await fetch("http://localhost:3001/api/fast");
  // un-comment the line below and toggle the line above to toggle the api calls
  //await fetch("http://localhost:3001/api/slow");
  return <>
    <p>customers</p>
  </>;
}
