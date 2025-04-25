import Head from "next/head";
import prisma from "../../lib/prisma";
// import Image from 'next/image';

// import Link from "next/link";

export default async function Viewschedule() {
  const marketSchedule = await prisma.marketSchedule.findUnique({
    where: { id: "1" },
  });
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Schedule</title>
      </Head>
      <div>
        <h3>Daily Schedule</h3>
        {marketSchedule ? (
          <p>
          Opening Time: {new Date(marketSchedule.startTime).toLocaleTimeString()} <br />
          Closing Time: {new Date(marketSchedule.endTime).toLocaleTimeString()}
        </p>
      ) : (
        <p>No schedule found.</p>
      )}
      </div>
      <div>
        <h3>Observed Holidays</h3>
        {marketSchedule?.holiday?.length > 0 ? (
          marketSchedule.holiday.map((holiday, index) => (
            <p key={index}>{holiday}</p>
          ))
        ) : (
          <p>No holidays found.</p>
        )}
      </div>
    </>
  );
}
