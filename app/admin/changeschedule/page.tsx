import Head from "next/head";
import { auth } from "../../../auth";
import prisma from "../../lib/prisma";

export default async function ChangeSchedule() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div>
        <h3>Access Denied</h3>
        <p>You do not have permission to access this page.</p>
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
        <h3>Access Denied</h3>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }

  const marketSchedule = await prisma.marketSchedule.findUnique({
    where: { id: "1" },
  });

  async function handleSubmit(formData: FormData) {
    "use server";
    const openingTime = formData.get("openingTime") as string;
    const closingTime = formData.get("closingTime") as string;

    if (!openingTime || !closingTime) {
      throw new Error("Invalid input");
    }

    await prisma.marketSchedule.update({
      where: { id: marketSchedule?.id },
      data: {
        startTime: new Date(`1970-01-01T${openingTime}:00`),
        endTime: new Date(`1970-01-01T${closingTime}:00`),
      },
    });

    alert("Schedule updated successfully!");
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Admin | Change Schedule</title>
      </Head>

      <div>
        <h3>Current Schedule</h3>
        {marketSchedule ? (
          <p>
          Opening Time: {new Date(marketSchedule.startTime).toLocaleTimeString()} <br />
          Closing Time: {new Date(marketSchedule.endTime).toLocaleTimeString()}
        </p>
      ) : (
        <p>No schedule found.</p>
      )}
        <h3>Change Schedule</h3>
        <form action={handleSubmit}>
          <label htmlFor="openingTime">Opening Time:</label>
          <input type="time" id="openingTime" name="openingTime" required />
          <br />
          <label htmlFor="closingTime">Closing Time:</label>
          <input type="time" id="closingTime" name="closingTime" required />
          <br />
          <button type="submit">Update Schedule</button>
        </form>
      </div>
    </>
  );
}
