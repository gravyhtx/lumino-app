"use client"

import React, { useEffect, useState } from 'react';
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import New from "./chats/new";
import Chat from "./chats/chat";
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import { AppWindowMac, MessageSquarePlus } from 'lucide-react';
import { formatLink } from '@/lib/utils';
import { useHashChange } from '@/hooks/useHashChange/useHashChange';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
  },[])
  const { currentView } = useHashChange();
  const iconClass = "h-5 w-5";
  const chat = [
    { name: 'New Chat', icon: <MessageSquarePlus className={iconClass} />, component: <New />},
    { name: 'Report 07/24', icon: <AppWindowMac className={iconClass} />, component: <Chat /> },
  ];

  const currentLink = chat.find(link => formatLink(link.name) === formatLink(currentView));

  const View = () => {
    return currentLink?.component ?? <New />;
  }
  return (<>
      <SideNav links={[]} chatData={chat} />
      <div className="flex flex-col">
        <Header links={[]} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
        { isLoaded ?
          <ViewContainer>
            <View />
          </ViewContainer>
        :
        <div className="flex items-center">
          <BouncingDotsLoader />
        </div> }
        </main>
      </div>
  </>)
}