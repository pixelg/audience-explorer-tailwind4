import { useEffect, useState } from "react";
import {createClient} from "@supabase/supabase-js";
import { Database } from "@/types/sinclair-affiliate.types.ts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table.tsx";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)

type SinclairAffiliate = Database["public"]["Tables"]["sinclair_affiliates"]["Row"];

export const SinclairAffiliateTable = ()=>  {
  const [affiliates, setAffiliates] = useState<SinclairAffiliate[]>([]);

  useEffect(() => {
    getListings();
  }, []);

  async function getListings() {
    const { data, error } = await supabase
      .from('sinclair_affiliates')
      .select('*');

    if (error) {
      console.log("error", error);
      return;
    }

    setAffiliates(data);
  }

  return (
    <Table>
      <TableCaption>A list of Sinclair Affiliates.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Market</TableHead>
          <TableHead>stations</TableHead>
          <TableHead>affiliations</TableHead>
          <TableHead className="text-right">dma_rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {affiliates.map((affiliate: SinclairAffiliate) => (
          <TableRow key={affiliate.id}>
            <TableCell className="font-medium">{affiliate.market}</TableCell>
            <TableCell>{affiliate.stations}</TableCell>
            <TableCell>{affiliate.affiliations}</TableCell>
            <TableCell className="text-right">{affiliate.dma_rank}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    // <ul>
    //   {listings.map((instrument) => (
    //     <li key={instrument.name}>{instrument.name}</li>
    //   ))}
    // </ul>
  );
}
