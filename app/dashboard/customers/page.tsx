import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import values from '@/app/lib/placeholder-data'

console.log("a simple check on status"); // next.js default comment (test) 
console.log(values);

// function Pen(name, color, price) {
//   this.name = name;
//   this.color = color;
//   this.price = price;
// }

// const pen1 = new Pen("Marker", "Blue", "$3");

// class pencil {
//   constructor(nib: string, size: number){
//     this.nib = nib;
//     this.size = size; 
//   }
//   showNib() {
//     console.log(`the nib is ${this.nib}`);
//   }
// }
// console.log(pen1)
// const pencil1 = new pencil('graphite', 10);
// pencil1.showNib();

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
