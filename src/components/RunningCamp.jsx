import React, { useEffect, useState } from 'react'

const RunningCamp = () => {

    const [allData, setAllData] = useState(null);
   // console.log(allData)

    const currentDate = new Date();

    

    useEffect(() => {
      fetch("https://crowd-donation-server.vercel.app/addCampaign")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });

      setAllData(runningData);
      //console.log(runningData)

    }, [])
    const runningData = allData.filter((data) => new Date(data.deadline) < currentDate)

    
    

  return (
    <div className='w-11/12 mx-auto my-8'>
        <p className='text-2xl text-center font-bold'>Running Campaigns</p>

        <div>

        </div>
    </div>
  )
}

export default RunningCamp