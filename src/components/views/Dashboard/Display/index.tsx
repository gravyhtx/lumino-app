import React from 'react';
import { Card, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import { BarGraph } from "../BarGraph";
import { RecentSales } from "../RecentSales";



export const Display = () => {
  const  object = {
    overview: {
      a: {
        title: 'Gross Sales'
      },
      b: {
        title: 'Recent Transactions',
        description: 'Card Description'
      },
    },
    sales: {
      a: {
        title: 'Snapshot'
      },
      b: {
        title: 'Top Customers',
        description: 'Card Description'
      },
    },
    rewards: {
      a: {
        title: 'Overall Points'
      },
      b: {
        title: 'Activity Feed',
        description: 'Card Description'
      },
    },
    goals: {
      a: {
        title: 'Progress Overview'
      },
      b: {
        title: 'Active Goals',
        description: 'Card Description'
      },
    }
  }
  return (<>
    <div className="w-full lg:col-span-1">
      <Card className='p-6'>
        <CardTitle>Gross Sales</CardTitle>
        <br/>
        <BarGraph />
      </Card>
    </div>
    <div className="w-full lg:col-span-1">
      <Card className=' h-[448px]'>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <RecentSales />
      </Card>
    </div>
  </>)
}