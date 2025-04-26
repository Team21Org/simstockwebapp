// ./app/admin/changeschedule/page.tsx
import { auth } from "../../../auth";
import prisma from "../../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function MarketScheduleAdmin() {
  const session = await auth();

  // Only allow admins
  if (!session?.user?.email) {
    return (
      <div>
        <p>You are not authorized to view this page.</p>
      </div>
    );
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true },
  });
  if (!user || user.role !== "ADMIN") {
    return (
      <div>
        <p>You are not authorized to view this page.</p>
      </div>
    );
  }

  // Fetch the current schedule (assuming only one row)
  const schedule = await prisma.marketSchedule.findFirst();

  async function updateSchedule(formData: FormData) {
    "use server";
    const openTime = formData.get("openTime") as string;
    const closeTime = formData.get("closeTime") as string;
    if (!openTime || !closeTime) return;

    await prisma.marketSchedule.updateMany({
      data: { startTime: openTime, endTime: closeTime },
    });
    revalidatePath("/admin/changeschedule");
    redirect("/admin/changeschedule");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Update Market Schedule</h1>
      <form action={updateSchedule}>
        <div className="mb-4">
          <label
            htmlFor="openTime"
            className="block text-sm font-medium text-gray-700"
          >
            Open Time (HH:mm)
          </label>
          <input
            id="openTime"
            name="openTime"
            type="time"
            defaultValue={schedule?.startTime ?? ""}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="closeTime"
            className="block text-sm font-medium text-gray-700"
          >
            Close Time (HH:mm)
          </label>
          <input
            id="closeTime"
            name="closeTime"
            type="time"
            defaultValue={schedule?.endTime ?? ""}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update Schedule
        </button>
      </form>
    </div>
  );
}
