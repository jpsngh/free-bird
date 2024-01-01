import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import Cta from '@/components/ui/Cta'
import { Timeline } from 'antd';
const page = () => (
    <div className="m-5 p-1 text-3xl ">

        <Cta> </Cta>
  <Timeline
    mode="alternate"
    items={[
      {
         label: "2018",
        children: (<p className="p-2 m-2 text-2xl ">Started our first Gym</p>),
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: (
         <img src="https://www.freebirdhealthclub.ca/assets/img/logo/logo.png" alt="image" height={70} width={70} className="m-2 p-2" />
        ),
        children: <p className="p-2 m-2 text-2xl ">Started our second Gym in Missisauga</p>,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        children: 'Technical testing 2015-09-01',
      },
    ]}
  />
  </div>
);
export default page;