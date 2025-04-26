// ./app/market/schedule/page.tsx

import Head from "next/head";
import prisma from "../../lib/prisma";

export default async function Viewschedule() {
  const marketSchedule = await prisma.marketSchedule.findFirst();
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
        <h1 id="scheduleTitle"> Current Schedule </h1>
        {marketSchedule ? (
          <p id="scheduleTxt">
            Opening Time: {marketSchedule.startTime} <br />
            Closing Time: {marketSchedule.endTime} <br />
            Open Monday - Friday
          </p>
        ) : (
          <p>No schedule found.</p>
        )}
      </div>
      <div>
        <h1 id="holidayTitle">Observed Holidays</h1>
        <div className="holidayContainer">
          {marketSchedule?.holiday?.length > 0 ? (
            marketSchedule.holiday.map((holiday, index) => (
              <p id="holidayTxt" key={index}>
                {holiday}
              </p>
            ))
          ) : (
            <p>No holidays found.</p>
          )}
        </div>
      </div>
    </>
  );
}
