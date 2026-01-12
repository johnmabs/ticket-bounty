import TicketItem from "@/features/ticket/components/ticket-item";
import getTicket from "@/features/ticket/queries/get-ticket";

import { notFound } from "next/navigation";

export default async function TicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = await getTicket(id);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
}
